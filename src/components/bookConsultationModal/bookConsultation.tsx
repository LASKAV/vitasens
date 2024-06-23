import CloseModal from '@/assets/images/close-modal-icon.svg';
import Clock from '@/assets/images/clock-icon.svg';
import Phone from '@/assets/images/phone-filled-tiffany-icon.svg';
import Email from '@/assets/images/email-filled-tiffany-icon.svg';
import type { BookConsultationModalProps } from '@/components/bookConsultationModal/bookConsultationModal';
import { createSignal } from 'solid-js';
import { fetchApiPost } from '@/lib/strapi';

export type FormData = {
  name: string;
  phone: string;
  serviceId: number | undefined;
};

export default (props: BookConsultationModalProps) => {
  const [isSubmitButtonDisabled, setSubmitButtonDisabled] =
    createSignal<boolean>(false);
  const [formData, setFormData] = createSignal<FormData>({
    name: '',
    phone: '',
    serviceId: props.serviceTypeId,
  });

  const handleChange = (e: Event) => {
    const target = e.target as HTMLInputElement;
    setFormData({
      ...formData(),
      [target.name]: target.value,
    });
  };

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    setSubmitButtonDisabled(true);

    fetchApiPost<string>({
      endpoint: 'create-order',
      payload: JSON.stringify(formData()),
    })
      .then(() => {
        props.onRequestSuccess();
      })
      .catch(e => {
        console.error('err', e);
      })
      .finally(() => {
        setSubmitButtonDisabled(false);
      });
  };

  return (
    <>
      <div
        onClick={props.onClose}
        class='flex justify-end hover:cursor-pointer'
      >
        <img src={CloseModal.src} alt='' />
      </div>
      <div class='mx-auto max-w-[20.225rem] lg:max-w-[20.225rem]'>
        <div class='mx-auto flex justify-center pt-[0rem] text-[1.5rem] font-semibold tracking-[0.075rem] [text-shadow:1px_2px_4px_rgba(0,0,0,0.25)]'>
          <span class='text-black'>
            Запис на&nbsp;<span class='text-tiffany'>консультацію</span>
          </span>
        </div>
        <form
          onSubmit={handleSubmit}
          id='bookingModal'
          method='post'
          class='flex flex-col'
        >
          <div class='flex flex-col pt-[1.31rem]'>
            <label class='pb-[0.62rem] text-[#111]' for='booking-name'>
              Імʼя
            </label>
            <input
              class='h-[2.68rem] rounded-[0.625rem] bg-[#ECECEC] pl-4 tracking-[0.05rem] outline-none placeholder:text-[#B6B6B6]'
              type='text'
              placeholder='Євген Вітасенс'
              id='booking-name'
              name='name'
              onInput={handleChange}
              required
            />
          </div>
          <div class='flex flex-col pt-[0.62rem] lg:pt-[1.25rem]'>
            <label class='pb-[0.62rem] text-[#111]' for='booking-phone'>
              Номер телефону
            </label>
            <input
              class='h-[2.68rem] rounded-[0.625rem] bg-[#ECECEC] pl-4 tracking-[0.05rem] outline-none placeholder:text-[#B6B6B6] disabled:text-[#111]'
              type='tel'
              placeholder='0505820003'
              size='10'
              id='booking-phone'
              name='phone'
              onInput={handleChange}
              required
            />
          </div>
          <div class='flex flex-col pt-[0.62rem] lg:pt-[1.25rem]'>
            <label class='pb-[0.62rem] text-[#111]' for='booking-service'>
              Послуги
            </label>
            <input
              class='h-[2.68rem] overflow-ellipsis rounded-[0.625rem] bg-[#ECECEC] pl-4 outline-none drop-shadow-[2px_2px_0px_rgba(0,0,0,0.25)]'
              type='text'
              value={props.serviceType}
              id='booking-service'
              disabled
            />
          </div>
          <div class='flex flex-row items-center justify-center pt-[0.94rem] lg:pt-[1.56rem]'>
            <input
              class='mr-2 h-[0.8125rem] bg-[#D9D9D9]'
              type='checkbox'
              id='booking-policy'
              required
            />
            <label class='text-[0.6875rem] font-bold' for='booking-policy'>
              Я згоден (на) з{' '}
              <a href='/' class='text-tiffany'>
                політикою конфіденційності
              </a>
            </label>
          </div>
          <div class='flex justify-end py-[2.2rem] lg:pt-[1.88rem]'>
            <button
              disabled={isSubmitButtonDisabled()}
              type='submit'
              class='rounded-[0.625rem] border-[5px] border-tiffany-light bg-white px-[3.12rem] py-[0.75rem] text-[0.875rem] font-bold tracking-[0.04375rem] text-[#66B0B0] transition-all duration-300 hover:border-[#4ABCBC] hover:bg-[#4ABCBC] hover:text-white disabled:border-vs-gray disabled:bg-vs-gray lg:px-[2.06rem]'
            >
              Відправити
            </button>
          </div>
          <div class='flex border-b drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]'></div>
          <div class='grid grid-cols-2 grid-rows-2 gap-[1.2rem] gap-y-[2.38rem] pt-8 text-[0.75rem] tracking-[0.0375rem]'>
            <div class='flex flex-col items-center gap-[0.94rem]'>
              <img class='h-6 w-6' src={Clock.src} alt='Working schedule' />
              <div class='text-center font-medium text-[#111]'>
                Понеділок - пʼятниця: <br />
                &nbsp;&nbsp;&nbsp;&nbsp;9:00 - 18:00
              </div>
            </div>
            <div class='flex flex-col items-center gap-[0.94rem]'>
              <img class='h-6 w-6' src={Phone.src} alt='Phone' />
              <div class='font-medium text-[#111]'>
                +38<span class='text-tiffany-light'>093</span> 432 00 22 <br />{' '}
                +38<span class='text-tiffany-light'>096</span> 432 00 22
              </div>
            </div>
            <div class='col-span-2 flex flex-col items-center gap-[0.94rem] font-medium text-[#111]'>
              <img class='h-[1.5rem]' src={Email.src} alt='email' />
              <div>klinikavitasens@gmail.com</div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

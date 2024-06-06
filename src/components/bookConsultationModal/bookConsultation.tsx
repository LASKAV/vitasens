import CloseModal from '@/assets/images/close-modal-icon.svg';
import ActionButton from '@/components/actionButton/actionButton.tsx';
import ActionButtonMinor from '@/components/actionButtonMinor/actionButtonMinor.tsx';
import Clock from '@/assets/images/clock-icon.svg';
import Phone from '@/assets/images/phone-filled-tiffany-icon.svg';
import Email from '@/assets/images/email-filled-tiffany-icon.svg';
import type { BookConsultationModalProps } from '@/components/bookConsultationModal/bookConsultationModal.tsx';

export default (props: BookConsultationModalProps) => {
  return (
    <>
      <div
        onClick={props.onClose}
        class='flex justify-end hover:cursor-pointer'
      >
        <img src={CloseModal.src} alt='' />
      </div>
      <div class='mx-auto lg:max-w-[24rem]'>
        <div class='mx-auto flex justify-center pb-[0.8rem] pt-[0rem] text-[1.5rem] font-semibold tracking-[0.075rem] [text-shadow:1px_2px_4px_rgba(0,0,0,0.25)]'>
          <span class='text-black'>
            Запис на&nbsp;<span class='text-tiffany'>консультацію</span>
          </span>
        </div>
        <form id='bookingModal' method='post' class='flex flex-col'>
          <div class='flex flex-col pt-[1.25rem]'>
            <label for='booking-name'>Імʼя</label>
            <input
              class='h-[3rem] rounded-[0.625rem] bg-[#D9D9D9] pl-4 outline-none drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]'
              type='text'
              id='booking-name'
            />
          </div>
          <div class='flex flex-col pt-[1.25rem]'>
            <label for='booking-phone'>Номер телефону</label>
            <input
              class='h-[3rem] rounded-[0.625rem] bg-[#D9D9D9] pl-4 outline-none drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]'
              type='text'
              id='booking-phone'
            />
          </div>
          <div class='flex flex-col pt-[1.25rem]'>
            <label for='booking-service'>Послуги</label>
            <input
              class='h-[3rem] rounded-[0.625rem] bg-[#D9D9D9] pl-4 outline-none drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]'
              type='text'
              id='booking-service'
            />
          </div>
          <div class='flex flex-row items-center justify-center pt-[1.25rem]'>
            <input
              class='mr-2 h-[0.8125rem] bg-[#D9D9D9] drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]'
              type='checkbox'
              id='booking-policy'
            />
            <label class='text-[0.6875rem]' for='booking-policy'>
              Я згоден (на) з{' '}
              <a href='/' class='text-tiffany'>
                політикою конфіденційності
              </a>
            </label>
          </div>
          <div class='flex justify-end pb-[2.43rem] pt-[2rem]'>
            <div class='hidden lg:block'>
              <ActionButton text='Відправити' action={props.onRequestSuccess} />
            </div>
            <div class='block lg:hidden'>
              <ActionButtonMinor
                text='Відправити'
                action={props.onRequestSuccess}
              />
            </div>
          </div>
          <div class='flex border-b drop-shadow-[0px_4px_4px_rgba(0,0,0,0.5)]'></div>
          <div class='grid grid-cols-2 grid-rows-2 gap-[1.2rem] pt-8 text-[0.75rem]'>
            <div class='flex flex-col items-center gap-6'>
              <img class='h-6 w-6' src={Clock.src} alt='Working schedule' />
              <div class='text-center'>
                Понеділок - пʼятниця: <br />
                &nbsp;&nbsp;&nbsp;&nbsp;9:00 - 18:00
              </div>
            </div>
            <div class='flex flex-col items-center gap-6'>
              <img class='h-6 w-6' src={Phone.src} alt='Phone' />
              <div>
                +38<span class='text-tiffany-light'>093</span> 432 00 22 <br />{' '}
                +38<span class='text-tiffany-light'>096</span> 432 00 22
              </div>
            </div>
            <div class='col-span-2 flex flex-col items-center gap-6'>
              <img class='h-[1.5rem]' src={Email.src} alt='email' />
              <div>klinikavitasens@gmail.com</div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

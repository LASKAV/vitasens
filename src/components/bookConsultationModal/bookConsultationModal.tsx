import CloseModal from '@/assets/images/close-modal-icon.svg';
import Clock from '@/assets/images/clock-icon.svg';
import Phone from '@/assets/images/phone-filled-tiffany-icon.svg';
import Email from '@/assets/images/email-filled-tiffany-icon.svg';
import Background from '@/assets/images/booking-modal-picture.jpeg';
import ActionButtonMinor from '../actionButtonMinor/actionButtonMinor';
import ActionButton from '../actionButton/actionButton';
import {createEffect} from 'solid-js';

type BookConsultationModalProps = {
  onRequestSuccess?: () => void;
  isOpen: boolean;
  onClose: () => void;
}

let containerRef: HTMLDivElement;

export default (props: BookConsultationModalProps) => {

  const handleOutsideClick = (event: MouseEvent) => {
    if (event?.target === containerRef){
      props.onClose();
    }
  }

  createEffect(() => {
    if (props.isOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('click', handleOutsideClick);
    } else {
      document.body.style.overflow = '';
      document.removeEventListener('click', handleOutsideClick);
    }
  });
  return (
    <>
      {props.isOpen && (
        <div
          class="fixed flex justify-center items-center top-0 left-0 w-full h-full bg-vs-gray/40 z-10 backdrop-blur-md px-5"
          ref={containerRef}>
          <div class="flex bg-white rounded-[2.5rem] lg:rounded-[3.5rem] overflow-hidden lg:container h-[50rem]">

            <div class="hidden lg:block overflow-hidden grow-0 lg:grow w-[50%] ">
              <img class="object-cover w-full h-[50rem]" src={Background.src} alt=""/>
            </div>
            <div class="grow w-[50%] px-5 py-[2.12rem]">
              <div onClick={props.onClose} class="flex justify-end hover:cursor-pointer">
                <img src={CloseModal.src} alt=""/>
              </div>
              <div class="mx-auto lg:max-w-[24rem]">

                <div
                  class="[text-shadow:1px_2px_4px_rgba(0,0,0,0.25)] text-[1.5rem] font-semibold tracking-[0.075rem] mx-auto flex justify-center pt-[2.72rem] pb-[0.8rem]">
                  <span class="text-black">Запис на&nbsp;<span class="text-tiffany">консультацію</span></span>
                </div>
                <form id="bookingModal" method="post" class="flex flex-col">
                  <div class="flex flex-col pt-[2rem]">
                    <label for="booking-name">Імʼя</label>
                    <input class="drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] rounded-[0.625rem] bg-[#D9D9D9] h-[3rem]"
                           type="text" id="booking-name"/>
                  </div>
                  <div class="flex flex-col pt-[2rem]">
                    <label for="booking-phone">Номер телефону</label>
                    <input class="drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] rounded-[0.625rem] bg-[#D9D9D9] h-[3rem]"
                           type="text" id="booking-phone"/>
                  </div>
                  <div class="flex flex-row items-center justify-center pt-[2rem]">
                    <input class="drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] bg-[#D9D9D9] h-[0.8125rem] mr-2"
                           type="checkbox" id="booking-policy"/>
                    <label class="text-[0.6875rem]" for="booking-policy">Я згоден (на) з <a href="/"
                                                                                                    class="text-tiffany">політикою
                      конфіденційності</a></label>
                  </div>
                  <div class="flex justify-end pt-[2rem] pb-[2.43rem]">
                    <div class="hidden lg:block">
                      <ActionButton text="Відправити" action={props.onRequestSuccess} />
                    </div>
                    <div class="block lg:hidden">
                      <ActionButtonMinor text="Відправити" action={props.onRequestSuccess} />
                    </div>
                  </div>
                  <div class="flex border-b drop-shadow-[0px_4px_4px_rgba(0,0,0,0.5)]"></div>
                  <div class="grid gap-[1.2rem] pt-8 grid-cols-2 grid-rows-2 text-[0.75rem]">
                    <div class='flex flex-col items-center gap-6'>
                      <img class='h-6 w-6' src={Clock.src} alt='Working schedule'/>
                      <div class='text-center'>Понеділок - пʼятниця: <br/>&nbsp;&nbsp;&nbsp;&nbsp;9:00 - 18:00</div>
                    </div>
                    <div class='flex flex-col items-center gap-6'>
                      <img class='h-6 w-6' src={Phone.src} alt='Phone'/>
                      <div>+38<span class="text-tiffany-light">093</span> 432 00 22 <br/> +38<span
                        class="text-tiffany-light">096</span> 432 00 22
                      </div>
                    </div>
                    <div class="col-span-2 flex flex-col items-center gap-6">
                      <img class='h-[1.5rem]' src={Email.src} alt='email'/>
                      <div>klinikavitasens@gmail.com</div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

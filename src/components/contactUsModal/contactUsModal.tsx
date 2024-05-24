import CloseModal from '@/assets/images/close-modal-icon.svg';
import {createEffect} from 'solid-js';
import Clock from '@/assets/images/clock-icon.svg';
import Phone from '@/assets/images/phone-filled-tiffany-icon.svg';
import Email from '@/assets/images/email-filled-tiffany-icon.svg';

type ContactUsModalProps = {
  isOpen: boolean;
  onClose: () => void;
}

let containerRef: HTMLDivElement;

export default (props: ContactUsModalProps) =>{

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
          <div ref={containerRef} class="fixed flex justify-center items-center top-0 left-0 w-full h-full bg-vs-gray/40 z-[10000] backdrop-blur-md px-5">
            <div
              class="relative bg-white rounded-[2.5rem] overflow-hidden w-[24.375rem] lg:rounded-[3.125rem] lg:w-[71.8rem] ">
              <div class="grid grid-cols-3 pt-[3.75rem] pb-[2.42rem] px-[2.5rem] text-tiffany-light">
                <div class='hidden select-none text-tiffany lg:block'>
                  <div class='flex items-center gap-4'>
                    <div>
                      <img src='/assets/images/logo.png' alt='Logo'/>
                    </div>
                    <div class='h-[1.25rem] w-[2px] shrink-0 rounded-full bg-tiffany'></div>
                    <div class='text-2xl leading-normal'>VitaSens</div>
                  </div>
                </div>
                <div class="leading-[3rem] text-[3rem] text-center">Контакти</div>
                <div onClick={props.onClose} class="flex justify-end">
                  <img class="hover:cursor-pointer" src={CloseModal.src} alt=""/>
                </div>
              </div>
              <div class="grid gap-[1.2rem] pt-8 grid-cols-2 grid-rows-2 text-[0.75rem] w-[24rem] mx-auto">
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
              <div class="h-[24rem] pt-[2.19rem]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1374.794547172635!2d30.75125318197134!3d46.437023465893596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c6339296243e51%3A0xcc68c288f2ab6aa1!2sSonyachna%20St%2C%204%2C%20Odesa%2C%20Odes'ka%20oblast%2C%2065000!5e0!3m2!1sen!2sua!4v1713203557262!5m2!1sen!2sua"
                  width='100%'
                  height='100%'
                  class='self-center rounded-[3.125rem]'
                  style='border:0;'
                  loading='lazy'
                  referrerPolicy='no-referrer-when-downgrade'></iframe>
              </div>
            </div>
          </div>
      )}
    </>
  )
}

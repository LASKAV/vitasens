import CloseModal from '@/assets/images/close-modal-icon.svg';
import BulbsStock from '@/assets/images/stock-icon-bulbs.svg';
import GearsStock from '@/assets/images/stock-icon-gears.svg';
import MessagesStock from '@/assets/images/stock-icon-messages.svg';
import DeskIcon from '@/assets/images/stock-desk.svg';
import {createEffect} from 'solid-js';

type BookConsultationSuccessModalProps = {
  isOpen: boolean;
  onClose: () => void;
}

let containerRef: HTMLDivElement;

export default (props: BookConsultationSuccessModalProps) => {

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
          class="fixed flex justify-center items-center top-0 left-0 w-full h-full bg-vs-gray/40 z-[10000] backdrop-blur-md px-5"
          ref={containerRef}>
          <div class="relative bg-white rounded-[2.5rem] overflow-hidden w-[24.375rem] h-[30.56rem] lg:rounded-[3.5rem] lg:w-[56.375rem] lg:h-[39.25rem]">
            <div onClick={props.onClose} class="pt-[1.69rem] px-[1.5rem] flex justify-end hover:cursor-pointer">
              <img src={CloseModal.src} alt=""/>
            </div>
            <div class="flex flex-col items-center h-full pt-[8.78rem]">
              <div class="text-[1.5rem] text-tiffany-light font-normal pb-[0.94rem] lg:text-[3rem] lg:pb-[2.81rem]">Запит відправлено</div>
              <div class="text-[0.875rem] text-[#C5C5C5] font-semibold lg:text-[1.5rem]">Ваше здоров'я - наш пріоритет!</div>
            </div>
            <img class="absolute top-[10.56rem] left-[0.31rem] w-[5.125rem] h-[3.0235rem] lg:left-[3.69rem] lg:w-[8.7rem] lg:h-[6.22rem]" src={MessagesStock.src} alt=""/>
            <img class="absolute bottom-[2.73rem] left-[1.44rem] w-[8.625rem] h-[4.71rem] lg:left-[2.5rem] lg:w-[15.7rem] lg:h-[11.03rem]" src={DeskIcon.src} alt=""/>
            <img class="absolute top-[9.37rem] right-[0.89rem] w-[3.42rem] h-[4.5rem] lg:right-[5.27rem] lg:w-[4.79rem] lg:h-[11rem]" src={BulbsStock.src} alt=""/>
            <img class="absolute bottom-[2.73rem] right-[0.89rem] w-[5.73rem] h-[2.085rem] lg:right-[3.69rem] lg:w-[8.7rem] lg:h-[6.22rem]" src={GearsStock.src} alt=""/>
          </div>
        </div>
      )}
    </>
  )
}

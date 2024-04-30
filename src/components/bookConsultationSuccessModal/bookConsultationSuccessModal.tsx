import CloseModal from '@/assets/images/close-modal-icon.svg';
import BulbsStock from '@/assets/images/stock-icon-bulbs.svg';
import GearsStock from '@/assets/images/stock-icon-gears.svg';
import MessagesStock from '@/assets/images/stock-icon-messages.svg';
import DeskIcon from '@/assets/images/stock-desk.svg';

type BookConsultationSuccessModalProps = {
  toggleModal: (container: Element) => void;
  modalContainer: Element;
}

export default (props: BookConsultationSuccessModalProps) => {
  return (
    <div
      class="fixed flex justify-center items-center top-0 left-0 w-full h-full bg-vs-gray/40 z-10 backdrop-blur-md px-5">
      <div class="relative bg-white rounded-[2.5rem] lg:rounded-[3.5rem] overflow-hidden w-[24.375rem] h-[30.56rem]">
        <div onClick={() => props.toggleModal(props.modalContainer)} class="pt-[1.69rem] px-[1.5rem] flex justify-end hover:cursor-pointer">
          <img src={CloseModal.src} alt=""/>
        </div>
        <div class="flex flex-col items-center h-full pt-[8.78rem]">
          <div class="text-[1.5rem] text-tiffany-light font-normal pb-[0.94rem]">Запит відправлено</div>
          <div class="text-[0.875rem] text-[#C5C5C5] font-semibold">Ваше здоров'я - наш пріоритет!</div>
        </div>
        <img class="absolute top-[10.56rem] left-[0.31rem] w-[5.125rem] h-[3.0235rem]" src={MessagesStock.src} alt=""/>
        <img class="absolute bottom-[2.73rem] left-[1.44rem] w-[8.625rem] h-[4.71rem]" src={DeskIcon.src} alt=""/>
        <img class="absolute top-[9.37rem] right-[0.89rem]" src={BulbsStock.src} alt=""/>
        <img class="absolute bottom-[2.73rem] right-[0.89rem]" src={GearsStock.src} alt=""/>
      </div>
    </div>
  )
}

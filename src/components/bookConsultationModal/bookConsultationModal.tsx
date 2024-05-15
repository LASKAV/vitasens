import Background from '@/assets/images/booking-modal-picture.jpeg';
import BookConsultation from './bookConsultation.tsx';
import {createEffect} from 'solid-js';

export type BookConsultationModalProps = {
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
        <>
          <div ref={containerRef} class="fixed hidden justify-center items-center top-0 left-0 w-full h-full bg-vs-gray/40 z-10 backdrop-blur-md px-5 lg:flex">
            <div class="flex bg-white rounded-[2.5rem] lg:rounded-[3.5rem] overflow-hidden lg:container">
              <div class="hidden lg:block overflow-hidden grow-0 lg:grow w-[50%] ">
                <img class="object-cover w-full h-full" src={Background.src} alt=""/>
              </div>
              <div class="grow w-[50%] px-5 py-[2.12rem]">
                <BookConsultation isOpen={props.isOpen} onClose={props.onClose} onRequestSuccess={props.onRequestSuccess}/>
              </div>
            </div>
          </div>
          <div class="fixed overflow-y-auto top-0 left-0 w-full h-full max-h-[58.5rem] bg-white z-10 px-5 pt-[2rem] lg:hidden">
            <BookConsultation isOpen={props.isOpen} onClose={props.onClose} onRequestSuccess={props.onRequestSuccess} />
          </div>
        </>
      )}
    </>
  )
}

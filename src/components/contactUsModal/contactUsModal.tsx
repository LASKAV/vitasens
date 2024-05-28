import {createEffect} from 'solid-js';
import ContactUs from '@/components/contactUsModal/contactUs';

export type ContactUsModalProps = {
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
        <>
          <div ref={containerRef} class="fixed hidden justify-center items-center top-0 left-0 w-full h-full bg-vs-gray/40 z-[10000] backdrop-blur-md px-5 xl:flex">
            <div
              class="relative bg-white rounded-[2.5rem] overflow-hidden w-[24.375rem] lg:rounded-[3.125rem] lg:w-[71.8rem] ">
              <ContactUs isOpen={props.isOpen} onClose={props.onClose} />
            </div>
          </div>
          <div class="fixed overflow-y-auto justify-center items-center top-0 left-0 w-full h-full bg-white z-[10000] backdrop-blur-md xl:hidden">
            <ContactUs isOpen={props.isOpen} onClose={props.onClose} />
          </div>
        </>
      )}
    </>
  )
}

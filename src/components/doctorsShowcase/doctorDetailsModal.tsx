import {createEffect} from 'solid-js';
import type {RegisteredNurseData} from '@/components/doctorsShowcase/doctorsShowcase.tsx';
import Details from './doctorDetails.tsx'

export type DoctorDetailsModalProps = {
  isOpen: boolean;
  onClose: () => void;
  info: RegisteredNurseData;
}

let containerRef: HTMLDivElement;

export default (props: DoctorDetailsModalProps) => {

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
          <div class="fixed hidden md:flex justify-center items-center top-0 left-0 w-full h-full bg-vs-gray/40 z-[10000] backdrop-blur-md px-5" ref={containerRef}>
            <div class="relative bg-white rounded-[2.5rem] overflow-hidden w-[26.7rem] h-[58.1rem]">
              <Details details={props} />
            </div>
          </div>
          <div class="fixed top-0 left-0 overflow-y-auto w-full h-full max-h-[58.5rem] z-[10000] md:hidden">
              <Details details={props} />
          </div>
        </>
      )
      }
    </>
  );
}

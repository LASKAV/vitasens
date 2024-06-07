import { createEffect } from 'solid-js';
import type { RegisteredNurse } from '@/types/RegisteredNurse.ts';
import Details from './doctorDetails.tsx';

export type DoctorDetailsModalProps = {
  isOpen: boolean;
  onClose: () => void;
  info: RegisteredNurse;
};

let containerRef: HTMLDivElement;

export default (props: DoctorDetailsModalProps) => {
  const handleOutsideClick = (event: MouseEvent) => {
    if (event?.target === containerRef) {
      props.onClose();
    }
  };

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
          <div
            class='fixed left-0 top-0 z-[10000] hidden h-full w-full items-center justify-center bg-vs-gray/40 px-5 backdrop-blur-md md:flex'
            ref={containerRef}
          >
            <div class='relative h-[58.1rem] w-[26.7rem] overflow-hidden rounded-[2.5rem] bg-white'>
              <Details details={props} />
            </div>
          </div>
          <div class='fixed left-0 top-0 z-[10000] h-full max-h-[58.5rem] w-full overflow-y-auto md:hidden'>
            <Details details={props} />
          </div>
        </>
      )}
    </>
  );
};

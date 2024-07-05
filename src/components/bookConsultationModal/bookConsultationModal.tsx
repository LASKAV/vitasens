import Background from '@/assets/images/booking-modal-picture.jpeg';
import BookConsultation from './bookConsultation';
import { createEffect } from 'solid-js';

export type BookConsultationModalProps = {
  onRequestSuccess: () => void;
  isOpen: boolean;
  onClose: () => void;
  serviceId?: number;
  service?: string;
  serviceType?: string;
  referrerUrl?: string;
};

let containerRef: HTMLDivElement;

export default (props: BookConsultationModalProps) => {
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
            ref={containerRef}
            class='fixed left-0 top-0 z-[10000] hidden h-full w-full items-center justify-center bg-vs-gray/40 px-5 backdrop-blur-md lg:flex'
          >
            <div class='flex h-[50rem] overflow-hidden rounded-[2.5rem] bg-white lg:w-[73.8rem] lg:rounded-[3.5rem]'>
              <div class='hidden w-[50%] grow-0 overflow-hidden lg:block lg:grow '>
                <img
                  class='h-full w-full object-cover'
                  src={Background.src}
                  alt=''
                />
              </div>
              <div class='w-[50%] grow px-[2.25rem] pb-8 pt-[2.19rem]'>
                <BookConsultation
                  isOpen={props.isOpen}
                  onClose={props.onClose}
                  onRequestSuccess={props.onRequestSuccess}
                  serviceId={props.serviceId}
                  service={props.service}
                  serviceType={props.serviceType}
                  referrerUrl={props.referrerUrl}
                />
              </div>
            </div>
          </div>
          <div class='fixed left-0 top-0 z-[10000] h-full max-h-[58.5rem] w-full overflow-y-auto bg-white px-[1.62rem] pt-[2.1rem] lg:hidden'>
            <BookConsultation
              isOpen={props.isOpen}
              onClose={props.onClose}
              onRequestSuccess={props.onRequestSuccess}
              serviceId={props.serviceId}
              service={props.service}
              serviceType={props.serviceType}
            />
          </div>
        </>
      )}
    </>
  );
};

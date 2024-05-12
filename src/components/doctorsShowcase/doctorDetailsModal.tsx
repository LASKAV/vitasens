import {createEffect} from 'solid-js';
import type {RegisteredNurseData} from '@/components/doctorsShowcase/doctorsShowcase.tsx';

type DoctorDetailsModalProps = {
  isOpen: boolean;
  onClose: () => void;
  info: RegisteredNurseData;
}

export default (props: DoctorDetailsModalProps) =>{

  createEffect(() => {
    if (props.isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  });

  return (
    <>
      {props.isOpen && (
        <>
          {/*<div class="fixed hidden md:flex justify-center items-center top-0 left-0 w-full h-full bg-vs-gray/40 z-10 backdrop-blur-md px-5">*/}
          {/*  <div class="relative bg-white rounded-[2.5rem] overflow-hidden w-[24.375rem] lg:rounded-[3.125rem] lg:w-[71.8rem]">*/}
          {/*    <img src={props.info.rnPhotoLink} alt=""/>*/}
          {/*  </div>*/}
          {/*</div>*/}
          <div class="fixed top-0 left-0 w-full h-full z-10 md:hidden">
            <button onClick={props.onClose} class="absolute right-[1.56rem] top-[1.56rem]">
              <img class="object-cover w-full h-full" src="/assets/images/collapse-view-icon.svg" alt="ceo"/>
            </button>
            <img class="object-cover w-full h-[24rem]" src={props.info.rnPhotoLink} alt=""/>
            <div class="border-tiffany-light border-l-[0.625rem] pt-[1.25rem] bg-white h-full">
              <div class="w-full text-center font-semibold">
                {props.info.fullName}
              </div>
              <div class="px-[1.25rem] py-[2rem]">
                {props.info.description}
              </div>
              <div class="px-[1.25rem] pb-[2rem] font-medium">
                {props.info.workingDays}
              </div>
              <div class="px-[1.25rem] font-medium">
                Ціна консультації:&nbsp;{props.info.serviceAppointmentPrice}&nbsp;грн
              </div>
              <div class="absolute bottom-[1.25rem] left-[1.25rem] font-bold">
                {props.info.position}
              </div>
              <button class="absolute bottom-[1.25rem] right-[1.25rem] text-[0.85rem] font-medium border border-tiffany-light py-[0.69rem] px-[0.88rem] skew-x-[-20deg]">
                <div class="skew-x-[20deg]">
                  Консультація
                </div>
              </button>
            </div>
          </div>
        </>
      )
      }
    </>
  );
}

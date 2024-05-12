import {createEffect} from 'solid-js';
import type {RegisteredNurseData} from '@/components/doctorsShowcase/doctorsShowcase.tsx';
import Details from './doctorDetails.tsx'

export type DoctorDetailsModalProps = {
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
          <div class="fixed hidden md:flex justify-center items-center top-0 left-0 w-full h-full bg-vs-gray/40 z-10 backdrop-blur-md px-5">
            <div class="relative bg-white rounded-[2.5rem] overflow-hidden w-[26.7rem] h-[58.1rem]">
              <Details details={props}/>
            </div>
          </div>
          <div class="fixed top-0 left-0 w-full h-full z-10 md:hidden">
            <Details details={props}/>
          </div>
        </>
      )
      }
    </>
  );
}

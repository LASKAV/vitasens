import type {DoctorDetailsModalProps} from '@/components/doctorsShowcase/doctorDetailsModal.tsx';
import {Show} from 'solid-js';

type DetailsProps = {
  details: DoctorDetailsModalProps;
}

export default (props: DetailsProps) => {

  return (
    <>
      <button onClick={props.details.onClose} class="absolute right-[1.56rem] top-[1.56rem]">
        <img class="object-cover w-full h-full" src="/assets/images/collapse-view-icon.svg" alt="ceo"/>
      </button>
      <img class="object-cover w-full h-[24rem]" src={props.details.info.rnPhotoLink} alt=""/>
      <div class="border-tiffany-light border-l-[0.625rem] pt-[1.25rem] bg-white h-full">
        <div class="w-full text-center font-semibold">
          {props.details.info.lastName} {props.details.info.firstName} {props.details.info.middleName}
        </div>
        <div class="px-[1.25rem] py-[2rem]">
          {props.details.info.description}
        </div>

        <Show when={props.details.info.additional}>
          <div class="px-[1.25rem] pb-4">
            {props.details.info.additional}
          </div>
        </Show>
        <div class="px-[1.25rem] pb-[2rem] font-medium">
          {props.details.info.workingDays}
        </div>
        <Show when={props.details.info.serviceAppointmentPrice}>
          <div class="px-[1.25rem] font-medium">
            Ціна консультації:&nbsp;{props.details.info.serviceAppointmentPrice}&nbsp;грн
          </div>
        </Show>
        <Show when={props.details.info.outOfOfficeAppointmentPrice}>
          <div class="px-[1.25rem] font-medium">
            Ціна консультації вихідного дня:&nbsp;{props.details.info.outOfOfficeAppointmentPrice}&nbsp;грн
          </div>
        </Show>
        <div class="absolute bottom-[1.25rem] left-[1.25rem] font-bold">
          {props.details.info.position}
        </div>
        <button
          class="absolute bottom-[1.25rem] right-[1.25rem] text-[0.85rem] font-medium border border-tiffany-light py-[0.69rem] px-[0.88rem] skew-x-[-20deg]">
          <div class="skew-x-[20deg]">
            Консультація
          </div>
        </button>
      </div>
    </>
  )
}

import type { DoctorDetailsModalProps } from '@/components/doctorsShowcase/doctorDetailsModal.tsx';
import CollapseViewIcon from '@/assets/images/collapse-view-icon.svg';
import { Show } from 'solid-js';

type DetailsProps = {
  details: DoctorDetailsModalProps;
};

export default (props: DetailsProps) => {
  return (
    <>
      <button
        onClick={props.details.onClose}
        class='absolute right-[1.56rem] top-[1.56rem]'
      >
        <img
          class='h-full w-full object-cover'
          src={CollapseViewIcon.src}
          alt='ceo'
        />
      </button>
      <img
        class='h-[24rem] w-full object-cover'
        src={props.details.info.rnPhotoLink}
        alt=''
      />
      <div class='h-full border-l-[0.625rem] border-tiffany-light bg-white pt-[1.25rem]'>
        <div class='w-full text-center font-semibold'>
          {props.details.info.lastName} {props.details.info.firstName}{' '}
          {props.details.info.middleName}
        </div>
        <div class='px-[1.25rem] py-[2rem]'>
          {props.details.info.description}
        </div>

        <Show when={props.details.info.additional}>
          <div class='px-[1.25rem] pb-4'>{props.details.info.additional}</div>
        </Show>
        <div class='px-[1.25rem] pb-[2rem] font-medium'>
          {props.details.info.workingDays}
        </div>
        <Show when={props.details.info.serviceAppointmentPrice}>
          <div class='px-[1.25rem] font-medium'>
            Ціна консультації:&nbsp;{props.details.info.serviceAppointmentPrice}
            &nbsp;грн
          </div>
        </Show>
        <Show when={props.details.info.outOfOfficeAppointmentPrice}>
          <div class='px-[1.25rem] font-medium'>
            Ціна консультації вихідного дня:&nbsp;
            {props.details.info.outOfOfficeAppointmentPrice}&nbsp;грн
          </div>
        </Show>
        <div class='h-4'></div>
        <div class='static bottom-0 flex w-full items-center justify-between px-5 pb-5 md:absolute'>
          <div class='bottom-[1.25rem] left-[1.25rem] font-bold'>
            {props.details.info.position}
          </div>
          <button class='bottom-[1.25rem] right-[1.25rem] skew-x-[-20deg] border border-tiffany-light px-[0.88rem] py-[0.69rem] text-[0.85rem] font-medium transition-all duration-300 hover:bg-tiffany-light hover:text-white'>
            <div class='skew-x-[20deg]'>Консультація</div>
          </button>
        </div>
      </div>
    </>
  );
};

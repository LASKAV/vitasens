import type { DoctorDetailsModalProps } from '@/components/doctorsShowcase/doctorDetailsModal.tsx';
import CollapseViewIcon from '@/assets/images/collapse-view-icon.svg';
import { Show } from 'solid-js';
import { ServiceType } from '@/enums/serviceType.enum.ts';

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
      <div class='border-l-[0.625rem] border-tiffany-light bg-white pt-[1.25rem] md:h-full'>
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
          <div class='bottom-[1.25rem] left-[1.25rem] whitespace-pre font-bold'>
            {props.details.info.position.replace(' ', '\n')}
          </div>
          <div class='relative bottom-[0] right-[0.93rem]'>
            <button
              onClick={() => {
                props.details.action(
                  props.details.info.appointment.id,
                  props.details.info.appointment.name,
                  ServiceType.Appointment
                );
              }}
              class='btn'
            >
              <div class='btn__text'>
                <div class='skew-x-[20deg]'>Консультація</div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

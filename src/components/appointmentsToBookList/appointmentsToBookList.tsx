import type { Appointment } from '@/types/Appointment';
import BookConsultationFlow from '@/components/bookConsultationFlow/bookConsultationFlow';
import ChevronRight from '@/assets/images/chevron-right-icon.svg';
import { createSignal, For } from 'solid-js';
import { ServiceType } from '@/enums/serviceType.enum.ts';

type AppointmentsToBookListProps = {
  appointments?: Appointment[];
  referrerUrl: string;
};

export default (props: AppointmentsToBookListProps) => {
  const [isBookingModalOpen, setBookingModalOpen] = createSignal(false);
  const [serviceTitle, setServiceTitle] = createSignal('');
  const [serviceId, setServiceId] = createSignal(0);

  const setBookingProps = (title: string, id: number) => {
    setServiceTitle(title);
    setServiceId(id);
    setBookingModalOpen(true);
  };

  return (
    <>
      <For each={props.appointments}>
        {(appt: Appointment) => (
          <div
            onClick={() => setBookingProps(appt.name, appt.id)}
            class='flex cursor-pointer items-center gap-1'
          >
            <div class='font-medium text-tiffany'>{appt.name}</div>
            <img class='h-5' src={ChevronRight.src} alt='' />
          </div>
        )}
      </For>

      <BookConsultationFlow
        isOpen={isBookingModalOpen()}
        onClose={() => setBookingModalOpen(false)}
        service={serviceTitle()}
        serviceId={serviceId()}
        serviceType={ServiceType.Appointment}
        referrerUrl={props.referrerUrl}
      />
    </>
  );
};

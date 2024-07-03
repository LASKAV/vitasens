import BookingModal from '@/components/bookConsultationModal/bookConsultationModal';
import SuccessModal from '@/components/bookConsultationSuccessModal/bookConsultationSuccessModal';
import { createSignal } from 'solid-js';

type BookConsultationFlowProps = {
  isOpen: boolean;
  onClose: () => void;
  serviceId?: number;
  service?: string;
  serviceType?: string;
  referrerUrl?: string;
};

const [isSuccessModalOpen, setSuccessModalOpen] = createSignal(false);

export default (props: BookConsultationFlowProps) => {
  const onRequestSuccess = () => {
    props.onClose();
    setSuccessModalOpen(true);
  };

  return (
    <>
      <BookingModal
        isOpen={props.isOpen}
        onClose={props.onClose}
        onRequestSuccess={onRequestSuccess}
        serviceId={props.serviceId}
        service={props.service}
        serviceType={props.serviceType}
        referrerUrl={props.referrerUrl}
      />
      <SuccessModal
        isOpen={isSuccessModalOpen()}
        onClose={() => setSuccessModalOpen(false)}
      />
    </>
  );
};

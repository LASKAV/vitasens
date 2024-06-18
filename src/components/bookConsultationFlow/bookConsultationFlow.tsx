import BookingModal from '@/components/bookConsultationModal/bookConsultationModal';
import SuccessModal from '@/components/bookConsultationSuccessModal/bookConsultationSuccessModal';
import { createSignal } from 'solid-js';

type BookConsultationFlowProps = {
  isOpen: boolean;
  onClose: () => void;
  serviceTypeId?: number;
  serviceType?: string;
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
        serviceTypeId={props.serviceTypeId}
        serviceType={props.serviceType}
      />
      <SuccessModal
        isOpen={isSuccessModalOpen()}
        onClose={() => setSuccessModalOpen(false)}
      />
    </>
  );
};

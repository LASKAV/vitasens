import type { RegisteredNurse } from '@/types/RegisteredNurse.ts';
import { Swiper, SwiperSlide } from 'swiper/solid';
// @ts-ignore
import { Navigation, Scrollbar } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './doctorsShowcase.css';
import { createSignal, For, onMount } from 'solid-js';
import DoctorTile from './doctorsShowcaseTile.tsx';
import DoctorDetailsModal from './doctorDetailsModal';
import BookConsultationFlow from '@/components/bookConsultationFlow/bookConsultationFlow';
import { ServiceType } from '@/enums/serviceType.enum.ts';

type DoctorShowcaseProps = {
  rnInfo?: RegisteredNurse[];
  idToOpen?: number | undefined;
  referrerUrl?: string;
};

export default (props: DoctorShowcaseProps) => {
  const [selectedRnNumber, setSelectedRnNumber] = createSignal(0);

  const [isDetailsModalOpen, setDetailsModalOpen] = createSignal(false);

  const [serviceTitle, setServiceTitle] = createSignal('');
  const [serviceId, setServiceId] = createSignal(0);
  const [serviceType, setServiceType] = createSignal('');
  const [isBookingModalOpen, setBookingModalOpen] = createSignal(false);

  const openModal = (index: number) => {
    setSelectedRnNumber(index);
    setDetailsModalOpen(true);
  };

  const closeModal = () => {
    setDetailsModalOpen(false);
  };

  const openBookingModal = (id: number, title: string, type: ServiceType) => {
    setServiceType(type);
    setServiceTitle(title);
    setServiceId(id);
    setBookingModalOpen(true);
    setDetailsModalOpen(false);
  };

  onMount(() => {
    if (props.idToOpen && props.rnInfo) {
      let doctorIndexToOpen = props.rnInfo.findIndex(
        item => item.id === props.idToOpen
      );
      if (doctorIndexToOpen >= 0) {
        openModal(doctorIndexToOpen);
      }
    }
  });

  return (
    <>
      <div class='py-[3.3rem] lg:hidden'>
        <Swiper
          modules={[Navigation, Scrollbar]}
          spaceBetween={50}
          slidesPerView={1}
          scrollbar={{ draggable: false }}
        >
          <For each={props.rnInfo}>
            {(info: RegisteredNurse, i) => (
              <SwiperSlide class='py-4'>
                <DoctorTile
                  onButtonClick={openBookingModal}
                  info={info}
                  onOpen={openModal}
                  index={i()}
                />
              </SwiperSlide>
            )}
          </For>
        </Swiper>
      </div>
      <div class='hidden gap-[0rem] py-16 lg:container lg:mx-auto lg:flex lg:flex-wrap lg:gap-[2.12rem]'>
        <For each={props.rnInfo}>
          {(info: RegisteredNurse, i) => (
            <DoctorTile
              onButtonClick={openBookingModal}
              info={info}
              onOpen={openModal}
              index={i()}
            />
          )}
        </For>
      </div>

      <BookConsultationFlow
        isOpen={isBookingModalOpen()}
        onClose={() => setBookingModalOpen(false)}
        service={serviceTitle()}
        serviceId={serviceId()}
        serviceType={serviceType()}
        referrerUrl={props.referrerUrl}
      />

      {props.rnInfo && (
        <DoctorDetailsModal
          isOpen={isDetailsModalOpen()}
          info={props.rnInfo[selectedRnNumber()]}
          onClose={closeModal}
          action={openBookingModal}
        />
      )}
    </>
  );
};

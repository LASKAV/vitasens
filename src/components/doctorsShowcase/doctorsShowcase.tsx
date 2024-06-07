import type { RegisteredNurse } from '@/types/RegisteredNurse.ts';
import { Swiper, SwiperSlide } from 'swiper/solid';
// @ts-ignore
import { Navigation, Scrollbar } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './doctorsShowcase.css';
import { createSignal, For } from 'solid-js';
import DoctorTile from './doctorsShowcaseTile.tsx';
import DoctorDetailsModal from './doctorDetailsModal';

type DoctorShowcaseProps = {
  rnInfo: RegisteredNurse[] | undefined;
};

export default (props: DoctorShowcaseProps) => {
  const [selectedRnNumber, setSelectedRnNumber] = createSignal(0);

  const [isDetailsModalOpen, setDetailsModalOpen] = createSignal(false);

  const openModal = (index: number) => {
    setSelectedRnNumber(index);
    setDetailsModalOpen(true);
  };

  const closeModal = () => {
    setDetailsModalOpen(false);
  };

  return (
    <>
      <div class='pt-[3.3rem] lg:hidden'>
        <Swiper
          modules={[Navigation, Scrollbar]}
          spaceBetween={50}
          slidesPerView={1}
          scrollbar={{ draggable: false }}
        >
          <For each={props.rnInfo}>
            {(info: RegisteredNurse, i) => (
              <SwiperSlide class='py-4'>
                <DoctorTile info={info} onOpen={openModal} index={i()} />
              </SwiperSlide>
            )}
          </For>
        </Swiper>
      </div>
      <div class='hidden gap-[0rem] pt-16 lg:container lg:mx-auto lg:flex'>
        <For each={props.rnInfo}>
          {(info: RegisteredNurse, i) => (
            <DoctorTile info={info} onOpen={openModal} index={i()} />
          )}
        </For>
      </div>
      <DoctorDetailsModal
        isOpen={isDetailsModalOpen()}
        info={props.rnInfo ? props.rnInfo[selectedRnNumber()] : undefined}
        onClose={closeModal}
      />
    </>
  );
};

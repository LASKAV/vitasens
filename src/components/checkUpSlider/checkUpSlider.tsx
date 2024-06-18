// @ts-ignore
import { Navigation, Scrollbar, EffectCoverflow } from 'swiper';
import { createSignal, For } from 'solid-js';
import { Swiper, SwiperSlide } from 'swiper/solid';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import './checkUpSlider.css';
import type { CheckUp } from '@/types/CheckUp.ts';
import BookConsultationFlow from '@/components/bookConsultationFlow/bookConsultationFlow.tsx';

type CheckUpSliderProps = {
  checkUps?: CheckUp[];
};

export default (props: CheckUpSliderProps) => {
  const [isBookingModalOpen, setBookingModalOpen] = createSignal(false);

  return (
    <>
      <div class='pb-16 md:container md:mx-auto'>
        <Swiper
          effect={'coverflow'}
          modules={[Navigation, Scrollbar, EffectCoverflow]}
          slidesPerView={'auto'}
          loop={false}
          cssMode={false}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: false }}
          grabCursor={true}
          centeredSlides={true}
          observer={true}
          slideToClickedSlide={true}
          preventClicksPropagation={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 5,
          }}
          class='swiper_checkup_container'
        >
          <For each={props.checkUps}>
            {(checkUp: CheckUp) => (
              <SwiperSlide class='swiper_checkup_slide'>
                <div class='absolute z-10 h-full w-full bg-vs-gray/0 transition-all duration-300'>
                  <div class='absolute hidden h-full w-full opacity-0 transition-all duration-300'>
                    <div class='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
                      <button
                        onClick={() => {
                          console.log('click');
                          setBookingModalOpen(true);
                        }}
                        class='rounded-[0.625rem] bg-tiffany-light px-[1.35rem] py-[0.72rem] text-white opacity-100'
                      >
                        Записатися
                      </button>
                    </div>
                  </div>
                </div>
                <img class='object-cover' src={checkUp.imageUrl} alt='' />
              </SwiperSlide>
            )}
          </For>
        </Swiper>
      </div>
      <BookConsultationFlow
        isOpen={isBookingModalOpen()}
        onClose={() => setBookingModalOpen(false)}
      />
    </>
  );
};

// @ts-ignore
import { Navigation, Scrollbar, EffectCoverflow } from 'swiper';
import { For } from 'solid-js';
import { Swiper, SwiperSlide } from 'swiper/solid';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import './checkUpSlider.css';

type CheckUp = {
  imageUrl: string;
};

export default () => {
  let checkUps: CheckUp[] = [
    {
      imageUrl: '/src/assets/images/check-up-male.jpeg',
    },
    {
      imageUrl: '/src/assets/images/check-up-neurological.jpeg',
    },
    {
      imageUrl: '/src/assets/images/check-up-endocrinology.jpeg',
    },
    {
      imageUrl: '/src/assets/images/check-up-gastroenterology.jpeg',
    },
    {
      imageUrl: '/src/assets/images/check-up-cardiology-no-labs.jpeg',
    },
    {
      imageUrl: '/src/assets/images/check-up-overall.jpeg',
    },
    {
      imageUrl: '/src/assets/images/check-up-cardiology-with-labs.jpeg',
    },
    {
      imageUrl: '/src/assets/images/check-up-female.jpeg',
    },
  ];

  return (
    <>
      <div class='pb-16 md:container md:mx-auto'>
        <Swiper
          effect={'coverflow'}
          modules={[Navigation, Scrollbar, EffectCoverflow]}
          slidesPerView={'auto'}
          loop={true}
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
          <For each={checkUps}>
            {(checkUp: CheckUp) => (
              <SwiperSlide class='swiper_checkup_slide'>
                <div class='absolute z-10 h-full w-full bg-vs-gray/0 transition-all duration-300'>
                  <div class='absolute h-full w-full opacity-0 transition-all duration-300'>
                    <div class='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
                      <button class='rounded-[0.625rem] bg-tiffany-light px-[1.35rem] py-[0.72rem] text-white opacity-100'>
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
    </>
  );
};

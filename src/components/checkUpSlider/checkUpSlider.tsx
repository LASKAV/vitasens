// @ts-ignore
import {Navigation, Scrollbar, EffectCoverflow} from 'swiper';
import {For} from 'solid-js';
import {Swiper, SwiperSlide} from 'swiper/solid';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import './checkUpSlider.css'

type CheckUp = {
  imageUrl: string;
}

export default () => {

  let checkUps: CheckUp[] = [
    {
      imageUrl: './assets/images/check-up-male.jpeg',
    },
    {
      imageUrl: '/assets/images/check-up-neurological.jpeg',
    },
    {
      imageUrl: '/assets/images/check-up-endocrinology.jpeg',
    },
    {
      imageUrl: '/assets/images/check-up-gastroenterology.jpeg',
    },
    {
      imageUrl: '/assets/images/check-up-cardiology-no-labs.jpeg',
    },
    {
      imageUrl: '/assets/images/check-up-overall.jpeg',
    },
    {
      imageUrl: '/assets/images/check-up-cardiology-with-labs.jpeg',
    },
    {
      imageUrl: '/assets/images/check-up-female.jpeg',
    },
  ];

  return (
    <>
      <div class="md:container md:mx-auto pb-16">

        <Swiper
          effect={'coverflow'}
          modules={[Navigation, Scrollbar, EffectCoverflow]}
          slidesPerView={'auto'}
          loop={true}
          pagination={{clickable: true}}
          scrollbar={{draggable: false}}
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
          class="swiper_checkup_container"
        >
          <For each={checkUps}>{(checkUp: CheckUp) =>
            <SwiperSlide class="swiper_checkup_slide">
              <div class="absolute w-full h-full transition-all duration-300 z-10 bg-vs-gray/0">
                <div class="absolute w-full h-full transition-all duration-300 opacity-0">
                  <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <button class="px-[1.35rem] py-[0.72rem] rounded-[0.625rem] bg-tiffany-light text-white opacity-100">Записатися</button>
                  </div>
                </div>
              </div>
              <img class="object-cover" src={checkUp.imageUrl} alt=""/>
            </SwiperSlide>
          }</For>
        </Swiper>
      </div>
    </>
);
}

import {Swiper, SwiperSlide} from 'swiper/solid';
// @ts-ignore
import {Navigation, Scrollbar} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {For} from 'solid-js';

import './pricesSlider.css'
import PricesInfoCard from '@/components/pricesSlider/pricesInfoCard';

export type PricesInfoType = {
  name: string;
  text: string;
  services: string[];
}

export default () => {
  let pricesData: PricesInfoType[] = [
    {
      name: 'Послуги',
      text: 'Ми знаходимо індивідуальний підхід до кожного пацієнта, забезпечуючи комплексне обстеження та ефективне лікування за допомогою сучасного обладнання та доказових методів медицини. Наша мета - зробити все  для підтримки Вашого здоров\'я.',
      services: [
        'консультації спеціалістів',
        'УЗД діагностика',
        'функціональна діагностика',
      ],
    },
    {
      name: 'Аналізи',
      text: 'Разом з нашими партнерами - лабораторією ProLab, ми забезпечуємо нашим пацієнтам швидку та надійну лабораторну діагностику. Ми використовуємо передові методи та сучасне обладнання для отримання точних результатів, необхідних для правильного діагностування та лікування',
      services: [
        'загальноклінічні дослідження',
        'маркери анемії, вітаміни',
        'функціональна діагностика',
        'онкологічна панель',
      ],
    },
  ]

  return (
    <>
      <div class="pt-[5rem] pb-[6rem] md:hidden">
        <Swiper
          modules={[Navigation, Scrollbar]}
          spaceBetween={50}
          slidesPerView={1}
          scrollbar={{ draggable: false }}
          centeredSlides={true}
          class="swiper_price_container"
        >
          <For each={pricesData}>{(priceData: PricesInfoType) =>
            <SwiperSlide class="swiper_price_slide">
              <PricesInfoCard name={priceData.name} text={priceData.text} services={priceData.services} />
            </SwiperSlide>
          }</For>
        </Swiper>
      </div>
      <div class="hidden pt-[5rem] md:flex md:justify-center md:items-stretch md:gap-[9rem] drop-shadow-[10px_10px_0px_rgba(70,208,208,1)]">
        <For each={pricesData}>{(priceData: PricesInfoType) =>
          <PricesInfoCard name={priceData.name} text={priceData.text} services={priceData.services} />
        }</For>
      </div>
    </>
  )
}

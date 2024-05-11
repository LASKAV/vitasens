
// @ts-ignore
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/solid';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import './doctorsShowcase.css'

import {For} from 'solid-js';

type RegisteredNurseData = {
  fullName: string;
  position: string;
  description?: string;
  workingDays?: string;
  serviceAppointmentPrice?: number;
  rnPhotoLink: string;
}

export default () => {
  let rnInfo: RegisteredNurseData[] = [
    {
      fullName: 'Саморукова Вікторія',
      position: 'Засновниця клініки',
      rnPhotoLink: '/assets/images/rn-v-samorukova.jpeg'
    },
    {
      fullName: 'Хоміна Ольга',
      position: 'Лікар гастроентеролог',
      rnPhotoLink: '/assets/images/rn-o-homina.jpeg'
    },
    {
      fullName: 'Дукова Ольга',
      position: 'Лікар невропатолог',
      rnPhotoLink: '/assets/images/rn-o-dukova.jpeg'
    },
    {
      fullName: 'Гвоздяниця Анастасія',
      position: 'Лікар ендокринолог',
      rnPhotoLink: '/assets/images/rn-a-gvozdianitsa.jpeg'
    },
    {
      fullName: 'Кудінова Наталія',
      position: 'Лікар УЗД',
      rnPhotoLink: '/assets/images/rn-n-kudinova.jpeg'
    }
  ]

  return (
    <div class="pt-[3.3rem]">
      <Swiper
        modules={[Navigation, Scrollbar]}
        spaceBetween={50}
        slidesPerView={1}
        scrollbar={{ draggable: false }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <For each={rnInfo}>{(info) =>
          <SwiperSlide class="py-4">
            <div class="relative w-[13.5rem] h-[19.3rem] pt-[0.44rem] pb-2 bg-white shadow-[5px_5px_0px_0px_rgba(217,217,217,1)] rounded-[1.25rem] mx-auto border border-[#D9D9D9]">
              <div class="w-[12.5rem] h-[12rem] rounded-[0.9375rem] overflow-hidden mx-auto">
                <img class="select-none object-cover w-full h-full" src={info.rnPhotoLink} alt="ceo"/>
              </div>
              <div class="pl-[0.5rem] pt-[0.62rem]">
                <div class="text-tiffany text-[0.75rem] font-semibold">{info.fullName}</div>
                <div class="text-[0.75rem]">{info.position}</div>
              </div>
              <button class="absolute left-2 bottom-2 text-[0.75rem] border-[2px] border-tiffany-light rounded-full px-2 py-1 hover:bg-tiffany-light hover:text-white">консультація</button>
              <button class="absolute right-2 bottom-2">
                <img class="object-cover w-full h-full" src="/assets/images/expand-view-icon.svg" alt="ceo"/>
              </button>
            </div>
          </SwiperSlide>
        }
        </For>
      </Swiper>
    </div>
  )
}

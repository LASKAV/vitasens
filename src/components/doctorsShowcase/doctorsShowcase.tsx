
// @ts-ignore
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/solid';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import './doctorsShowcase.css'

import {For} from 'solid-js';

import DoctorTile from './doctorsShowcaseTile.tsx'

type RegisteredNurseData = {
  id: string;
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
      id: '1',
      fullName: 'Саморукова Вікторія',
      position: 'Засновниця клініки',
      rnPhotoLink: '/assets/images/rn-v-samorukova.jpeg'
    },
    {
      id: '2',
      fullName: 'Хоміна Ольга',
      position: 'Лікар гастроентеролог',
      rnPhotoLink: '/assets/images/rn-o-homina.jpeg'
    },
    {
      id: '3',
      fullName: 'Дукова Ольга',
      position: 'Лікар невропатолог',
      rnPhotoLink: '/assets/images/rn-o-dukova.jpeg'
    },
    {
      id: '4',
      fullName: 'Гвоздяниця Анастасія',
      position: 'Лікар ендокринолог',
      rnPhotoLink: '/assets/images/rn-a-gvozdianitsa.jpeg'
    },
    {
      id: '5',
      fullName: 'Кудінова Наталія',
      position: 'Лікар УЗД',
      rnPhotoLink: '/assets/images/rn-n-kudinova.jpeg'
    }
  ]

  return (
    <>
      <div class="pt-[3.3rem] lg:hidden">
        <Swiper
          modules={[Navigation, Scrollbar]}
          spaceBetween={50}
          slidesPerView={1}
          scrollbar={{ draggable: false }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          <For each={rnInfo}>{(info: RegisteredNurseData) =>
            <SwiperSlide class="py-4">
              <DoctorTile id={info.id} fullName={info.fullName} position={info.position} rnPhotoLink={info.rnPhotoLink} />
            </SwiperSlide>
          }
          </For>
        </Swiper>
      </div>
      <div class="hidden pt-16 gap-[0rem] lg:flex lg:container lg:mx-auto">
        <For each={rnInfo}>{(info: RegisteredNurseData) =>
          <DoctorTile id={info.id} fullName={info.fullName} position={info.position} rnPhotoLink={info.rnPhotoLink} />
        }
        </For>
      </div>
    </>
  )
}

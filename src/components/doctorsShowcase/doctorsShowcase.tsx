// @ts-ignore
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/solid';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import './doctorsShowcase.css'

import {createSignal, For} from 'solid-js';

import DoctorTile from './doctorsShowcaseTile.tsx';
import DoctorDetailsModal from './doctorDetailsModal';

export type RegisteredNurseData = {
  firstName: string;
  lastName: string;
  middleName: string;
  position: string;
  description: string;
  additional?: string;
  workingDays: string;
  serviceAppointmentPrice?: number;
  outOfOfficeAppointmentPrice?: number;
  rnPhotoLink: string;
}

export default () => {
  let rnInfo: RegisteredNurseData[] = [
    {
      firstName: 'Вікторія',
      lastName: 'Саморукова',
      middleName: 'Володимірівна',
      position: 'Засновниця клініки',
      description: 'Лікар кардіолог, лікар вищої категорії зі стажем роботи більше 20 років, кандидат медичних наук, входить до 100 найвпливовіших жінок України. Проводить консультації та УЗД діагностику. Каже, що закохана у серце з першого погляду на УЗД апараті.',
      additional: 'Проводить консультації як офлайн, так і онлайн',
      workingDays: 'Прийом: пн-пт',
      serviceAppointmentPrice: 800,
      rnPhotoLink: '/assets/images/rn-v-samorukova.jpeg'
    },
    {
      firstName: 'Ольга',
      lastName: 'Хоміна',
      middleName: 'Юріївна',
      position: 'Лікар гастроентеролог',
      description: 'Лікар гастроентеролог зі стажем роботи більше 20 років. Керується лише принципами доказової медицини, тому не радить пити соду від печії, а радить записатися на прийом! Допоможе вирішити будь-яку гастроентерологічну проблему.',
      workingDays: 'Прийом щосуботи',
      serviceAppointmentPrice: 700,
      rnPhotoLink: '/assets/images/rn-o-homina.jpeg'
    },
    {
      firstName: 'Ольга',
      lastName: 'Дукова',
      middleName: 'Робертівна',
      position: 'Лікар невропатолог',
      description: 'ЛІкар вищої категорії, стаж роботи - більше 40 років. Кандидат медичних наук, доцент кафедри “Загальної практики” ОНМедУ. Як і всі лікарі команди VitaSens, керується лише принципами доказової медицини, тому розповість чому діагнозу вегето-судинна дистонія не існує.',
      workingDays: 'Прийом щовівторка',
      serviceAppointmentPrice: 700,
      rnPhotoLink: '/assets/images/rn-o-dukova.jpeg'
    },
    {
      firstName: 'Анастасія',
      lastName: 'Гвоздяниця',
      middleName: 'Іванівна',
      position: 'Лікар ендокринолог',
      description: 'Лікар ендокринолог зі стажем роботи більше 10 років. Анастасія Іванівна знається на ендокринних проблемах з заплідненням, спеціалізується на правильному харчуванні та допоможе вирішити будь-яку ендокринологічну проблему.',
      additional: 'Проводить консультації як офлайн, так і онлайн',
      workingDays: 'Прийом щовівторка',
      serviceAppointmentPrice: 700,
      outOfOfficeAppointmentPrice: 800,
      rnPhotoLink: '/assets/images/rn-a-gvozdianitsa.jpeg'
    },
    {
      firstName: 'Наталія',
      lastName: 'Кудінова',
      middleName: 'Анатоліївна',
      position: 'Лікар УЗД',
      description: 'Лікар вищої категорії зі стажем роботи понад 40 років. Робити УЗД у Наталії Анатоліївни - це як прийти на екскурсію власного організму, ви почуєте про свої органи і побачите їх на УЗД апараті.\n' +
        'Дослідження проводяться як дорослим, так і дітям',
      workingDays: 'Прийом щочетверга',
      rnPhotoLink: '/assets/images/rn-n-kudinova.jpeg'
    }
  ];

  const [selectedRnNumber, setSelectedRnNumber] = createSignal(0);

  const [isDetailsModalOpen, setDetailsModalOpen] = createSignal(false);

  const openModal = (index: number) => {
    setSelectedRnNumber(index);
    setDetailsModalOpen(true);
  }

  const closeModal = () => {
    setDetailsModalOpen(false);
  }

  return (
    <>
      <div class="pt-[3.3rem] lg:hidden">
        <Swiper
          modules={[Navigation, Scrollbar]}
          spaceBetween={50}
          slidesPerView={1}
          scrollbar={{ draggable: false }}
        >
          <For each={rnInfo}>{(info: RegisteredNurseData, i) =>
            <SwiperSlide class="py-4">
              <DoctorTile info={info} onOpen={openModal} index={i()} />
            </SwiperSlide>
          }
          </For>
        </Swiper>
      </div>
      <div class="hidden pt-16 gap-[0rem] lg:flex lg:container lg:mx-auto">
        <For each={rnInfo}>{(info: RegisteredNurseData, i) =>
          <DoctorTile info={info} onOpen={openModal} index={i()} />
        }
        </For>
      </div>
      <DoctorDetailsModal isOpen={isDetailsModalOpen()} info={rnInfo[selectedRnNumber()]} onClose={closeModal} />
    </>
  )
}

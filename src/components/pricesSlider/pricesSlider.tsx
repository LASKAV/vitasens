import { Swiper, SwiperSlide } from 'swiper/solid';
// @ts-ignore
import { Navigation, Scrollbar } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { createSignal, For, onMount } from 'solid-js';

import './pricesSlider.css';
import PricesInfoCard from '@/components/pricesSlider/pricesInfoCard';
import ServicePriceModal from '@/components/servicePriceModal/servicePriceModal';
import AnalysisPriceModal from '@/components/analysisPriceModal/analysisPriceModal';
import type { Service } from '@/types/Service.ts';
import BookConsultationFlow from '@/components/bookConsultationFlow/bookConsultationFlow';
import { ServiceType } from '@/enums/serviceType.enum.ts';
import type { AnalysisSuperCategory } from '@/types/AnalysisSuperCategory';

export type PricesInfoType = {
  name: string;
  text: string;
  keyPoints: string[];
  services: Service[];
  onButtonClick: () => void;
};

type ServiceSliderProps = {
  openUrlParam?: string;
  services?: Service[];
  categories?: AnalysisSuperCategory[];
  referrerUrl?: string;
};
const [serviceTitle, setServiceTitle] = createSignal('');
const [serviceId, setServiceId] = createSignal(0);
const [serviceType, setServiceType] = createSignal('');
const [isBookingModalOpen, setBookingModalOpen] = createSignal(false);

const [isServicePriceModalOpen, setServicePriceModalOpen] = createSignal(false);
const [isAnalysesModalOpen, setAnalysesModalOpen] = createSignal(false);

export default (props: ServiceSliderProps) => {
  let pricesData: PricesInfoType[] = [
    {
      name: 'Послуги',
      text: "Ми знаходимо індивідуальний підхід до кожного пацієнта, забезпечуючи комплексне обстеження та ефективне лікування за допомогою сучасного обладнання та доказових методів медицини. Наша мета - зробити все  для підтримки Вашого здоров'я.",
      keyPoints: [
        'консультації спеціалістів',
        'УЗД діагностика',
        'функціональна діагностика',
      ],
      services: !!props.services ? [...props.services] : [],
      onButtonClick: () => {
        setServicePriceModalOpen(true);
      },
    },
    {
      name: 'Аналізи',
      text: 'Разом з нашими партнерами - лабораторією ProLab, ми забезпечуємо нашим пацієнтам швидку та надійну лабораторну діагностику. Ми використовуємо передові методи та сучасне обладнання для отримання точних результатів, необхідних для правильного діагностування та лікування',
      keyPoints: [
        'загальноклінічні дослідження',
        'маркери анемії, вітаміни',
        'функціональна діагностика',
        'онкологічна панель',
      ],
      services: !!props.services ? [...props.services] : [],
      onButtonClick: () => {
        setAnalysesModalOpen(true);
      },
    },
  ];

  const openBookingModal = (id: number, title: string, type: ServiceType) => {
    setServiceType(type);
    setServiceTitle(title);
    setServiceId(id);
    setServicePriceModalOpen(false);
    setBookingModalOpen(true);
  };

  onMount(() => {
    if (props.openUrlParam) {
      switch (props.openUrlParam as string) {
        case 'ultrasound': {
          setServicePriceModalOpen(true);
          break;
        }
        case 'appointments': {
          setServicePriceModalOpen(true);
          break;
        }
      }
    }
  });

  return (
    <>
      <div class='pb-[6rem] pt-[5rem] md:hidden'>
        <Swiper
          modules={[Navigation, Scrollbar]}
          spaceBetween={50}
          slidesPerView={1}
          scrollbar={{ draggable: false }}
          centeredSlides={true}
          class='swiper_price_container'
        >
          <For each={pricesData}>
            {(priceData: PricesInfoType) => (
              <SwiperSlide class='swiper_price_slide'>
                <PricesInfoCard
                  name={priceData.name}
                  text={priceData.text}
                  services={priceData.services}
                  keyPoints={priceData.keyPoints}
                  onButtonClick={priceData.onButtonClick}
                />
              </SwiperSlide>
            )}
          </For>
        </Swiper>
      </div>
      <div class='hidden pb-[9rem] pt-[5rem] drop-shadow-[10px_10px_0px_rgba(70,208,208,1)] md:flex md:items-stretch md:justify-center md:gap-[9rem]'>
        <For each={pricesData}>
          {(priceData: PricesInfoType) => (
            <PricesInfoCard
              name={priceData.name}
              text={priceData.text}
              services={priceData.services}
              keyPoints={priceData.keyPoints}
              onButtonClick={priceData.onButtonClick}
            />
          )}
        </For>
      </div>
      <ServicePriceModal
        isOpen={isServicePriceModalOpen()}
        onClose={() => setServicePriceModalOpen(false)}
        services={props.services ? [...props.services] : []}
        action={openBookingModal}
        openUrlParam={props.openUrlParam}
      />
      <AnalysisPriceModal
        isOpen={isAnalysesModalOpen()}
        onClose={() => setAnalysesModalOpen(false)}
        superCategories={props.categories ? props.categories : []}
        action={openBookingModal}
      />

      <BookConsultationFlow
        isOpen={isBookingModalOpen()}
        onClose={() => setBookingModalOpen(false)}
        service={serviceTitle()}
        serviceId={serviceId()}
        serviceType={serviceType()}
        referrerUrl={props.referrerUrl}
      />
    </>
  );
};

import ActionButton from '../actionButton/actionButton';
import ActionButtonMinor from '../actionButtonMinor/actionButtonMinor';
import BookConsultationFlow from '@/components/bookConsultationFlow/bookConsultationFlow';
import HeroBgElementIcon from '@/assets/images/hero-bg-element.png';
import CeoOfClinicImage from '@/assets/images/ceo.webp';
import './hero.css';
// import { gsap } from 'gsap/dist/gsap';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { createSignal } from 'solid-js';
import { ServiceType } from '@/enums/serviceType.enum.ts';

type HeroProps = {
  serviceId?: number;
  service?: string;
};

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const gsapParallax = (element: HTMLDivElement) => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: element,
      start: 0,
      end: 'bottom top',
      scrub: true,
    },
  });
  tl.to(element, {
    y: 140,
  });
};

const [isBookingModalOpen, setBookingModalOpen] = createSignal(false);

export default (props: HeroProps) => {
  return (
    <div class='lg:container lg:mx-auto 2xl:relative'>
      <BookConsultationFlow
        isOpen={isBookingModalOpen()}
        onClose={() => setBookingModalOpen(false)}
        serviceId={props.serviceId}
        service={props.service}
        serviceType={ServiceType.Appointment}
      />
      <div
        ref={gsapParallax}
        class='parallax container absolute z-[-1] mx-auto h-[130%] overflow-x-hidden lg:h-full'
      >
        <div class='relative left-[-2.5rem] top-[1rem] h-36 w-36 drop-shadow-[6px_5px_4px_rgba(0,0,0,0.25)] lg:left-[1.5rem]'>
          <img
            class='h-[80%] rotate-[-36deg] lg:h-[100%]'
            src={HeroBgElementIcon.src}
            alt=''
          />
        </div>
        <div class='relative left-[43.12rem] top-[9.5rem] hidden h-36 w-36 drop-shadow-[6px_5px_4px_rgba(0,0,0,0.25)] lg:block'>
          <img class='rotate-[-36deg]' src={HeroBgElementIcon.src} alt='' />
        </div>
        <div class='absolute right-[4.21rem] top-[0.5rem] hidden h-36 w-36 drop-shadow-[6px_5px_4px_rgba(0,0,0,0.25)] lg:block'>
          <img class='rotate-[-36deg]' src={HeroBgElementIcon.src} alt='' />
        </div>
        <div class='absolute left-[2.5rem] top-[41rem] h-36 w-36 drop-shadow-[6px_5px_4px_rgba(0,0,0,0.25)] lg:left-[11.42rem]'>
          <img
            class='h-[80%] rotate-[27deg] lg:h-full'
            src={HeroBgElementIcon.src}
            alt=''
          />
        </div>
        <div class='absolute right-[-2.5rem] top-[36.19rem] h-36 w-36 drop-shadow-[6px_5px_4px_rgba(0,0,0,0.25)] lg:right-[11.53rem] lg:top-[41.19rem]'>
          <img
            class='h-[80%] rotate-[57deg] lg:h-full'
            src={HeroBgElementIcon.src}
            alt=''
          />
        </div>
      </div>
      <div class='z-[1] px-4 pb-[15rem] pt-[10rem] lg:px-[3.25rem]'>
        <div class='pb-4'>
          <span class='text-[2.25rem] text-[#4ABCBC] [text-shadow:3px_4px_4px_rgba(36,123,123,0.40)] lg:text-[4.375rem]'>
            Ваше здоров’я
          </span>
        </div>
        <div class=''>
          <span class='branding-letter'>V</span>
          <span class='branding-letter'>i</span>
          <span class='branding-letter'>t</span>
          <span class='branding-letter'>a</span>
          <span class='branding-letter'>S</span>
          <span class='branding-letter'>e</span>
          <span class='branding-letter'>n</span>
          <span class='branding-letter'>s</span>
        </div>
        <div class='max-w-[43.56rem] text-pretty py-[2.19rem]'>
          <span class='text-[1.25rem] font-medium italic leading-[1.52419rem] tracking-[0.15rem] text-[#444]'>
            Медичний центр VitaSens - коли все в одному місці і без черг. Аналізи, УЗД
            діагностика, консультація лікарів, а також - спеціально розроблені
            чек-апи для усіх систем організму.
          </span>
        </div>
        <div class='hidden lg:block'>
          <ActionButton
            text='Консультація'
            action={() => setBookingModalOpen(true)}
          />
        </div>
        <div class='block lg:hidden'>
          <ActionButtonMinor
            text='Консультація'
            action={() => setBookingModalOpen(true)}
          />
        </div>
      </div>
      <div class='absolute right-0 top-[12.62rem] hidden h-[36.87rem] w-[37.68rem] overflow-hidden rounded-l-[5rem] shadow-[8.7px_8.7px_4px_0px_rgba(0,0,0,0.35)] xl:flex 2xl:top-24 2xl:rounded-r-[5rem]'>
        <img class='w-full object-cover' src={CeoOfClinicImage.src} alt='ceo' />
      </div>
    </div>
  );
};

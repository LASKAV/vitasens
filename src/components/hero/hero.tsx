import ActionButton from '../actionButton/actionButton';
import ActionButtonMinor from '../actionButtonMinor/actionButtonMinor';
import BookingModal from '../bookConsultationModal/bookConsultationModal';
import SuccessModal from '../bookConsultationSuccessModal/bookConsultationSuccessModal';
import './hero.css';
// @ts-ignore
import { gsap } from 'gsap/dist/gsap';
// @ts-ignore
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import {createSignal} from 'solid-js';

gsap.registerPlugin(ScrollTrigger);

const gsapParallax = (element: HTMLDivElement) => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: element,
      start: 0,
      end: 'bottom top',
      scrub: true,
    }
  });
  tl.to(element, {
    y: 140
  })
};

const [isBookingModalOpen, setBookingModalOpen] = createSignal(false);
const [isSuccessModalOpen, setSuccessModalOpen] = createSignal(false);

const openBookingModal = () => {
  setBookingModalOpen(true);
}

const closeBookingModal = () => {
  setBookingModalOpen(false);
}

const closeSuccessModal = () => {
  setSuccessModalOpen(false);
}

const onRequestSuccess = () => {
  closeBookingModal();
  setSuccessModalOpen(true);
}

export default () => {
  return (
    <div class="2xl:relative lg:container lg:mx-auto">
      <BookingModal isOpen={isBookingModalOpen()} onClose={closeBookingModal} onRequestSuccess={onRequestSuccess} />
      <SuccessModal isOpen={isSuccessModalOpen()} onClose={closeSuccessModal} />
      <div ref={gsapParallax} class="parallax absolute container h-full mx-auto z-[-1] overflow-x-hidden">
        <div class="relative top-[1rem] left-[-2.5rem] lg:left-[1.5rem] h-36 w-36 drop-shadow-[6px_5px_4px_rgba(0,0,0,0.25)]">
          <img class="h-[80%] lg:h-[100%] rotate-[-36deg]" src="/assets/images/hero-bg-element.png" alt="hero" />
        </div>
        <div class="relative hidden lg:block top-[15.5rem] left-[50.12rem] h-36 w-36 drop-shadow-[6px_5px_4px_rgba(0,0,0,0.25)]">
          <img class="rotate-[-36deg]" src="/assets/images/hero-bg-element.png" alt="hero" />
        </div>
        <div class="absolute hidden lg:block top-[0.5rem] right-[4.21rem] h-36 w-36 drop-shadow-[6px_5px_4px_rgba(0,0,0,0.25)]">
          <img class="rotate-[-36deg]" src="/assets/images/hero-bg-element.png" alt="hero" />
        </div>
        <div class="absolute top-[41rem] left-[2.5rem] lg:left-[11.42rem] h-36 w-36 drop-shadow-[6px_5px_4px_rgba(0,0,0,0.25)]">
          <img class="h-[80%] rotate-[27deg]" src="/assets/images/hero-bg-element.png" alt="hero" />
        </div>
        <div class="absolute top-[36.19rem] lg:top-[41.19rem] right-[-2.5rem] lg:right-[11.53rem] h-36 w-36 drop-shadow-[6px_5px_4px_rgba(0,0,0,0.25)]">
          <img class="h-[80%] rotate-[57deg]" src="/assets/images/hero-bg-element.png" alt="hero" />
        </div>
      </div>
      <div class="px-4 lg:px-[7.25rem] pt-[10rem] pb-[15rem] z-[1]">
        <div class="pb-4">
          <span class="[text-shadow:3px_4px_4px_rgba(36,123,123,0.40)] text-[#4ABCBC] text-[2.25rem] lg:text-[4.375rem]">Ваше здоров’я</span>
        </div>
        <div class="">
          <span class="branding-letter">V</span>
          <span class="branding-letter">i</span>
          <span class="branding-letter">t</span>
          <span class="branding-letter">a</span>
          <span class="branding-letter">S</span>
          <span class="branding-letter">e</span>
          <span class="branding-letter">n</span>
          <span class="branding-letter">s</span>
        </div>
        <div class="py-[2.19rem] max-w-[43.56rem] text-pretty">
            <span class="[text-shadow:0px_4px_4px_rgba(0,0,0,0.25)] italic font-medium text-[#111] leading-[1.52419rem] text-5">
              Клініка VitaSens - коли все в одному місці і без черг.
              Аналізи, УЗД діагностика, консультація лікарів,
              а також - спеціально розроблені чек-апи для усіх
              систем організму.
            </span>
        </div>
        <div class="hidden lg:block">
          <ActionButton text="Консультація" action={openBookingModal}  />
        </div>
        <div class="block lg:hidden">
          <ActionButtonMinor text="Консультація" action={openBookingModal} />
        </div>
      </div>
      <div class="absolute top-[12.62rem] 2xl:top-24 right-0 hidden xl:flex shadow-[8.7px_8.7px_4px_0px_rgba(0,0,0,0.35)] overflow-hidden rounded-l-[5rem] 2xl:rounded-r-[5rem] w-[37.68rem] h-[36.87rem]">
        <img class="object-cover w-full" src="/assets/images/ceo.png" alt="ceo" />
      </div>
    </div>
  )
}

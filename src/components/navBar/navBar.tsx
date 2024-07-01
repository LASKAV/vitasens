import Logo from '../logo/logo.tsx';
import { createEffect, createSignal, For, Show } from 'solid-js';
import ContactUsModal from '@/components/contactUsModal/contactUsModal';
import MobileMenu from './mobileMenu';
import BookConsultationFlow from '@/components/bookConsultationFlow/bookConsultationFlow.tsx';
import './navBar.css';
import { ServiceType } from '@/enums/serviceType.enum.ts';

export type NavBarItem = {
  title: string;
  href: string;
  img: string;
  submenu?: NavBarSubmenuItem[];
  action?: () => void;
};

export type NavBarSubmenuItem = {
  title: string;
  href: string;
};

const [isContactUsModalOpen, setContactUsModalOpen] = createSignal(false);
const [isMobileMenuOpen, setMobileMenuOpen] = createSignal(false);
const [isBookingModalOpen, setBookingModalOpen] = createSignal(false);

let burgerMenuRef: SVGSVGElement;

type NavProps = {
  currentPage: string;
  serviceId?: number;
  service?: string;
};

export const menuItems: NavBarItem[] = [
  {
    title: 'Головна',
    href: '/',
    img: '/assets/images/house-icon.svg',
  },
  {
    title: 'Послуги',
    href: 'javascript:void(0);',
    img: '/assets/images/document-icon.svg',
    submenu: [
      {
        title: 'УЗД діагностика',
        href: '/ultrasound',
      },
      {
        title: 'Консультації',
        href: '/appointments',
      },
    ],
  },
  {
    title: 'Чек-апи',
    href: '/check-ups',
    img: '/assets/images/list-icon.svg',
  },
  {
    title: 'Вартість',
    href: '/prices',
    img: '/assets/images/price-icon.svg',
  },
  {
    title: 'Лікарі',
    href: '/doctors',
    img: '/assets/images/doctors-icon.svg',
  },
  {
    title: 'Контакти',
    href: 'javascript:void(0);',
    img: '/assets/images/phone-icon.svg',
    action: () => {
      setMobileMenuOpen(false);
      setContactUsModalOpen(true);
    },
  },
];

export default (props: NavProps) => {
  createEffect(() => {
    if (!isMobileMenuOpen()) {
      burgerMenuRef.classList.remove('open');
    } else {
      burgerMenuRef.classList.add('open');
    }
  });

  return (
    <>
      <div class='z-[9999] h-[2.62rem] w-full bg-white'></div>
      <div class='sticky top-0 z-[9999] select-none bg-white text-tiffany'>
        <div class='container mx-auto flex justify-between'>
          <div class='w-[19.5rem] pl-5 xl:p-0'>
            <Logo />
          </div>
          <div class='hidden w-full items-center xl:flex'>
            <div class='flex w-full justify-center gap-[2.5rem]'>
              <For each={menuItems}>
                {(menuItem: NavBarItem) => (
                  <div
                    onClick={menuItem.action}
                    class='item-container underline-half flex text-[#B6B6B6] hover:text-tiffany-light'
                  >
                    <a
                      class={
                        menuItem.href.replaceAll('/', '') ===
                        props.currentPage.replaceAll('/', '')
                          ? 'pr-[0.31rem] text-tiffany-light'
                          : 'pr-[0.31rem]'
                      }
                      href={menuItem.href}
                    >
                      {menuItem.title}
                    </a>
                    <Show when={menuItem.submenu}>
                      <svg
                        class='chevron-icon inline fill-[#B6B6B6]'
                        xmlns='http://www.w3.org/2000/svg'
                        width='12'
                        height='8'
                        viewBox='0 0 12 8'
                        fill='none'
                      >
                        <path d='M1.41 0L6 4.58L10.59 0L12 1.41L6 7.41L0 1.41L1.41 0Z' />
                      </svg>
                      <div class='drop-down-menu absolute h-0 w-[25rem] overflow-hidden bg-white py-0  transition-all duration-300'>
                        <For each={menuItem.submenu}>
                          {(submenuItem: NavBarSubmenuItem) => (
                            <div class=''>
                              <a
                                class={
                                  submenuItem.href.replaceAll('/', '') ===
                                  props.currentPage.replaceAll('/', '')
                                    ? 'text-tiffany-light'
                                    : 'text-[#B6B6B6] hover:text-tiffany-light'
                                }
                                href={submenuItem.href}
                              >
                                {submenuItem.title}
                              </a>
                            </div>
                          )}
                        </For>
                      </div>
                    </Show>
                  </div>
                )}
              </For>
            </div>
            <div>
              <button
                onClick={() => setBookingModalOpen(true)}
                class='rounded-[0.9375rem] border-[3px] border-[#8AD4D4] bg-white px-[0.94rem] py-[0.7rem] text-[0.875rem] font-medium tracking-[0.04375rem] text-tiffany-light drop-shadow-[2px_2px_0px_rgba(70,208,208,1)] transition-all duration-300 hover:border-[#4ABCBC] hover:bg-[#4ABCBC] hover:text-white'
              >
                Консультація
              </button>
            </div>
          </div>
          <div
            onClick={() => {
              setMobileMenuOpen(!isMobileMenuOpen());
            }}
            class='pr-5 pt-2 xl:hidden'
          >
            <svg
              ref={burgerMenuRef}
              id='burger-icon'
              class=''
              xmlns='http://www.w3.org/2000/svg'
              width='50'
              height='50'
              viewBox='0 0 50 50'
              fill='#FFF'
            >
              <line
                x1='11.5'
                y1='13.5'
                x2='38.5'
                y2='13.5'
                stroke='#4ABCBC'
                stroke-width='3'
                stroke-linecap='round'
              />
              <line
                x1='11.5'
                y1='23.5'
                x2='38.5'
                y2='23.5'
                stroke='#4ABCBC'
                stroke-width='3'
                stroke-linecap='round'
              />
              <line
                x1='11.5'
                y1='33.5'
                x2='38.5'
                y2='33.5'
                stroke='#4ABCBC'
                stroke-width='3'
                stroke-linecap='round'
              />
            </svg>
          </div>
        </div>
      </div>
      <ContactUsModal
        isOpen={isContactUsModalOpen()}
        onClose={() => setContactUsModalOpen(false)}
      />
      <MobileMenu
        isOpen={isMobileMenuOpen()}
        onClose={() => setMobileMenuOpen(false)}
        menuItems={menuItems}
      />
      <BookConsultationFlow
        isOpen={isBookingModalOpen()}
        onClose={() => setBookingModalOpen(false)}
        serviceId={props.serviceId}
        service={props.service}
        serviceType={ServiceType.Appointment}
      />
    </>
  );
};

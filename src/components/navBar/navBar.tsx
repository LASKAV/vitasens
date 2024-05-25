import Logo from '../logo/logo.tsx';
import {createSignal, For, Show} from 'solid-js';
import ContactUsModal from '@/components/contactUsModal/contactUsModal';
import MobileMenu from './mobileMenu';

import './navBar.css';

export type NavBarItem = {
  title: string;
  href: string;
  img: string;
  submenu?: NavBarSubmenuItem[];
  action?: () => void;
}

export type NavBarSubmenuItem = {
  title: string;
  href: string
}

const [isContactUsModalOpen, setContactUsModalOpen] = createSignal(false);
const [isMobileMenuOpen, setMobileMenuOpen] = createSignal(false);

const openContactUsModal = () => {
  setContactUsModalOpen(true);
}

const closeContactUsModalOpen = () => {
  setContactUsModalOpen(false);
}

export default () => {
  let menuItems: NavBarItem[] =
  [
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
          href: '/'
        },
        {
          title: 'Консультації спеціалістів',
          href: '/'
        },
        {
          title: 'Аналізи',
          href: '/'
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
        openContactUsModal();
      },
    },
  ];

  return (
    <>
      <div class="h-[2.62rem] w-full bg-white z-[9999]">

      </div>
      <div
        class="sticky top-0 select-none text-tiffany bg-white z-[9999]"
      >
        <div class="container flex justify-between mx-auto">
          <div class="w-[19.5rem] pl-5 xl:p-0">
            <Logo />
          </div>
          <div class="hidden xl:flex items-center w-full">
            <div class="flex justify-center gap-[2.5rem] w-full">
              <For each={menuItems}>{(menuItem: NavBarItem) =>
                <div onClick={menuItem.action} class="item-container flex text-[#B6B6B6] hover:text-tiffany-light underline-half">
                  <a class="pr-[0.31rem]" href={menuItem.href}>{menuItem.title}</a>
                  <Show when={menuItem.submenu}>
                    <svg class="inline fill-[#B6B6B6] chevron-icon" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" fill="none">
                      <path d="M1.41 0L6 4.58L10.59 0L12 1.41L6 7.41L0 1.41L1.41 0Z" />
                    </svg>
                    <div class="absolute overflow-hidden w-[10rem] py-0 border-tiffany-light bg-white rounded-[0.625rem] transition-all duration-300 drop-down-menu h-0 translate-x-[-25%]">
                      <For each={menuItem.submenu}>{(submenuItem: NavBarSubmenuItem) =>
                        <a href={submenuItem.href}>
                          <div class="pl-2 hover:bg-vs-gray/40">{submenuItem.title}</div>
                        </a>
                      }</For>
                    </div>
                  </Show>
                </div>
              }</For>
            </div>
            <div>
              <button class="font-medium bg-white tracking-[0.04375rem] text-[0.875rem] text-tiffany-light border-[3px] border-[#8AD4D4] rounded-[0.9375rem] px-[0.94rem] py-[0.7rem] transition-all duration-300 hover:bg-[#4ABCBC] hover:text-white hover:border-[#4ABCBC]">
                Консультація
              </button>
            </div>
          </div>
          <div onClick={() => setMobileMenuOpen(!isMobileMenuOpen())} class="pr-5 pt-2 xl:hidden">
            <svg id="burger-icon" class="" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
              <line x1="11.5" y1="13.5" x2="38.5" y2="13.5" stroke="#4ABCBC" stroke-width="3" stroke-linecap="round"/>
              <line x1="11.5" y1="23.5" x2="38.5" y2="23.5" stroke="#4ABCBC" stroke-width="3" stroke-linecap="round"/>
              <line x1="11.5" y1="33.5" x2="38.5" y2="33.5" stroke="#4ABCBC" stroke-width="3" stroke-linecap="round"/>
            </svg>
          </div>
        </div>
      </div>
      <ContactUsModal isOpen={isContactUsModalOpen()} onClose={closeContactUsModalOpen}/>
      <MobileMenu isOpen={isMobileMenuOpen()} onClose={() => setMobileMenuOpen(false) } menuItems={menuItems}/>
    </>
  )
}

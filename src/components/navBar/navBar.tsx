import Logo from '../logo/logo.tsx';
import {createSignal, For} from 'solid-js';

export default () => {
  const [links, setLinks]  = createSignal([
    { href: '/', img: '/assets/images/house-icon.svg', text: 'Головна' },
    { href: '/', img: '/assets/images/document-icon.svg', text: 'Послуги' },
    { href: '/check-ups', img: '/assets/images/list-icon.svg', text: 'Чек-апи' },
    { href: '/', img: '/assets/images/price-icon.svg', text: 'Вартість' },
    { href: '/doctors', img: '/assets/images/doctors-icon.svg', text: 'Лікарі' },
    { href: '/', img: '/assets/images/camera-icon.svg', text: 'Галерея' },
    { href: '/', img: '/assets/images/phone-icon.svg', text: 'Контакти' },
  ]);

  return (
    <div
      class='m-auto flex max-w-[100rem] select-none justify-between pl-4 xl:pl-16 pr-24 pt-10 text-tiffany'
    >
      <Logo />
      <div class='hidden xl:flex items-start justify-end gap-3 pt-1'>
        <For each={links()}>{(link) =>
          <a
            class='flex items-center gap-[6px] rounded-xl px-5 py-2 outline outline-[3px] outline-offset-2 outline-tiffany/0 transition-all duration-300 ease-in-out hover:shadow-[0px_0px_5px_5px] hover:shadow-tiffany hover:outline-offset-0 hover:outline-tiffany'
            href={link.href}
          >
            <img class='h-5 w-5' src={link.img} alt={link.text}/>
            <span class='font-medium leading-none'>{link.text}</span>
          </a>
        }
        </For>
      </div>
    </div>
  )
}

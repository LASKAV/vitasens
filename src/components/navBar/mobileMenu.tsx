import type { NavBarItem } from '@/components/navBar/navBar.tsx';
import type { NavBarSubmenuItem } from '@/components/navBar/navBar.tsx';
import { createEffect, createSignal, For, Show } from 'solid-js';

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
  menuItems: NavBarItem[];
};

export default (props: MobileMenuProps) => {
  const [openMenu, setOpenMenu] = createSignal();

  const handleMenuClick = (index: number) => {
    setOpenMenu(openMenu() === index ? null : index);
  };

  createEffect(() => {
    if (props.isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  });
  return (
    <>
      {props.isOpen && (
        <div class='fixed left-0 top-0 z-[9998] h-full w-full items-center justify-center bg-white pt-[8.5rem] lg:flex'>
          <div class='h-full overflow-auto pl-[2.5rem]'>
            <For each={props.menuItems}>
              {(menuItem: NavBarItem, index) => (
                <>
                  <a
                    onClick={() => {
                      if (menuItem.action) {
                        menuItem.action();
                      }
                      handleMenuClick(index());
                    }}
                    href={menuItem.href}
                  >
                    <div class='flex items-center justify-start gap-2 pb-[1.25rem] pt-[1.25rem] text-[1.5rem] text-tiffany-light'>
                      {menuItem.title}
                      <Show when={menuItem.submenu}>
                        <svg
                          class={`chevron-icon inline fill-tiffany-light ${openMenu() === index() ? 'rotate-[180deg]' : ''}`}
                          xmlns='http://www.w3.org/2000/svg'
                          width='20'
                          height='12'
                          viewBox='0 0 12 8'
                          fill='none'
                        >
                          <path d='M1.41 0L6 4.58L10.59 0L12 1.41L6 7.41L0 1.41L1.41 0Z' />
                        </svg>
                      </Show>
                    </div>
                  </a>
                  <Show when={menuItem.submenu && openMenu() === index()}>
                    <div class='pl-5'>
                      <For each={menuItem.submenu}>
                        {(submenuItem: NavBarSubmenuItem) => (
                          <a href={submenuItem.href}>
                            <div class='py-[0.94rem] text-[1.25rem] text-tiffany-light'>
                              {submenuItem.title}
                            </div>
                          </a>
                        )}
                      </For>
                    </div>
                  </Show>
                </>
              )}
            </For>
          </div>
        </div>
      )}
    </>
  );
};

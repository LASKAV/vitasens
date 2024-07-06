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
                    <div class='pb-[1.25rem] pt-[1.25rem] text-[1.5rem] text-tiffany-light'>
                      {menuItem.title}
                    </div>
                  </a>
                  <Show when={menuItem.submenu && openMenu() === index()}>
                    <div class='pl-5'>
                      <For each={menuItem.submenu}>
                        {(submenuItem: NavBarSubmenuItem) => (
                          <a href={submenuItem.href}>
                            <div class='pt-[1.88rem] text-[1.25rem] text-tiffany-light'>
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

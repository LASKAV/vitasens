import type {NavBarItem} from '@/components/navBar/navBar.tsx';
import type {NavBarSubmenuItem} from '@/components/navBar/navBar.tsx';
import {createEffect, For, Show} from 'solid-js';

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
  menuItems: NavBarItem[];
}

export default (props: MobileMenuProps) => {

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
        <div class="fixed justify-center items-center top-0 left-0 w-full h-full bg-white/40 z-[9998] backdrop-blur-md pt-[8.5rem] lg:flex">
          <div class="pl-[2.5rem] h-full overflow-auto">
            <For each={props.menuItems}>{(menuItem: NavBarItem) =>
              <>
                <a onClick={menuItem.action} href={menuItem.href}>
                  <div class="text-tiffany-light text-[1.5rem] pt-[1.25rem] pb-[1.25rem]">
                    {menuItem.title}
                  </div>
                </a>
                <Show when={menuItem.submenu}>
                  <div class="pl-5">
                    <For each={menuItem.submenu}>{(submenuItem: NavBarSubmenuItem) =>
                      <a href={submenuItem.href}>
                        <div class="text-tiffany-light text-[1.25rem] pt-[1.88rem]">
                          {submenuItem.title}
                        </div>
                      </a>
                    }</For>
                  </div>
                </Show>
              </>
            }</For>
          </div>
        </div>
      )}
    </>
  );
}

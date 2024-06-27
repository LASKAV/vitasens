import type { PricesInfoType } from '@/components/pricesSlider/pricesSlider';
import { For } from 'solid-js';
import ServicePoint from '@/assets/images/prices-point-icon.svg';

export default (props: PricesInfoType) => {
  return (
    <div class='px-[1.37rem] pb-[1.37rem]'>
      <div class='mx-auto h-full min-h-[38.625rem] max-w-[24.125rem] rounded-[1.25rem] border border-tiffany bg-white px-[1.25rem] pb-[1.88rem] pt-[3.75rem]'>
        <div class='text-[1.5rem] font-semibold'>{props.name}</div>
        <div class='h-[9.6rem] pt-[1.56rem] text-[0.75rem] leading-4 text-[#929292]'>
          {props.text}
        </div>
        <div class='min-h-[17rem]'>
          <For each={props.services}>
            {(service: string) => (
              <div class='flex items-center py-[0.94rem]'>
                <img class='pr-[0.94rem]' src={ServicePoint.src} alt='' />
                <div class='text-[0.75rem]'>{service}</div>
              </div>
            )}
          </For>
        </div>
        <div class='flex items-center justify-center'>
          <button class='relative bottom-[0] max-w-[20rem] rounded-[0.625rem] bg-tiffany-light px-[5rem] py-[1.13rem] text-[1.25rem] text-white'>
            Переглянути
          </button>
        </div>
      </div>
    </div>
  );
};

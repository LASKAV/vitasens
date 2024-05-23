import type {PricesInfoType} from '@/components/pricesSlider/pricesSlider.tsx';
import {For} from 'solid-js';
import ServicePoint from 'public/assets/images/prices-point-icon.svg';

export default (props: PricesInfoType) => {
  return (
    <div class="px-[1.37rem] pb-[1.37rem]">
      <div
        class="px-[1.25rem] pt-[3.75rem] pb-[1.88rem] mx-auto max-w-[24.125rem] min-h-[38.625rem] h-full border border-tiffany rounded-[1.25rem] bg-white">
        <div class="text-[1.5rem] font-semibold">
          {props.name}
        </div>
        <div class="pt-[1.56rem] h-[9.6rem] text-[0.75rem] text-[#929292] leading-4">
          {props.text}
        </div>
        <div class="min-h-[17rem]">
          <For each={props.services}>{(service: string) =>
            <div class="py-[0.94rem] flex items-center">
              <img class="pr-[0.94rem]" src={ServicePoint.src} alt=""/>
              <div class="text-[0.75rem]">
                {service}
              </div>
            </div>
          }</For>
        </div>
        <div class="flex items-center justify-center">
          <button
            class="relative bottom-[0] max-w-[20rem] px-[5rem] py-[1.13rem] text-white text-[1.25rem] bg-tiffany-light rounded-[0.625rem]">
            Переглянути
          </button>
        </div>
      </div>
    </div>
  )
}

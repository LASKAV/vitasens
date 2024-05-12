import type {RegisteredNurseData} from '@/components/doctorsShowcase/doctorsShowcase.tsx';

type DoctorsShowcaseTileProps = {
  info: RegisteredNurseData;
  onOpen: (i: number) => void;
  index: number;
}

export default (props: DoctorsShowcaseTileProps) => {

  return (
    <>
      <div
        class="relative w-[13.5rem] h-[19.3rem] pt-[0.44rem] pb-2 bg-white shadow-[5px_5px_0px_0px_rgba(217,217,217,1)] rounded-[1.25rem] mx-auto border border-[#D9D9D9]">
        <div class="w-[12.5rem] h-[12rem] rounded-[0.9375rem] overflow-hidden mx-auto">
          <img class="select-none object-cover w-full h-full" src={props.info.rnPhotoLink} alt="ceo"/>
        </div>
        <div class="pl-[0.5rem] pt-[0.62rem]">
          <div class="text-tiffany text-[0.75rem] font-semibold">{props.info.fullName}</div>
          <div class="text-[0.75rem]">{props.info.position}</div>
        </div>
        <button
          class="absolute left-2 bottom-2 text-[0.75rem] border-[2px] border-tiffany-light rounded-full px-2 py-1 hover:bg-tiffany-light hover:text-white">консультація
        </button>
        <button onClick={() => props.onOpen(props.index) } class="absolute right-2 bottom-2">
          <img class="object-cover w-full h-full" src="/assets/images/expand-view-icon.svg" alt="ceo"/>
        </button>
      </div>
    </>
  )
}

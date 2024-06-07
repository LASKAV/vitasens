import type { RegisteredNurse } from '@/types/RegisteredNurse.ts';

type DoctorsShowcaseTileProps = {
  info: RegisteredNurse;
  onOpen: (i: number) => void;
  index: number;
};

export default (props: DoctorsShowcaseTileProps) => {
  return (
    <>
      <div class='relative mx-auto h-[19.3rem] w-[13.5rem] rounded-[1.25rem] border border-[#D9D9D9] bg-white pb-2 pt-[0.44rem] shadow-[5px_5px_0px_0px_rgba(217,217,217,1)]'>
        <div class='mx-auto h-[12rem] w-[12.5rem] overflow-hidden rounded-[0.9375rem]'>
          <img
            class='h-full w-full select-none object-cover'
            src={props.info.rnPhotoLink}
            alt='ceo'
          />
        </div>
        <div class='pl-[0.5rem] pt-[0.62rem]'>
          <div class='text-[0.75rem] font-semibold text-tiffany'>
            {props.info.lastName} {props.info.firstName}
          </div>
          <div class='text-[0.75rem]'>{props.info.position}</div>
        </div>
        <button class='absolute bottom-2 left-2 rounded-full border-[2px] border-tiffany-light px-2 py-1 text-[0.75rem] hover:bg-tiffany-light hover:text-white'>
          консультація
        </button>
        <button
          onClick={() => props.onOpen(props.index)}
          class='absolute bottom-2 right-2'
        >
          <img
            class='h-full w-full object-cover'
            src='/assets/images/expand-view-icon.svg'
            alt='ceo'
          />
        </button>
      </div>
    </>
  );
};

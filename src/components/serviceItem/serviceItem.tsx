import ActionButtonMinor from '../actionButtonMinor/actionButtonMinor.tsx';
type ServiceItemProps = {
  title: string;
  text: string;
}

export default (props: ServiceItemProps) => {
  return (
      <div class="px-[1.25rem] pt-[0.63rem] pb-[0.5rem] rounded-[1.25rem] flex flex-col items-center border-2 border-tiffany-light bg-white drop-shadow-[0px_4px_24px_rgba(0,0,0,0.20)] p-[0.64rem] w-[18rem]">
        <p class="tracking-widest">
          {props.text}
        </p>
        <div class="pb-[0.6rem] pt-[4rem]">
          <ActionButtonMinor text="детальніше"/>
        </div>
      </div>
  )
}

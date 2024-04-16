import ActionButtonMinor from '../actionButtonMinor/actionButtonMinor.tsx';
type ServiceItemProps = {
  title: string;
  text: string;
}

export default (props: ServiceItemProps) => {
  return (
    <div
      class="flex flex-col items-center bg-white drop-shadow-[0px_4px_24px_rgba(0,0,0,0.20)] p-[0.64rem] rounded-[1.25rem] w-[18rem]">
      <div class="pb-[0.8rem]">
        <span class="text-tiffany font-semibold">{props.title}</span>
      </div>
      <div class="bg-[rgba(217,217,217,0.60)] px-[1.25rem] pt-[0.63rem] pb-8 rounded-[1.25rem]">
        <p class="tracking-widest">
          {props.text}
        </p>
      </div>
      <div class="py-[0.6rem]">
        <ActionButtonMinor text="детальніше"/>
      </div>
    </div>
  )
}

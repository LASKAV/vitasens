type ActionButtonMinorProps = {
  text: string;
}

export default (props: ActionButtonMinorProps) => {
  return (
    <button class="font-black bg-white hover:bg-[#4ABCBC] text-[0.875rem] text-[#247B7B] hover:text-white border-[5px] border-[#8AD4D4] hover:border-[#4ABCBC] rounded-[0.9375rem] px-[1.8rem] py-[0.88rem] drop-shadow-[8px_8px_4px_rgba(13,92,99,1)] transition-all duration-300">
      {props.text}
    </button>
  )
}

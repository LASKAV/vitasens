type ActionButtonProps = {
  text: string;
  action?: () => void;
}

export default (props: ActionButtonProps) => {
  return (
    <button type="button" onClick={props.action} class="font-black bg-white hover:bg-[#4ABCBC] text-[0.875rem] text-[#247B7B] hover:text-white border-[5px] border-[#8AD4D4] hover:border-[#4ABCBC] rounded-[0.9375rem] py-[0.75rem] w-[15rem] drop-shadow-[8px_8px_4px_rgba(217,217,217,1)] transition-all duration-300">
      {props.text}
    </button>
  )
}

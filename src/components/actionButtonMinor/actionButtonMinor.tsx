type ActionButtonMinorProps = {
  text: string;
  action?: () => void;
}

export default (props: ActionButtonMinorProps) => {
  return (
    <button type="submit" onClick={props.action} class="font-black bg-white hover:bg-[#4ABCBC] text-[0.875rem] text-[#247B7B] hover:text-white border-[3px] border-[#8AD4D4] hover:border-[#4ABCBC] rounded-[0.9375rem] px-[1.8rem] py-[0.88rem] transition-all duration-300">
      {props.text}
    </button>
  )
}

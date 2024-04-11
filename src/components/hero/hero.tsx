import styles from './hero.css'
import ActionButton from '../actionButton/actionButton'

export default () => {
  return (
    <div class="relative 2xl:container 2xl:mx-auto">
      <div class="relative container mx-auto">
        <div class="absolute top-[1rem] left-[1.5rem] h-36 w-36 drop-shadow-[15px_15px_10px_rgba(0,0,0,0.5)]">
          <img class="rotate-[-36deg]" src="/assets/images/hero-bg-element.png" alt="hero" />
        </div>
        <div class="absolute top-[15.5rem] left-[45.12rem] h-36 w-36 drop-shadow-[15px_15px_10px_rgba(0,0,0,0.5)]">
          <img class="rotate-[-36deg]" src="/assets/images/hero-bg-element.png" alt="hero" />
        </div>
        <div class="absolute top-[0.5rem] right-[4.21rem] h-36 w-36 drop-shadow-[15px_15px_10px_rgba(0,0,0,0.5)]">
          <img class="rotate-[-36deg]" src="/assets/images/hero-bg-element.png" alt="hero" />
        </div>
        <div class="absolute top-[41rem] left-[11.42rem] h-36 w-36 drop-shadow-[15px_15px_10px_rgba(0,0,0,0.5)]">
          <img class="rotate-[27deg]" src="/assets/images/hero-bg-element.png" alt="hero" />
        </div>
        <div class="absolute top-[41.19rem] right-[11.53rem] h-36 w-36 drop-shadow-[15px_15px_10px_rgba(0,0,0,0.5)]">
          <img class="rotate-[57deg]" src="/assets/images/hero-bg-element.png" alt="hero" />
        </div>
        <div class="absolute top-[11.19rem] left-[7.25rem]">
          <span class="[text-shadow:3px_4px_4px_rgba(36,123,123,0.40)] text-[#4ABCBC] text-[4.375rem]">Ваше здоров’я</span>
        </div>
        <div class="absolute top-[26.69rem] left-[7.25rem] max-w-[43.56rem] text-pretty">
          <span class="[text-shadow:0px_4px_4px_rgba(0,0,0,0.25)] italic font-medium text-[#444] leading-[1.52419rem] text-5">
            Клініка VitaSens - коли все в одному місці і без черг.
            Аналізи, УЗД діагностика, консультація лікарів,
            а також - спеціально розроблені чек-апи для усіх
            систем організму.
          </span>
        </div>
        <div class="absolute flex top-[17.5rem] left-[11.75rem] ">
          <span class="branding-letter">V</span>
          <span class="branding-letter">i</span>
          <span class="branding-letter">t</span>
          <span class="branding-letter">a</span>
          <span class="branding-letter">S</span>
          <span class="branding-letter">e</span>
          <span class="branding-letter">n</span>
          <span class="branding-letter">s</span>
        </div>
        <div class="absolute top-[34.75rem] left-[7.25rem]">
          <ActionButton text="Консультація" />
        </div>
      </div>
      <div class="absolute top-24 right-0 flex shadow-[8.7px_8.7px_4px_0px_rgba(0,0,0,0.35)] overflow-hidden rounded-l-[5rem] 2xl:rounded-r-[5rem] w-[37.68rem] h-[36.87rem]">
        <img class="object-cover w-full" src="/assets/images/ceo.png" alt="ceo" />
      </div>
    </div>
  )
}

import Logo from '@/assets/images/logo-high-res.jpeg';

export default () => {
  return (
    <div class='select-none text-tiffany'>
      <div class='flex items-center gap-4'>
        <div class='h-[2.5rem] w-[2.5rem]'>
          <img class='object-cover' src={Logo.src} alt='Logo' />
        </div>
        <div class='text-2xl leading-normal'>VitaSens</div>
      </div>
      <span class='pt-1 text-[0.8125rem] font-medium xl:text-[1rem]'>
        клiніка Доктора Саморукової
      </span>
    </div>
  );
};

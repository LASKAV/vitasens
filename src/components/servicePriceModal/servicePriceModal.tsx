import Logo from '@/components/logo/logo';

type ServicePriceModalProps = {
  isOpen: boolean;
  onClose?: () => void;
};

let containerRef: HTMLDivElement;

export default (props: ServicePriceModalProps) => {
  return (
    <>
      {props.isOpen && (
        <>
          <div
            ref={containerRef}
            class='fixed left-0 top-0 z-[10000] flex h-full w-full items-center justify-center bg-vs-gray/40 px-5 backdrop-blur-md'
          >
            <div class='flex h-[90%] flex-col overflow-y-auto bg-white px-2 py-6 lg:h-[50rem] lg:w-[50rem] lg:px-12'>
              <div class='flex w-full items-end justify-between pb-8'>
                <div class='bg-gradient-to-b from-tiffany-darkest to-tiffany bg-clip-text text-[2rem] font-bold leading-[4rem] text-transparent lg:text-[4rem]'>
                  ПОСЛУГИ
                </div>
                <div class='hidden lg:block'>
                  <Logo />
                </div>
              </div>
              <div class='flex w-full items-center justify-between bg-gradient-to-r from-tiffany-darkest via-tiffany to-white px-4 py-2 font-bold'>
                <div class='text-white'>ПОСЛУГА</div>
                <div class='text-tiffany-dark'>ВАРТІСТЬ</div>
              </div>
              <div class='flex w-full flex-col'>
                <div class='flex w-full items-center justify-between px-6'>
                  <div>
                    Ехокардіографія ( УЗД серця) зі скринінгом ЩЗ та сонних
                    артерій
                  </div>
                  <div class='flex min-w-[9rem] items-center justify-end'>
                    <div class='px-3'>1800 ГРН</div>
                    <button class='text-[3rem]'>+</button>
                  </div>
                </div>
                <hr class='h-0.5 border-t-0 bg-tiffany-dark' />
                <div class='flex w-full items-center justify-between px-6'>
                  <div>ЕКГ з розшифровкою</div>
                  <div class='flex w-[9rem] items-center justify-end'>
                    <div class='px-3'>1800 ГРН</div>
                    <button class='text-[3rem]'>+</button>
                  </div>
                </div>
                <hr class='h-0.5 border-t-0 bg-tiffany-dark' />
              </div>
            </div>
          </div>
        </>
      )}
      ;
    </>
  );
};

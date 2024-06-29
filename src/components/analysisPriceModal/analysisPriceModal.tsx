import LogoHighRes from '@/assets/images/logo-high-res.jpeg';
import type { AnalysisSuperCategory } from '@/types/AnalysisSuperCategory.ts';

type AnalysisPriceModalProps = {
  isOpen: boolean;
  superCategories: AnalysisSuperCategory[];
};

let containerRef: HTMLDivElement;

export default (props: AnalysisPriceModalProps) => {
  return (
    <>
      {props.isOpen && (
        <>
          <div
            ref={containerRef}
            class='fixed left-0 top-0 z-[10000] flex h-full w-full items-center justify-center bg-vs-gray/40 px-5 backdrop-blur-md'
          >
            <div class='flex h-[90%] w-full flex-col overflow-y-auto bg-white px-2 py-6 lg:w-[50rem] lg:px-6'>
              <div class='flex w-full items-center justify-between pb-8'>
                <div class='bg-gradient-to-b from-tiffany-dark to-tiffany bg-clip-text text-[1.5rem] font-bold italic leading-[2rem] text-transparent lg:text-[3rem] lg:leading-[3rem]'>
                  &nbsp;ВАРТІСТЬ
                  <br />
                  &nbsp;ЛАБОРАТОРНИХ
                  <br />
                  &nbsp;ДОСЛІДЖЕНЬ
                </div>
                <img
                  class='hidden h-[8rem] w-[8rem] rounded-[1.5rem] lg:block'
                  src={LogoHighRes.src}
                  alt=''
                />
              </div>

              <div class='flex w-full items-center justify-between rounded-[1rem] bg-gradient-to-r from-tiffany-dark to-[#DAF5F6] py-2 text-center text-[0.5rem] font-bold leading-4 lg:text-[0.75rem]'>
                <div class='grow text-white'>№</div>
                <div class='grow-[2] text-white'>
                  КОЛІР
                  <br />
                  ПРОБІРОК
                </div>
                <div class='grow-[3] text-white'>ДОСЛІДЖЕННЯ</div>
                <div class='grow-[2] text-white'>
                  ТЕРМІН
                  <br />
                  ВИКОНАННЯ
                  <br />
                  (ДН.)
                </div>
                <div class='grow text-tiffany-dark'>
                  ЦІНА
                  <br />
                  (ГРН.)
                </div>
              </div>
              <div class='flex w-full flex-col py-4'>
                <div class='w-full rounded-[1rem] border border-tiffany-dark py-2 text-center text-[1rem] font-bold italic text-tiffany-dark lg:pl-[7.5rem] lg:text-left lg:text-[1.25rem]'>
                  ГЕМАТОЛОГІЧНІ ДОСЛІДЖЕННЯ
                </div>
                <div class='w-full rounded-[1rem] py-2 text-center text-[1rem] font-extrabold text-tiffany-dark lg:pl-[7.5rem] lg:text-left lg:text-[1.25rem]'>
                  Клінічний аналіз крові
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

import LogoHighRes from '@/assets/images/logo-high-res.jpeg';
import CloseModal from '@/assets/images/close-modal-icon.svg';
import type { AnalysisSuperCategory } from '@/types/AnalysisSuperCategory';
import type { Analysis } from '@/types/Analysis';
import { createEffect, For, Show } from 'solid-js';
import type { AnalysisSubCategory } from '@/types/AnalysisSubCategory';
import { ServiceType } from '@/enums/serviceType.enum.ts';

type AnalysisPriceModalProps = {
  isOpen: boolean;
  onClose: () => void;
  superCategories: AnalysisSuperCategory[];
  action: (id: number, title: string, type: ServiceType) => void;
};

let containerRef: HTMLDivElement;

export default (props: AnalysisPriceModalProps) => {
  const handleOutsideClick = (event: MouseEvent) => {
    if (event?.target === containerRef) {
      props.onClose();
    }
  };

  createEffect(() => {
    if (props.isOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('click', handleOutsideClick);
    } else {
      document.body.style.overflow = '';
      document.removeEventListener('click', handleOutsideClick);
    }
  });

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
                <div
                  onClick={props.onClose}
                  class='flex justify-end self-center lg:hidden'
                >
                  <img
                    class='hover:cursor-pointer'
                    src={CloseModal.src}
                    alt=''
                  />
                </div>
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
                <For each={props.superCategories}>
                  {(superCategory: AnalysisSuperCategory) => (
                    <>
                      <div class='mt-[1.5rem] w-full rounded-[1rem] border border-tiffany-dark py-2 text-center text-[1rem] font-bold italic text-tiffany-dark lg:pl-[7.5rem] lg:text-left lg:text-[1.25rem]'>
                        {superCategory.Title}
                      </div>
                      <For each={superCategory.Analyses}>
                        {(analyse: Analysis, analyseIndex) => (
                          <>
                            <div
                              onClick={() => {
                                props.action(
                                  analyse.id,
                                  analyse.AnalysisTitle,
                                  ServiceType.Analysis
                                );
                              }}
                              class='grid-cols-analyse grid w-full cursor-pointer justify-between gap-1 py-6 text-center text-[0.5rem] font-bold leading-4 text-tiffany-dark lg:text-[1rem]'
                            >
                              <div class=''>{analyse.AnalysisCode}</div>
                              <div class=''>
                                {analyse.AnalysisTestTubeColor}
                              </div>
                              <div class='text-left text-[0.75rem] font-normal lg:text-[1rem]'>
                                {analyse.AnalysisTitle}
                              </div>
                              <div class='text-[0.75rem] lg:text-[1rem]'>
                                {analyse.AnalysisEtaDays}
                              </div>
                              <div class='text-[0.75rem] lg:text-[1rem]'>
                                {analyse.AnalysisPrice}
                              </div>
                            </div>
                            <Show
                              when={
                                superCategory.AnalysisSubCategories.length >
                                  0 ||
                                analyseIndex() <
                                  superCategory.Analyses.length - 1
                              }
                            >
                              <hr class='h-0.5 border-t-0 bg-tiffany-dark' />
                            </Show>
                          </>
                        )}
                      </For>
                      <For each={superCategory.AnalysisSubCategories}>
                        {(subCategory: AnalysisSubCategory, subCatIndex) => (
                          <>
                            <div class='w-full rounded-[1rem] py-6 text-center text-[1rem] font-extrabold text-tiffany-dark lg:pl-[7.5rem] lg:text-left lg:text-[1.25rem]'>
                              {subCategory.Title}
                            </div>
                            <For each={subCategory.Analyses}>
                              {(analysis: Analysis, analysisIndex) => (
                                <>
                                  <div
                                    onClick={() => {
                                      props.action(
                                        analysis.id,
                                        analysis.AnalysisTitle,
                                        ServiceType.Analysis
                                      );
                                    }}
                                    class='grid-cols-analyse grid w-full cursor-pointer justify-between gap-1 py-6 text-center text-[0.5rem] font-bold leading-4 text-tiffany-dark lg:text-[1rem]'
                                  >
                                    <div class=''>{analysis.AnalysisCode}</div>
                                    <div class=''>
                                      {analysis.AnalysisTestTubeColor}
                                    </div>
                                    <div class='text-left text-[0.75rem] font-normal lg:text-[1rem]'>
                                      {analysis.AnalysisTitle}
                                    </div>
                                    <div class='text-[0.75rem] lg:text-[1rem]'>
                                      {analysis.AnalysisEtaDays}
                                    </div>
                                    <div class='text-[0.75rem] lg:text-[1rem]'>
                                      {analysis.AnalysisPrice}
                                    </div>
                                  </div>
                                  <Show
                                    when={
                                      subCatIndex() <
                                        superCategory.AnalysisSubCategories
                                          .length -
                                          1 ||
                                      analysisIndex() <
                                        subCategory.Analyses.length - 1
                                    }
                                  >
                                    <hr class='h-0.5 border-t-0 bg-tiffany-dark' />
                                  </Show>
                                </>
                              )}
                            </For>
                          </>
                        )}
                      </For>
                    </>
                  )}
                </For>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

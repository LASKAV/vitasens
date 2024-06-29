import type { Analysis } from '@/types/Analysis.ts';

export type AnalysisSubCategory = {
  id: number;
  Title: string;
  AnalysisSubCategories: AnalysisSubCategory[];
  Analyses: Analysis[];
};

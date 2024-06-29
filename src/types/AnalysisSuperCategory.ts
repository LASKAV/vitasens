import type { Analysis } from '@/types/Analysis';
import type { AnalysisSubCategory } from '@/types/AnalysisSubCategory';

export type AnalysisSuperCategory = {
  id: number;
  Title: string;
  AnalysisSubCategories: AnalysisSubCategory[];
  Analyses: Analysis[];
};

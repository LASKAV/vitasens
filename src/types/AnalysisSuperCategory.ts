import type { Analysis } from '@/types/Analysis.ts';

export type AnalysisSuperCategory = {
  id: number;
  Title: string;
  Analyses: Analysis[];
};

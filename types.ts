export type CategoryType = 'cours' | 'exercices' | 'controles' | 'efm';

export interface ModuleData {
  id: string;
  code: string;
  title: string;
  year: 1 | 2;
  counts: {
    cours: number;
    exercices: number;
    controles?: number;
    efm?: number;
  };
}

export interface ResourceItem {
  id: string;
  title: string;
  type: 'pdf' | 'doc' | 'zip';
  date: string;
  size: string;
  url?: string;
}

export interface YearConfig {
  id: 1 | 2;
  title: string;
  color: string;
  description: string;
  icon: React.ComponentType<any>;
}

export interface CustomResource {
  title: string;
  url: string;
  size?: string;
  date?: string;
}
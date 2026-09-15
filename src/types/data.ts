export type SourceType = 'pltr_earnings' | 'client_earnings' | 'aipcon' | 'press';
export type Confidence = 'high' | 'med' | 'low';
export type Unit = 'count' | 'usd' | 'percent';

export interface DataPoint {
  date: string;
  value: number;
  sourceType: SourceType;
  sourceRef: string;
  url?: string;
  confidence: Confidence;
}

export interface Series {
  id: string;
  industryId: string;
  metric: string;
  unit: Unit | string;
  label: string;
  insufficientForTrend: boolean;
  pointCount: number;
  note?: string;
  points: DataPoint[];
}

export interface Industry {
  id: string;
  name: string;
  stage: string | null;
  stageNote?: string;
  stageSource?: string;
  priority: number;
  flagshipLogos?: string[];
}

export interface IndustriesFile {
  asOf: string;
  disclaimer: string;
  industries: Industry[];
}

export interface SeriesFile {
  asOf: string;
  disclaimer: string;
  series: Series[];
}

export interface ChartPointMeta {
  seriesId: string;
  label: string;
  industryId: string;
  industryName: string;
  unit: string;
  sourceType: SourceType;
  sourceRef: string;
  confidence: Confidence;
  url?: string;
  value: number;
  date: string;
}

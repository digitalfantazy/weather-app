export interface BarChartProps {
  data: {
    labels: string[];
    temperatures: number[];
  };
  mode?: 'bar' | 'histogram';
}

export interface HistogramData {
  labels: string[];
  counts: number[];
}

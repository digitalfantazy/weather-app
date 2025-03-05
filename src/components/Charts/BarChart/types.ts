export interface BarChartProps {
  data: {
    labels: string[];
    temperatures: number[];
  };
  mode?: 'bar' | 'histogram';
}

export interface LineChartProps {
  data: {
    labels: string[];
    temperatures: number[];
  };
  mode?: 'line' | 'bar';
}

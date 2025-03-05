import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';

import { BarChartProps } from './types';
import { getChartData, getChartOptions } from './options';
import { countTempRange } from '../../shared/helpers/countTempRange';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart: React.FC<BarChartProps> = ({ data, mode = 'bar' }) => {
  const [chartData, setChartData] = useState<{ labels: string[]; values: number[] }>({
    labels: [],
    values: [],
  });

  const chartOptions = getChartOptions(mode);

  useEffect(() => {
    if (data) {
      if (mode === 'histogram') {
        const histogram = countTempRange(data.temperatures, 1);
        setChartData({ labels: histogram.labels, values: histogram.counts });
      } else {
        setChartData({ labels: data.labels, values: data.temperatures });
      }
    }
  }, [data, mode]);

  return <Bar options={chartOptions} data={getChartData(chartData, mode)} />;
};

export default BarChart;

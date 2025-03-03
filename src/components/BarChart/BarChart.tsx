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
import { BarChartProps, HistogramData } from './types';
import { getChartData, getChartOptions } from './options';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// Функция для подсчета диапазонов
const createHistogram = (temperatures: number[], binSize: number) => {
  const minTemp = Math.min(...temperatures);
  const maxTemp = Math.max(...temperatures);

  const labels: string[] = [];
  const counts: number[] = [];

  for (let i = minTemp; i < maxTemp; i += binSize) {
    const rangeStart = i;
    const rangeEnd = i + binSize;
    labels.push(`${rangeStart.toFixed(1)} - ${rangeEnd.toFixed(1)}°C`);

    const count = temperatures.filter((temp) => temp >= rangeStart && temp < rangeEnd).length;
    counts.push(count);
  }

  return { labels, counts };
};

const BarChart: React.FC<BarChartProps> = ({ data, mode = 'bar' }) => {
  const [chartData, setChartData] = useState<{ labels: string[]; values: number[] }>({
    labels: [],
    values: [],
  });

  const chartOptions = getChartOptions(mode);

  useEffect(() => {
    if (data) {
      if (mode === 'histogram') {
        const histogram = createHistogram(data.temperatures, 2);
        setChartData({ labels: histogram.labels, values: histogram.counts });
      } else {
        setChartData({ labels: data.labels, values: data.temperatures });
      }
    }
  }, [data, mode]);

  return <Bar options={chartOptions} data={getChartData(chartData, mode)} />;
};

export default BarChart;

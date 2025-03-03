import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { getChartData, getChartOptions } from './options';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface MovingAverageChartProps {
  data: {
    labels: string[];
    temperatures: number[];
  };
}

const MovingAverageChart: React.FC<MovingAverageChartProps> = ({ data }) => {
  // Функция для расчета скользящей средней
  const calculateMovingAverage = (data: number[], windowSize: number) => {
    return data.map((_, index) => {
      const start = Math.max(0, index - windowSize + 1);
      const end = index + 1;
      const subset = data.slice(start, end);
      const average = subset.reduce((a, b) => a + b, 0) / subset.length;
      return average;
    });
  };

  const movingAverage = calculateMovingAverage(data.temperatures, 5);

  const chartOptions = getChartOptions();
  const chartData = getChartData(data.labels, data.temperatures, movingAverage);

  return <Line options={chartOptions} data={chartData} />;
};

export default MovingAverageChart;

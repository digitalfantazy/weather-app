import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';
import { getChartData, getChartOptions } from './options';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface TemperatureHumidityChartProps {
  data: {
    labels: string[];
    temperatures: number[];
    humidities: number[];
  };
  mode: 'line' | 'bar';
}

const TemperatureHumidityChart: React.FC<TemperatureHumidityChartProps> = ({
  data,
  mode = 'line',
}) => {
  const chartOptions = getChartOptions();
  const chartData = getChartData(data.labels, data.temperatures, data.humidities);

  return mode === 'line' ? (
    <Line options={chartOptions} data={chartData} />
  ) : (
    <Bar options={chartOptions} data={chartData} />
  );
};

export default TemperatureHumidityChart;

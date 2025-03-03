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

interface TemperatureHumidityChartProps {
  data: {
    labels: string[];
    temperatures: number[];
    humidities: number[];
  };
}

const TemperatureHumidityChart: React.FC<TemperatureHumidityChartProps> = ({ data }) => {
  const chartOprions = getChartOptions();
  const chartData = getChartData(data.labels, data.temperatures, data.humidities);

  return <Line options={chartOprions} data={chartData} />;
};

export default TemperatureHumidityChart;

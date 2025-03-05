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
import { LineChartProps } from './types';
import { useTheme } from '../../../context/ThemeContext';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LineChart: React.FC<LineChartProps> = ({ data }) => {
  const { theme } = useTheme();

  const chartOptions = getChartOptions(theme);
  const chartData = getChartData(data.labels, data.temperatures, theme);

  return <Line options={chartOptions} data={chartData} />;
};

export default LineChart;

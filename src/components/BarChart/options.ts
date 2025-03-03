import { HistogramData } from './types';

export const getChartOptions = (mode: 'bar' | 'histogram') => ({
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: mode === 'histogram' ? 'Распределение температуры за период' : 'Температура по времени',
      font: {
        size: 18,
        family: 'Manrope, sans-serif',
        weight: 'bold' as const,
      },
      color: '#333',
      padding: {
        top: 10,
        bottom: 20,
      },
    },
  },
  scales: {
    x: {
      title: {
        display: true,
        text: mode === 'histogram' ? 'Диапазон температур (°C)' : 'Время',
        font: {
          size: 14,
          family: 'Manrope, sans-serif',
          weight: 'bold' as const,
        },
        color: '#555',
      },
      ticks: {
        font: {
          size: 12,
          family: 'Manrope, sans-serif',
        },
        color: '#666',
      },
      grid: {
        color: '#eee',
        lineWidth: 1,
      },
      border: {
        color: '#ccc',
        width: 1,
      },
    },
    y: {
      title: {
        display: true,
        text: mode === 'histogram' ? 'Количество значений' : 'Температура (°C)',
        font: {
          size: 14,
          family: 'Manrope, sans-serif',
          weight: 'bold' as const,
        },
        color: '#555',
      },
      ticks: {
        font: {
          size: 12,
          family: 'Manrope, sans-serif',
        },
        color: '#666',
      },
      border: {
        color: '#ccc',
        width: 1,
      },
    },
  },
});

export const getChartData = (
  { labels, values }: { labels: string[]; values: number[] },
  mode: 'bar' | 'histogram'
) => ({
  labels: labels,
  datasets: [
    {
      label: mode === 'histogram' ? 'Количество значений' : 'Температура (°C)',
      data: values,
      backgroundColor: 'rgba(75, 192, 192, 0.5)',
      barPercentage: 0.5,
    },
  ],
});

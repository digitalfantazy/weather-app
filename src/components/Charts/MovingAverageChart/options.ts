import { formatDate } from '../../../shared/helpers/formatDate';

export const getChartOptions = (theme: 'light' | 'dark') => {
  const isDark = theme === 'dark';

  return {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          font: {
            size: 12,
            family: 'Manrope, sans-serif',
            weight: 'bold' as const,
          },
          color: isDark ? '#fff' : '#333',
          padding: 15,
          usePointStyle: true,
          pointStyle: 'circle' as const,
        },
      },
      title: {
        display: true,
        text: 'График температуры со скользящей средней',
        font: {
          size: 16,
          family: 'Manrope, sans-serif',
          weight: 'bold' as const,
        },
        color: isDark ? '#fff' : '#222',
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          font: {
            size: 14,
            family: 'Manrope, sans-serif',
            weight: 'bold' as const,
          },
          color: isDark ? '#ddd' : '#444',
        },
        ticks: {
          font: {
            size: 12,
            family: 'Manrope, sans-serif',
            weight: 'normal' as const,
          },
          color: isDark ? '#bbb' : '#666',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Температура (°C)',
          font: {
            size: 14,
            family: 'Manrope, sans-serif',
            weight: 'bold' as const,
          },
          color: isDark ? '#ddd' : '#444',
        },
        ticks: {
          font: {
            size: 12,
            family: 'Manrope, sans-serif',
            weight: 'normal' as const,
          },
          color: isDark ? '#bbb' : '#666',
        },
      },
    },
  };
};

export const getChartData = (
  labels: string[],
  temperatures: number[],
  movingAverage: number[],
  theme: 'light' | 'dark'
) => {
  const formattedLabels = formatDate(labels);
  const isDark = theme === 'dark';

  return {
    labels: formattedLabels,
    datasets: [
      {
        label: 'Температура (°C)',
        data: temperatures,
        borderColor: isDark ? 'rgb(255, 99, 132)' : 'rgb(255, 99, 132)',
        backgroundColor: isDark ? 'rgba(255, 99, 132, 0.5)' : 'rgba(255, 99, 132, 0.5)',
        tension: 0.5,
      },
      {
        label: 'Скользящая средняя (°C)',
        data: movingAverage,
        borderColor: isDark ? 'rgb(75, 192, 192)' : 'rgb(75, 192, 192)',
        backgroundColor: isDark ? 'rgba(75, 192, 192, 0.5)' : 'rgba(75, 192, 192, 0.5)',
        tension: 0.7,
        pointRadius: 0,
      },
    ],
  };
};

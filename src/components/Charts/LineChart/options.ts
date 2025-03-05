import { formatDate } from '../../../shared/helpers/formatDate';

export const getChartOptions = (theme: 'light' | 'dark') => {
  const isDark = theme === 'dark';

  return {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: 'Изменения температуры с течением времени',
        font: {
          size: 18,
          family: 'Manrope, sans-serif',
          weight: 'bold' as const,
        },
        color: isDark ? '#ffffff' : '#333',
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
        },
        ticks: {
          font: {
            size: 12,
            family: 'Manrope, sans-serif',
            weight: 'normal' as const,
          },
          color: isDark ? '#cccccc' : '#666',
        },
        grid: {
          color: isDark ? '#424242' : '#e0e0e0',
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
          color: isDark ? '#ffffff' : '#555',
        },
        ticks: {
          font: {
            size: 12,
            family: 'Manrope, sans-serif',
          },
          color: isDark ? '#cccccc' : '#666',
        },
        grid: {
          color: isDark ? '#424242' : '#e0e0e0',
        },
      },
    },
  };
};

export const getChartData = (labels: string[], temperatures: number[], theme: 'light' | 'dark') => {
  const formattedLabels = formatDate(labels);
  const isDark = theme === 'dark';

  return {
    labels: formattedLabels,
    datasets: [
      {
        label: 'Температура (°C)',
        data: temperatures,
        borderColor: isDark ? 'rgb(255, 159, 64)' : 'rgb(255, 99, 132)',
        backgroundColor: isDark ? 'rgba(255, 159, 64, 0.5)' : 'rgba(255, 99, 132, 0.5)',
        tension: 0.5,
      },
    ],
  };
};

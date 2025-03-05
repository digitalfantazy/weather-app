import { formatDate } from '../../../shared/helpers/formatDate';

export const getChartOptions = (theme: 'light' | 'dark') => {
  const isDark = theme === 'dark';
  return {
    responsive: true,
    interaction: {
      mode: 'index' as const,
      intersect: false,
    },
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          font: {
            size: 12,
            family: 'Manrope, sans-serif',
            weight: 'bold' as const,
          },
          color: isDark ? '#fff' : '#666',
          padding: 15,
        },
      },
      title: {
        display: true,
        text: 'Температура и влажность',
        font: {
          size: 16,
          family: 'Manrope, sans-serif',
          weight: 'bold' as const,
        },
        color: isDark ? '#fff' : '#666',
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
        type: 'linear' as const,
        display: true,

        position: 'left' as const,
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
          color: isDark ? '#ddd' : '#666',
        },
      },
      y1: {
        type: 'linear' as const,
        display: true,
        position: 'right' as const,
        title: {
          display: true,
          text: 'Влажность (%)',
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
        grid: {
          drawOnChartArea: false,
        },
      },
    },
  };
};

export const getChartData = (
  labels: string[],
  temperatures: number[],
  humidities: number[],
  theme: 'light' | 'dark'
) => {
  const isDark = theme === 'dark';
  const formattedLabels = formatDate(labels);
  return {
    labels: formattedLabels,
    datasets: [
      {
        label: 'Температура (°C)',
        data: temperatures,
        borderColor: isDark ? 'rgb(99, 255, 125)' : 'rgb(255, 99, 132)',
        backgroundColor: isDark ? 'rgb(99, 255, 125, 0.5)' : 'rgba(255, 99, 132, 0.5)',
        yAxisID: 'y',
        tension: 0.5,
      },
      {
        label: 'Влажность (%)',
        data: humidities,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        yAxisID: 'y1',
        tension: 0.5,
      },
    ],
  };
};

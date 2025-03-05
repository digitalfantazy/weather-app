import { formatDate } from '../../shared/helpers/formatDate';

export const getChartOptions = () => ({
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
      },
      ticks: {
        font: {
          size: 12,
          family: 'Manrope, sans-serif',
          weight: 'normal' as const,
        },
        color: '#666',
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
        color: '#555',
      },
      ticks: {
        font: {
          size: 12,
          family: 'Manrope, sans-serif',
        },
        color: '#666',
      },
    },
  },
});

export const getChartData = (labels: string[], temperatures: number[]) => {
  const formattedLabels = formatDate(labels); // Форматируем даты

  return {
    labels: formattedLabels,
    datasets: [
      {
        label: 'Температура (°C)',
        data: temperatures,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        tension: 0.5,
      },
    ],
  };
};

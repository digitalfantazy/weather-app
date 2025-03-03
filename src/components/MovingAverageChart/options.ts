export const getChartOptions = () => ({
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
        color: '#333',
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
      color: '#222',
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
        color: '#444',
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
        color: '#444',
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
  },
});

export const getChartData = (
  labels: string[],
  temperatures: number[],
  movingAverage: number[]
) => ({
  labels: labels,
  datasets: [
    {
      label: 'Температура (°C)',
      data: temperatures,
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      tension: 0.5,
    },
    {
      label: 'Скользящая средняя (°C)',
      data: movingAverage,
      borderColor: 'rgb(75, 192, 192)',
      backgroundColor: 'rgba(75, 192, 192, 0.5)',
      tension: 0.7,
      pointRadius: 0,
    },
  ],
});

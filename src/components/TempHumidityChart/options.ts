export const getChartOptions = () => ({
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
        color: '#333',
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
      color: '#222',
    },
  },
  scales: {
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
      grid: {
        drawOnChartArea: false,
      },
    },
  },
});

export const getChartData = (labels: string[], temperatures: number[], humidities: number[]) => ({
  labels: labels,
  datasets: [
    {
      label: 'Температура (°C)',
      data: temperatures,
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
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
});

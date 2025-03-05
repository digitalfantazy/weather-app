/**Функция для подсчета диапазонов температур */
export const countTempRange = (temperatures: number[], binSize: number) => {
  const minTemp = Math.min(...temperatures);
  const maxTemp = Math.max(...temperatures);

  const labels: string[] = [];
  const counts: number[] = [];

  for (let i = minTemp; i < maxTemp; i += binSize) {
    const rangeStart = i;
    const rangeEnd = i + binSize;
    labels.push(`${rangeStart.toFixed(1)} - ${rangeEnd.toFixed(1)}°C`);

    const count = temperatures.filter((temp) => temp >= rangeStart && temp < rangeEnd).length;
    counts.push(count);
  }

  return { labels, counts };
};

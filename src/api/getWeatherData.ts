import { API_URL } from '../shared/constants/constants';

interface WeatherItem {
  dt_txt: string;
  main: {
    temp: number;
    humidity: number;
    feels_like: number;
  };
}

export interface WeatherData {
  list: WeatherItem[];
}

export interface RecievedWeatherData {
  labels: string[];
  temperatures: number[];
  humidities: number[];
  feelsLike: number[];
}

export const getWeatherData = async (): Promise<RecievedWeatherData> => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`Ошибка HTTP: ${response.status}`);
    }
    const data = await response.json();

    const labels = data.list.map((item: WeatherItem) => item.dt_txt);
    const temperatures = data.list.map((item: WeatherItem) => Math.round(item.main.temp));
    const humidities = data.list.map((item: WeatherItem) => item.main.humidity);
    const feelsLike = data.list.map((item: WeatherItem) => item.main.feels_like);

    return { labels, temperatures, humidities, feelsLike };
  } catch (error) {
    throw new Error(`Ошибка: ${error instanceof Error ? error.message : 'Неизвестная ошибка'}`);
  }
};

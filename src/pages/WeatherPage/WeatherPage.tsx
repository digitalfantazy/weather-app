import React, { useEffect, useState } from 'react';

import './WeatherPage.scss';

import LineChart from '../../components/LineChart/LineChart';
import block from 'bem-cn';
import BarChart from '../../components/BarChart/BarChart';
import MovingAverageChart from '../../components/MovingAverageChart/MovingAverageChart';
import TemperatureHumidityChart from '../../components/TempHumidityChart/TempHumidityChart';

import { getWeatherData, RecievedWeatherData } from '../../api/getWeatherData';
import AppSelect from '../../components/AppSelect/AppSelect';
const b = block('weather');

const WeatherPage: React.FC = () => {
  const [weatherData, setWeatherData] = useState<RecievedWeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const [temperatureChartType, setTemperatureChartType] = useState<'line' | 'bar'>('line');

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const data = await getWeatherData();
        setWeatherData(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        console.error('Ошибка:', error);
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) {
    return <div>Загрузка...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const dataToUse = weatherData;

  return (
    <div className={b()}>
      <div className={b('top')}>
        <h1>Данные о погоде в Москве на 5 дней</h1>
      </div>
      <div className={b('grid')}>
        <div className={b('grid-item')}>
          <AppSelect
            value={temperatureChartType}
            onChange={(value) => setTemperatureChartType(value as 'line' | 'bar')}
            options={[
              { value: 'line', label: 'Линейный' },
              { value: 'bar', label: 'Гистограмма' },
            ]}
          />
          {temperatureChartType === 'line' ? (
            <LineChart
              data={{
                labels: weatherData?.labels || [],
                temperatures: weatherData?.temperatures || [],
              }}
            />
          ) : (
            <BarChart
              data={{
                labels: weatherData?.labels || [],
                temperatures: weatherData?.temperatures || [],
              }}
            />
          )}
        </div>
        <div className={b('grid-item')}>
          <BarChart
            mode="histogram"
            data={{
              labels: dataToUse?.labels || [],
              temperatures: dataToUse?.temperatures || [],
            }}
          />
        </div>
        <div className={b('grid-item')}>
          <MovingAverageChart
            data={{
              labels: dataToUse?.labels || [],
              temperatures: dataToUse?.temperatures || [],
            }}
          />
        </div>
        <div className={b('grid-item')}>
          <TemperatureHumidityChart
            data={{
              labels: dataToUse?.labels || [],
              temperatures: dataToUse?.temperatures || [],
              humidities: dataToUse?.humidities || [],
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default WeatherPage;

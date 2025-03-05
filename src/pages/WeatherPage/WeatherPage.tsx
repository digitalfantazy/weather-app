import React, { useEffect, useState } from 'react';
import block from 'bem-cn';

import AppSelect from '../../components/AppSelect/AppSelect';
import LineChart from '../../components/LineChart/LineChart';
import BarChart from '../../components/BarChart/BarChart';
import MovingAverageChart from '../../components/MovingAverageChart/MovingAverageChart';
import TemperatureHumidityChart from '../../components/TempHumidityChart/TempHumidityChart';
import DateRangePicker from '../../components/DateRangePicker/DateRangePicker';
import { getWeatherData, RecievedWeatherData } from '../../api/getWeatherData';
import './WeatherPage.scss';

const b = block('weather');

const WeatherPage: React.FC = () => {
  const [weatherData, setWeatherData] = useState<RecievedWeatherData | null>(null);
  const [filteredData, setFilteredData] = useState<RecievedWeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const [temperatureChartType, setTemperatureChartType] = useState<'line' | 'bar'>('line');
  const [histogramChartType, setHistogramChartType] = useState<'temp' | 'feelsLike'>('temp');
  const [movingAverageChartType, setMovingAverageChartType] = useState<'line' | 'bar'>('line');

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const data = await getWeatherData();
        setWeatherData(data);
        setLoading(false);
      } catch (error) {
        setError((error as Error).message);
        console.error('Ошибка:', error);
        setLoading(false);
      }
    };

    loadData();
  }, []);

  useEffect(() => {
    if (weatherData) {
      const currentDate = new Date();
      const defaultEndDate = new Date();
      defaultEndDate.setDate(currentDate.getDate() + 5);
      handleDateRangeChange(currentDate, defaultEndDate);
    }
  }, [weatherData]);

  const handleDateRangeChange = (startDate: Date, endDate: Date) => {
    if (weatherData) {
      const filteredLabels = weatherData.labels.filter((label) => {
        const date = new Date(label);
        return date >= startDate && date <= endDate;
      });

      const filteredTemperatures = weatherData.temperatures.filter((_, index) => {
        const date = new Date(weatherData.labels[index]);
        return date >= startDate && date <= endDate;
      });

      const filteredHumidities = weatherData.humidities.filter((_, index) => {
        const date = new Date(weatherData.labels[index]);
        return date >= startDate && date <= endDate;
      });

      const filteredfeelsLike = weatherData.feelsLike.filter((_, index) => {
        const date = new Date(weatherData.labels[index]);
        return date >= startDate && date <= endDate;
      });

      setFilteredData({
        labels: filteredLabels,
        temperatures: filteredTemperatures,
        humidities: filteredHumidities,
        feelsLike: filteredfeelsLike,
      });
    }
  };

  if (loading) {
    return <div>Загрузка...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className={b()}>
      <div className={b('top')}>
        <h1>Данные о погоде в Москве на 5 дней</h1>
        <DateRangePicker onChange={handleDateRangeChange} />
      </div>
      <div className={b('grid')}>
        <div className={b('grid-item')}>
          <AppSelect
            label="Тип графика"
            value={temperatureChartType}
            onChange={(value) => setTemperatureChartType(value as 'line' | 'bar')}
            options={[
              { value: 'line', label: 'Линейный' },
              { value: 'bar', label: 'Столбчатый' },
            ]}
          />
          {temperatureChartType === 'line' ? (
            <LineChart
              mode="line"
              data={{
                labels: filteredData?.labels || [],
                temperatures: filteredData?.temperatures || [],
              }}
            />
          ) : (
            <BarChart
              data={{
                labels: filteredData?.labels || [],
                temperatures: filteredData?.temperatures || [],
              }}
            />
          )}
        </div>
        <div className={b('grid-item')}>
          <AppSelect
            label="Температура"
            value={histogramChartType}
            onChange={(value) => setHistogramChartType(value as 'temp' | 'feelsLike')}
            options={[
              { value: 'temp', label: 'Фактическая' },
              { value: 'feelsLike', label: 'Ощущается как' },
            ]}
          />
          {histogramChartType === 'temp' ? (
            <BarChart
              mode="histogram"
              data={{
                labels: weatherData?.labels || [],
                temperatures: weatherData?.temperatures || [],
              }}
            />
          ) : (
            <BarChart
              mode="histogram"
              data={{
                labels: weatherData?.labels || [],
                temperatures: weatherData?.feelsLike || [],
              }}
            />
          )}
        </div>
        <div className={b('grid-item')}>
          <MovingAverageChart
            data={{
              labels: weatherData?.labels || [],
              temperatures: weatherData?.temperatures || [],
            }}
          />
        </div>
        <div className={b('grid-item')}>
          <AppSelect
            label="Тип графика"
            value={movingAverageChartType}
            onChange={(value) => setMovingAverageChartType(value as 'line' | 'bar')}
            options={[
              { value: 'line', label: 'Линейный' },
              { value: 'bar', label: 'Гистограмма' },
            ]}
          />
          {movingAverageChartType === 'line' ? (
            <TemperatureHumidityChart
              mode="line"
              data={{
                labels: weatherData?.labels || [],
                temperatures: weatherData?.temperatures || [],
                humidities: weatherData?.humidities || [],
              }}
            />
          ) : (
            <TemperatureHumidityChart
              mode="bar"
              data={{
                labels: weatherData?.labels || [],
                temperatures: weatherData?.temperatures || [],
                humidities: weatherData?.humidities || [],
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default WeatherPage;

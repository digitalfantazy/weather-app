import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import './DateRangePicker.scss';

interface DateRangePickerProps {
  onChange: (startDate: Date, endDate: Date) => void;
}

const DateRangePicker: React.FC<DateRangePickerProps> = ({ onChange }) => {
  const currentDate = new Date();
  const defaultEndDate = new Date();
  defaultEndDate.setDate(currentDate.getDate() + 5);

  const [startDate, setStartDate] = useState<Date>(currentDate);
  const [endDate, setEndDate] = useState<Date | null>(defaultEndDate);

  const maxDate = new Date();
  maxDate.setDate(maxDate.getDate() + 5);

  const handleDateChange = (dates: [Date | null, Date | null]) => {
    const [start, end] = dates;
    if (start) {
      setStartDate(start);
    }
    setEndDate(end);
    if (start && end) {
      onChange(start, end); // Передаем выбранные даты в родительский компонент
    }
  };

  return (
    <div>
      <DatePicker
        selected={startDate}
        onChange={handleDateChange}
        startDate={startDate}
        endDate={endDate}
        selectsRange
        minDate={new Date()} // Минимальная дата — сегодня
        maxDate={maxDate} // Максимальная дата — 5 дней вперед
        dateFormat="dd.MM.yyyy"
        placeholderText="Выберите диапазон дат"
      />
    </div>
  );
};

export default DateRangePicker;

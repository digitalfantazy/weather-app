import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DateRangePicker: React.FC<{ onChange: (start: Date, end: Date) => void }> = ({
  onChange,
}) => {
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(new Date());

  return (
    <div>
      <DatePicker
        selected={startDate}
        onChange={(date: Date) => {
          setStartDate(date);
          onChange(date, endDate);
        }}
        selectsStart
        startDate={startDate}
        endDate={endDate}
      />
      <DatePicker
        selected={endDate}
        onChange={(date: Date) => {
          setEndDate(date);
          onChange(startDate, date);
        }}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
      />
    </div>
  );
};

export default DateRangePicker;

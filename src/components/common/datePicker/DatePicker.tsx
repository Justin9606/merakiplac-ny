import React from 'react';
import DatePicker from 'react-native-date-picker';

type CustomDatePickerProps = {
  date: Date;
  onDateChange: (date: Date) => void;
  mode?: 'date' | 'time' | 'datetime';
};

const CustomDatePicker: React.FC<CustomDatePickerProps> = ({
  date,
  onDateChange,
  mode = 'date',
  ...rest
}) => {
  return (
    <DatePicker date={date} onDateChange={onDateChange} mode={mode} {...rest} />
  );
};

export default CustomDatePicker;

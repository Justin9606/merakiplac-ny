import React from 'react';
import DatePicker from 'react-native-date-picker';

type CustomDatePickerProps = {
  date: Date;
  mode?: 'date' | 'time' | 'datetime';
  modal?: boolean;
  open?: boolean;
  onConfirm?: (date: Date) => void;
  onCancel?: () => void;
};

const CustomDatePicker: React.FC<CustomDatePickerProps> = ({
  date,
  mode = 'date',
  modal,
  open,
  onConfirm,
  onCancel,
}) => {
  return (
    <DatePicker
      date={date}
      open={open}
      modal={modal}
      mode={mode}
      onConfirm={onConfirm}
      onCancel={onCancel}
    />
  );
};

export default CustomDatePicker;

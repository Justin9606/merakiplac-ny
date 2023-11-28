import {Platform} from 'react-native';

const formatDateWithDay = (
  dateStr: string,
  isDatePicker: boolean = false,
): string => {
  const date = new Date(dateStr);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const dayOfWeek = daysOfWeek[date.getDay()];

  if (isDatePicker) {
    return `${year}${month}${day}`;
  } else {
    return `${year}.${month}.${day}. (${dayOfWeek})`;
  }
};

const OS = Platform.OS;

//exporting
export {OS, formatDateWithDay};

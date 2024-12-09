import DateEnum from '@/enum/date.enum';
import moment from 'moment';

export const DatetimeFormatting = (date: string) => {
  return moment(date).format(DateEnum['MM-DD-YYYY']);
};

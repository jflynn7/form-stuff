import { format as formatDate } from 'date-fns';

export class TransformationUtils {

  toDate = (date: string, dateFormat: string) => {
    return formatDate(date, dateFormat);
  }

}

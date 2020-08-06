import moment from 'moment';

const formatDate = (date: Date): string => {
  const newDate = new Date(date);

  return moment(newDate.toISOString()).format('DD/MM/YYYY');
};

export default formatDate;

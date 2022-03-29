export const formatDate = (dateTime: string) => {
  const splitDate = dateTime.substring(0, 10).split('-');
  return `${splitDate[1]}/${splitDate[2]}/${splitDate[0]}`;
};

export const getValueColor = (value: number) => (value < 0 ? 'error.main' : 'success.main');

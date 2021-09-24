const formatDate = (date: string): string => {
  const dateFormatted = new Date(date);
  const year = dateFormatted.getFullYear();

  const day = dateFormatted.getDate() > 9 ? dateFormatted.getDate() : `0${dateFormatted.getDate()}`;

  const month = (dateFormatted.getMonth() + 1) ? dateFormatted.getMonth() + 1 : `0${dateFormatted.getMonth()}`;



  return `${day}/${month}/${year}`;
};

export default formatDate;
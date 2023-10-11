const CurrentDate = () => {
  const currentDate = new Date();
  return {
    currentYear: currentDate.getFullYear(),
    currentMonth: currentDate.getMonth(),
    currentDay: currentDate.getDate(),
  };
};

export default CurrentDate;

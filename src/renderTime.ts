import type { RenderText, Time } from './renderTime.type';

const getToday = () => new Date().getTime();

const getTimeInMiliseconds = (time: string): number => new Date(time).getTime();

const getTimeGapFromCreation =
  (currentTime: number) => (createdTime: number | string) => {
    if (typeof createdTime === 'number') return currentTime - createdTime;
    else if (typeof createdTime === 'string') {
      return currentTime - Number(new Date(createdTime));
    }
  };

const getTotalMinutesBetweenGap = (time: number) => time / 1000 / 60;

const checkIfDayPassedFromCreation = (minutes: number) => [
  minutes > 24 * 60,
  minutes,
];

const getTime = (checkDayArr: [boolean, number]) => {
  const [isDayPassed, minutes] = checkDayArr;
  return isDayPassed
    ? { id: 'day', time: minutes / 60 / 24 }
    : { id: 'minute', time: minutes };
};

const calculateHowMuchTimePassed = ({ id, time }: Time) => {
  const currentTime = Math.floor(time);
  const monthDays = getMonthDays();

  // days, months, years
  if (id === 'day') {
    if (currentTime / monthDays > 12) return checkYear(currentTime, monthDays);
    if (currentTime > monthDays) return checkMonth(currentTime, monthDays);
    return currentTime === 1
      ? { dateName: 'day', timePassed: 1 }
      : { dateName: 'day', timePassed: currentTime };
  }

  // minutes
  if (time <= 1) return { dateName: 'minute', timePassed: 1 };
  if (time < 60) return { dateName: 'minute', timePassed: currentTime };

  // hours
  return checkHours(time);
};

const getMonthDays = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const monthDays = new Date(year, month, 0).getDate();
  return monthDays;
};

const checkMonth = (currentTime: number, monthDays: number) => {
  const month = Math.floor(currentTime / monthDays);
  if (month === 1) return { dateName: 'month', timePassed: 1 };
  else return { dateName: 'month', timePassed: month };
};

const checkYear = (currentTime: number, monthDays: number) => {
  const totalMonths = 12;
  const year = Math.floor(currentTime / monthDays / totalMonths);
  if (year === 1) return { dateName: 'year', timePassed: 1 };
  else return { dateName: 'year', timePassed: year };
};

const checkHours = (time: number) => {
  const isHours = Math.floor(time / 60) !== 1;
  const hour = Math.floor(time / 60);
  return isHours
    ? { dateName: 'hour', timePassed: hour }
    : { dateName: 'hour', timePassed: 1 };
};

const getText = ({ dateName, timePassed }: RenderText): string => {
  return `${timePassed} ${timePassed === 1 ? dateName : dateName + 's'} ago`;
};

export {
  getToday,
  getTimeInMiliseconds,
  getTimeGapFromCreation,
  getTotalMinutesBetweenGap,
  checkIfDayPassedFromCreation,
  calculateHowMuchTimePassed,
  getTime,
  getText,
};

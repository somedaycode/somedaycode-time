import pipe from './pipe';
import {
  calculateHowMuchTimePassed,
  checkIfDayPassedFromCreation,
  getText,
  getTime,
  getTimeGapFromCreation,
  getTimeInMiliseconds,
  getToday,
  getTotalMinutesBetweenGap,
} from './renderTime';

const getTimePassed = (created: string | number) =>
  pipe(
    getTimeGapFromCreation(getToday()),
    getTotalMinutesBetweenGap,
    checkIfDayPassedFromCreation,
    getTime,
    calculateHowMuchTimePassed
  )(created);

const getTextFromTimePassed = (created: string | number) =>
  pipe(
    getTimeGapFromCreation(getToday()),
    getTotalMinutesBetweenGap,
    checkIfDayPassedFromCreation,
    getTime,
    calculateHowMuchTimePassed,
    getText
  )(created);

const getDiff = (
  future: string,
  past: string,
  dateType: string = ''
): number | string => {
  if (typeof dateType !== 'string') throw new Error('dateType must be string');
  if (dateType === '') {
    return pipe(getTimeGapFromCreation(getTimeInMiliseconds(future)))(past);
  } else if (dateType === 'minute') {
    return pipe(
      getTimeGapFromCreation(getTimeInMiliseconds(future)),
      getTotalMinutesBetweenGap
    )(past);
  } else if (dateType === 'hour') {
    return (
      pipe(
        getTimeGapFromCreation(getTimeInMiliseconds(future)),
        getTotalMinutesBetweenGap
      )(past) / 60
    );
  } else if (dateType === 'day') {
    return (
      pipe(
        getTimeGapFromCreation(getTimeInMiliseconds(future)),
        getTotalMinutesBetweenGap
      )(past) /
      60 /
      24
    );
  } else throw new Error('somethings wrong, check your parameter');
};

export { getTimePassed, getTextFromTimePassed, getDiff };

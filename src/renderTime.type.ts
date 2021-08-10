export type Time = {
  id: string;
  time: number;
};

export type RenderText = {
  dateName: 'minute' | 'day' | 'hour' | 'month' | 'year';
  timePassed: number;
};

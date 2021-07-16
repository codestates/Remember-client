// Accident
export type AccidentState = {
  data: AccidentData[];
};

export type AccidentSingleData = {
  data: AccidentData;
};

export type AccidentData = {
  id: number;
  title: string;
  casualty: string;
  date: string;
  location: string;
  url: string;
  body: string;
  donationUsage: string;
  miniTitle: string;
};

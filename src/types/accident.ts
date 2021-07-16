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

export enum AccidentActionTypes {
  FETCH_ACCIDENT = "FETCH_ACCIDENT",
  FETCH_ACCIDENT_SUCCESS = "FETCH_ACCIDENT_SUCCESS",
  FETCH_ACCIDENT_ERROR = "FETCH_ACCIDENT_ERROR",
  FETCH_SINGLE_DATA = "FETCH_SINGLE_DATA",
}

interface FetchAccidentAction {
  type: AccidentActionTypes.FETCH_ACCIDENT;
}

interface FetchAccidentSuccessAction {
  type: AccidentActionTypes.FETCH_ACCIDENT_SUCCESS;
  payload: AccidentState;
}

interface FetchAccidentErrorAction {
  type: AccidentActionTypes.FETCH_ACCIDENT_ERROR;
  payload: string;
}

interface FetchSingleData {
  type: AccidentActionTypes.FETCH_SINGLE_DATA;
  payload: AccidentSingleData;
}

export type AccidentAction =
  | FetchAccidentAction
  | FetchAccidentSuccessAction
  | FetchAccidentErrorAction
  | FetchSingleData;

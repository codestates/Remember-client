export const SET_ACCESSTOKEN = "SET_ACCESSTOKEN";

export interface AccessToken {
  type: typeof SET_ACCESSTOKEN;
  payload: string;
}
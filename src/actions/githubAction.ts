import { SET_ACCESSTOKEN } from "./githubActionTypes"

export const setAccessToken = (accessToken:string) => {
  return {
    type: SET_ACCESSTOKEN,
    payload: {
      accessToken
    }
  }
}


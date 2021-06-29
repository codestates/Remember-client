import { SET_ACCESSTOKEN } from "../actions/githubActionTypes";

interface initialStateI {
  accessToken: string;
}

const initialState: initialStateI = {
  accessToken: ""
}

const githubReducer = (
  state: initialStateI = initialState, action:any
  ): initialStateI => {
  switch(action.type) {
    case SET_ACCESSTOKEN:
      return Object.assign({}, state, {
        accessToken: action.accessToken
      })

    default:
      return state;
  }
}

export default githubReducer;
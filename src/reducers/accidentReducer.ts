import {
  AccidentState,
  AccidentAction,
  AccidentActionTypes,
} from "../types/accident";

interface initialStateI {
  loading: boolean;
  error: null | string;
  accident?: AccidentState;
}

const initialState: initialStateI = {
  loading: false,
  error: null,
};

export const accidentReducer = (
  state: initialStateI = initialState,
  action: AccidentAction
): initialStateI => {
  switch (action.type) {
    case AccidentActionTypes.FETCH_ACCIDENT:
      return {
        loading: true,
        error: null,
      };
    case AccidentActionTypes.FETCH_ACCIDENT_SUCCESS:
      return {
        loading: false,
        error: null,
        accident: action.payload,
      };
    case AccidentActionTypes.FETCH_ACCIDENT_ERROR:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

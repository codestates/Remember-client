import {
  AccidentActionTypes,
  AccidentAction,
  AccidentState,
} from "../types/accident";
import { Dispatch } from "redux";
import axios from "axios";

export const fetchAccident =
  () => async (dispatch: Dispatch<AccidentAction>) => {
    try {
      dispatch({ type: AccidentActionTypes.FETCH_ACCIDENT });
      const response = await axios.get<AccidentState>(
        `${process.env.REACT_APP_API_URL}/mainpage`
      );

      setTimeout(() => {
        dispatch({
          type: AccidentActionTypes.FETCH_ACCIDENT_SUCCESS,
          payload: response.data,
        });
      }, 1500);
    } catch (err) {
      dispatch({
        type: AccidentActionTypes.FETCH_ACCIDENT_ERROR,
        payload: "에러입니다",
      });
    }
  };

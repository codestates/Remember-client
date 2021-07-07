import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import ActionCreators from "../action-creators";

export const useActionDispatch = () => {
  const dispatch = useDispatch();
  return bindActionCreators(ActionCreators, dispatch);
};

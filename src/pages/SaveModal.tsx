import { bindActionCreators } from "redux";
import * as notificationCreators from "../action-creators/notificationCreators";
import { useDispatch } from "react-redux";
import "./Modal.css";

interface Props {
  saveClick: boolean;
  setSaveClick: Function;
  userInfoUpdate: Function;
}

const SaveModal = ({ saveClick, setSaveClick, userInfoUpdate }: Props) => {
  const dispatch = useDispatch();
  const { notify } = bindActionCreators(notificationCreators, dispatch);

  return (
    <div className={saveClick ? "show" : "hide"}>
      <div className="modal__overlay"></div>
      <div className="savemodal__content">
        <div className="savemodal__content-body">
          <div>저장하시겠습니까?</div>
        </div>
        <div>
          <button onClick={() => setSaveClick(false)}>취소</button>
          <button
            onClick={() => {
              userInfoUpdate();
              setSaveClick(false);
            }}
          >
            확인
          </button>
        </div>
      </div>
    </div>
  );
};

export default SaveModal;

import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../action-creators/loginCreators";

interface Props {
  auth: any;
  setSignInClick: Function;
  setModalOn: Function;
  notify: Function;
}

const KakaoLogin = ({ auth, setSignInClick, setModalOn, notify }: Props) => {
  const dispatch = useDispatch();
  const { setToken } = bindActionCreators(actionCreators, dispatch);

  const socialLoginHandler = () => {
    toMainPage();
  };

  const toMainPage = (): void => {
    setSignInClick(false);
    setModalOn(false);
    notify("로그인 되었습니다.");
  };

  return (
    <div>
      <div className="google__box">
        <img
          className="social__logo"
          alt="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/320px-Google_%22G%22_Logo.svg.png"
        />
        <div onClick={() => socialLoginHandler()} className="google__login-btn">
          카카오 아이디로 로그인
        </div>
      </div>
    </div>
  );
};

export default KakaoLogin;

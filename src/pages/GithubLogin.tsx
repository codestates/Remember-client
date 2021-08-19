import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../action-creators/loginCreators";
import API from "../utils/api";

interface Props {
  auth: any;
  setSignInClick: Function;
  setModalOn: Function;
  notify: Function;
}

const GithubLogin = ({ auth, setSignInClick, setModalOn, notify }: Props) => {
  const dispatch = useDispatch();
  const { setToken, setOauth } = bindActionCreators(actionCreators, dispatch);

  const socialLoginHandler = (social = "Github") => {
    try {
      auth.login(social).then(async (data: any) => {
        setToken(data.credential.accessToken);
        const email = data.additionalUserInfo.username + "@github.com";
        const name = data.user.displayName;
        setOauth({ email, name, OAuth: true });
        toMainPage();
        await API.post(`/oauth-info`, {
          email,
          name,
          url: "https://image.flaticon.com/icons/png/512/25/25231.png",
        });
      });
    } catch (error) {
      console.log(error);
    }
  };

  const toMainPage = (): void => {
    setSignInClick(false);
    setModalOn(false);
    notify("로그인 되었습니다.");
  };

  return (
    <div className="github__box">
      <img
        className="social__logo-github"
        alt="logo"
        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJ1c2VyLXNlbGVjdDogYXV0bzsiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxjaXJjbGUgcj0iMjU2IiBjeD0iMjU2IiBjeT0iMjU2IiBmaWxsPSIjZmZmZmZmIiBzaGFwZT0iY2lyY2xlIiBzdHlsZT0idXNlci1zZWxlY3Q6IGF1dG87IiB0cmFuc2Zvcm09Im1hdHJpeCgwLjY3LDAsMCwwLjY3LDg0LjQ3OTk5OTk5OTk5OTk5LDg0LjQ3OTk5OTk5OTk5OTk5KSI+PC9jaXJjbGU+PGcgdHJhbnNmb3JtPSJtYXRyaXgoMC43LDAsMCwwLjcsNzYuODAwMDAwMDAwMDAwMDEsNzYuNzk5OTU1Nzk3MTk1NDgpIiBzdHlsZT0idXNlci1zZWxlY3Q6IGF1dG87Ij4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBzdHlsZT0idXNlci1zZWxlY3Q6IGF1dG87Ij4KCTxnIHN0eWxlPSJ1c2VyLXNlbGVjdDogYXV0bzsiPgoJCTxwYXRoIGQ9Ik0yNTUuOTY4LDUuMzI5QzExNC42MjQsNS4zMjksMCwxMjAuNDAxLDAsMjYyLjM1M2MwLDExMy41MzYsNzMuMzQ0LDIwOS44NTYsMTc1LjEwNCwyNDMuODcyICAgIGMxMi44LDIuMzY4LDE3LjQ3Mi01LjU2OCwxNy40NzItMTIuMzg0YzAtNi4xMTItMC4yMjQtMjIuMjcyLTAuMzUyLTQzLjcxMmMtNzEuMiwxNS41Mi04Ni4yNC0zNC40NjQtODYuMjQtMzQuNDY0ICAgIGMtMTEuNjE2LTI5LjY5Ni0yOC40MTYtMzcuNi0yOC40MTYtMzcuNmMtMjMuMjY0LTE1LjkzNiwxLjcyOC0xNS42MTYsMS43MjgtMTUuNjE2YzI1LjY5NiwxLjgyNCwzOS4yLDI2LjQ5NiwzOS4yLDI2LjQ5NiAgICBjMjIuODQ4LDM5LjI2NCw1OS45MzYsMjcuOTM2LDc0LjUyOCwyMS4zNDRjMi4zMDQtMTYuNjA4LDguOTI4LTI3LjkzNiwxNi4yNTYtMzQuMzY4ICAgIGMtNTYuODMyLTYuNDk2LTExNi42MDgtMjguNTQ0LTExNi42MDgtMTI3LjAwOGMwLTI4LjA2NCw5Ljk4NC01MS4wMDgsMjYuMzY4LTY4Ljk5MmMtMi42NTYtNi40OTYtMTEuNDI0LTMyLjY0LDIuNDk2LTY4ICAgIGMwLDAsMjEuNTA0LTYuOTEyLDcwLjQsMjYuMzM2YzIwLjQxNi01LjY5Niw0Mi4zMDQtOC41NDQsNjQuMDk2LTguNjRjMjEuNzI4LDAuMTI4LDQzLjY0OCwyLjk0NCw2NC4wOTYsOC42NzIgICAgYzQ4Ljg2NC0zMy4yNDgsNzAuMzM2LTI2LjMzNiw3MC4zMzYtMjYuMzM2YzEzLjk1MiwzNS4zOTIsNS4xODQsNjEuNTA0LDIuNTYsNjhjMTYuNDE2LDE3Ljk4NCwyNi4zMDQsNDAuOTI4LDI2LjMwNCw2OC45OTIgICAgYzAsOTguNzItNTkuODQsMTIwLjQ0OC0xMTYuODY0LDEyNi44MTZjOS4xODQsNy45MzYsMTcuMzc2LDIzLjYxNiwxNy4zNzYsNDcuNTg0YzAsMzQuMzY4LTAuMzIsNjIuMDgtMC4zMiw3MC40OTYgICAgYzAsNi44OCw0LjYwOCwxNC44OCwxNy42LDEyLjM1MkM0MzguNzIsNDcyLjE0NSw1MTIsMzc1Ljg1Nyw1MTIsMjYyLjM1M0M1MTIsMTIwLjQwMSwzOTcuMzc2LDUuMzI5LDI1NS45NjgsNS4zMjl6IiBmaWxsPSIjMjEyMTIxIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0idXNlci1zZWxlY3Q6IGF1dG87IiBjbGFzcz0iIj48L3BhdGg+Cgk8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBzdHlsZT0idXNlci1zZWxlY3Q6IGF1dG87Ij4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHN0eWxlPSJ1c2VyLXNlbGVjdDogYXV0bzsiPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3R5bGU9InVzZXItc2VsZWN0OiBhdXRvOyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBzdHlsZT0idXNlci1zZWxlY3Q6IGF1dG87Ij4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHN0eWxlPSJ1c2VyLXNlbGVjdDogYXV0bzsiPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3R5bGU9InVzZXItc2VsZWN0OiBhdXRvOyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBzdHlsZT0idXNlci1zZWxlY3Q6IGF1dG87Ij4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHN0eWxlPSJ1c2VyLXNlbGVjdDogYXV0bzsiPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3R5bGU9InVzZXItc2VsZWN0OiBhdXRvOyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBzdHlsZT0idXNlci1zZWxlY3Q6IGF1dG87Ij4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHN0eWxlPSJ1c2VyLXNlbGVjdDogYXV0bzsiPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3R5bGU9InVzZXItc2VsZWN0OiBhdXRvOyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBzdHlsZT0idXNlci1zZWxlY3Q6IGF1dG87Ij4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHN0eWxlPSJ1c2VyLXNlbGVjdDogYXV0bzsiPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3R5bGU9InVzZXItc2VsZWN0OiBhdXRvOyI+CjwvZz4KPC9nPjwvc3ZnPg=="
      />
      <div onClick={() => socialLoginHandler()} className="github__login-btn">
        깃허브 아이디로 로그인
      </div>
    </div>
  );
};

export default GithubLogin;

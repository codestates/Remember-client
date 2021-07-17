import { useState } from "react";
import styled from "styled-components";
import Quiz from "../components/Quiz";

const Ul = styled.ul<{ open: boolean }>`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  div {
    padding: 40px 40px;
    background-color: white;
    align-items: center;
    font-size: 20px;
    font-weight: 600;
    box-shadow: 0 0 3px 0 rgb(0 0 0 / 20%);
    margin-bottom: 30px;
  }

  span {
    margin-top: 5px;
  }

  .hamburger__img {
    width: 23rem;
    background-color: transparent;
    margin-left: 8%;
    position: absolute;
    left: 10%;
    top: 15px;
  }

  li {
    padding: 15px 0 15px 23px;
    cursor: pointer;
    color: #260e04;
    display: flex;
    font-size: 15px;
    font-weight: 500;
  }

  li img {
    margin-right: 22px;
  }

  .hamburger__img-accident {
    width: 20px;
    margin-left: 6px;
    margin-right: 28px;
  }

  .hamburger__img-quiz {
    width: 30px;
  }

  li:hover {
    background-color: #43a047;
    color: white;
    border-radius: 10px;
  }
  button {
    padding: 10px;
    width: 100px;
    border-radius: 20px;
    margin: 0 20px;
    cursor: pointer;
  }
  .left {
    background-color: black;
    color: white;
    border: none;
  }
  .right {
    background-color: gray;
    border: none;
    color: white;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  @media {
    flex-flow: column nowrap;
    background-color: white;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    margin-top: 360px;
    right: -10px;
    height: 60px;
    width: 200px;
    border-radius: 10px;
    transition: transform 0.3s ease-in-out;
    box-shadow: 0 0 3px 0 rgb(0 0 0 / 50%);
  }
`;
interface Props {
  open: boolean;
  setOpen: any;
  auth: any;
}

const OpenNav = ({ open, setOpen }: Props) => {
  const [quizClick, setQuizClick] = useState<boolean>(false);

  return (
    <div>
      <Ul open={open}>
        <li
          onClick={() => {
            setOpen(false);
            setQuizClick(true);
          }}
        >
          <img
            className="hamburger__img-quiz"
            src="data:image/svg+xml;base64,PHN2ZyBpZD0iQ2FwYV8xIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTIgNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHdpZHRoPSI1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGc+PGc+PHBhdGggZD0ibTMyOC45MTQgMjQwLjM3MS0xMi44ODQtNC4wMjd2LTU1LjA5NGMwLTkuNzA0LTcuODk2LTE3LjYtMTcuNjAxLTE3LjZoLTI4LjI5Yy05LjcwNCAwLTE3LjYgNy44OTYtMTcuNiAxNy42djQuMzE4bC0xODUuNDEgNDguNzkyaC00OS41MjljLTkuNzA0IDAtMTcuNiA3Ljg5Ni0xNy42IDE3LjZ2MTAxLjAyYzAgOS43MDQgNy44OTYgMTcuNiAxNy42IDE3LjZoMTAuNjh2OTYuMDI4Yy00LjgxIDIuNjU1LTguMDc3IDcuNzc1LTguMDc3IDEzLjY0N3YxNi4xNjNjMCA4LjU5MiA2Ljk4OSAxNS41ODEgMTUuNTgxIDE1LjU4MWg0OC40ODhjOC41OTIgMCAxNS41ODEtNi45ODkgMTUuNTgxLTE1LjU4MXYtMTYuMTYzYzAtNS44NzUtMy4yNy0xMC45OTctOC4wODQtMTMuNjUxdi00Ny41MzRoMTQuNzNjMy41NTMgMCA2LjYxOC0yLjQ5MyA3LjM0My01Ljk3Mmw2LjUyOC0zMS4zNTUgMTMyLjE2OSAyNy44MjV2NC4wMjFjMCA5LjcwNSA3Ljg5NiAxNy42MDEgMTcuNiAxNy42MDFoMjguMjljOS43MDUgMCAxNy42MDEtNy44OTYgMTcuNjAxLTE3LjYwMXYtNDVsMTIuODg0LTQuMDI2YzExLjYyNy0zLjYzMyAxOS40MzktMTQuMjYgMTkuNDM5LTI2LjQ0MnYtNzEuMzFjLjAwMS0xMi4xODEtNy44MTItMjIuODA3LTE5LjQzOS0yNi40NHptLTI2MS41NyAxMzAuMjA5IDkuNDI2IDEuOTg0djkyLjEwNWgtMzMuNDl2LTk0LjA5aDI0LjA2NHptMTcuNTEgMTI1LjgzOWMwIC4zMi0uMjYxLjU4MS0uNTgxLjU4MWgtNDguNDg5Yy0uMzIgMC0uNTgxLS4yNjEtLjU4MS0uNTgxdi0xNi4xNjNjMC0uMzIuMjYxLS41ODEuNTgxLS41ODFoNDguNDg4Yy4zMiAwIC41ODEuMjYxLjU4MS41ODF2MTYuMTYzem0xNS41NDYtOTIuMzQ5aC04LjYzdi0yOC4zNDhsMTMuOTIzIDIuOTMxem0xOTguMDMgMTIuMTJoLTI4LjI5Yy0xLjQzNCAwLTIuNi0xLjE2Ny0yLjYtMi42MDF2LTE2OC42ODljMC00LjE0My0zLjM1Ny03LjUtNy41LTcuNXMtNy41IDMuMzU3LTcuNSA3LjV2MTQ5LjM0bC0xNjYuNzQ3LTM1LjEwNGMtLjAwNy0uMDAyLS4wMTUtLjAwMy0uMDIyLS4wMDVsLTEwLjE2MS0yLjEzOXYtOS40MjJjMC00LjE0My0zLjM1Ny03LjUtNy41LTcuNXMtNy41IDMuMzU3LTcuNSA3LjV2OC4wMWgtMjQuODMtMTguMThjLTEuNDM0IDAtMi42LTEuMTY2LTIuNi0yLjZ2LTEwMS4wMmMwLTEuNDM0IDEuMTY2LTIuNiAyLjYtMi42aDQzLjAxdjYzLjIxYzAgNC4xNDMgMy4zNTcgNy41IDcuNSA3LjVzNy41LTMuMzU3IDcuNS03LjV2LTY0LjkzMWwxNzYuOTMtNDYuNTZ2OC44MjJjMCA0LjE0MyAzLjM1NyA3LjUgNy41IDcuNXM3LjUtMy4zNTcgNy41LTcuNXYtMjguNjVjMC0xLjQzNCAxLjE2Ni0yLjYgMi42LTIuNmgyOC4yOWMxLjQzNCAwIDIuNjAxIDEuMTY2IDIuNjAxIDIuNnY2MC41MjMuMTU3IDE3MS42NTljLS4wMDEgMS40MzMtMS4xNjggMi42LTIuNjAxIDIuNnptMzQuOTI0LTc4LjA2OGMwIDUuNTg3LTMuNTgyIDEwLjQ2LTguOTE0IDEyLjEyNmwtOC40MDkgMi42Mjh2LTEwMC44MTdsOC40MDkgMi42MjhjNS4zMzIgMS42NjYgOC45MTQgNi41MzkgOC45MTQgMTIuMTI1eiIvPjxwYXRoIGQ9Im0yNjMuNTk3IDMyLjM5NWMtMjAuODQ2IDAtMzcuODA1IDE2Ljk2LTM3LjgwNSAzNy44MDZzMTYuOTU5IDM3LjgwNSAzNy44MDUgMzcuODA1YzcuODQgMCAxNS4xMjktMi40IDIxLjE3NS02LjUwMmw0LjA2MSA0LjA2MWMxLjQ2NSAxLjQ2NCAzLjM4NSAyLjE5NiA1LjMwNCAyLjE5NnMzLjgzOS0uNzMyIDUuMzA0LTIuMTk2YzIuOTI5LTIuOTMgMi45MjktNy42NzggMC0xMC42MDdsLTQuMTYzLTQuMTYzYzMuODY4LTUuOTMgNi4xMjYtMTMuMDAxIDYuMTI2LTIwLjU5My0uMDAyLTIwLjg0OC0xNi45NjItMzcuODA3LTM3LjgwNy0zNy44MDd6bTAgNjAuNjFjLTEyLjU3NCAwLTIyLjgwNS0xMC4yMy0yMi44MDUtMjIuODA1czEwLjIzLTIyLjgwNiAyMi44MDUtMjIuODA2IDIyLjgwNiAxMC4yMyAyMi44MDYgMjIuODA2YzAgMy40MjYtLjc2NCA2LjY3Ni0yLjEyNCA5LjU5NWwtNC4yMjktNC4yMjljLTIuOTMtMi45MjgtNy42NzgtMi45MjgtMTAuNjA3IDAtMi45MjkgMi45My0yLjkyOSA3LjY3OCAwIDEwLjYwN2w0LjM5NCA0LjM5NGMtMy4wODIgMS41NTYtNi41NTkgMi40MzgtMTAuMjQgMi40Mzh6Ii8+PHBhdGggZD0ibTQwOS4xMDQgMTAwLjUwNXYtNjAuNjFjMC00LjE0My0zLjM1Ny03LjUtNy41LTcuNXMtNy41IDMuMzU3LTcuNSA3LjV2NjAuNjFjMCA0LjE0MyAzLjM1NyA3LjUgNy41IDcuNXM3LjUtMy4zNTggNy41LTcuNXoiLz48cGF0aCBkPSJtNDI1LjYzMiAxMDQuMDc4YzEuMzEyIDIuNDIgMy44NDIgMy45MjcgNi41OTQgMy45MjdoNDAuNDM0YzQuMTQzIDAgNy41LTMuMzU3IDcuNS03LjVzLTMuMzU3LTcuNS03LjUtNy41aC0yNi41OTVsMzEuOTM4LTQ5LjAxNmMxLjUwMi0yLjMwNiAxLjYyMS01LjI0OS4zMS03LjY2OC0xLjMxMi0yLjQyLTMuODQyLTMuOTI3LTYuNTk0LTMuOTI3aC0zOC4yNDljLTQuMTQzIDAtNy41IDMuMzU3LTcuNSA3LjVzMy4zNTcgNy41IDcuNSA3LjVoMjQuNDFsLTMxLjkzOSA0OS4wMTZjLTEuNTAyIDIuMzA2LTEuNjIxIDUuMjQ5LS4zMDkgNy42Njh6Ii8+PHBhdGggZD0ibTMyNi42MDIgMzIuMzk1Yy00LjE0MyAwLTcuNSAzLjM1Ny03LjUgNy41djQxLjcwNmMwIDkuMTE4IDQuMzY0IDE2LjUzIDEyLjk3IDIyLjAyOCA0LjUzIDIuODk2IDkuNjQ1IDQuMzY3IDE1LjIwMiA0LjM3NmguMDRjNC43ODYgMCA5LjI3OC0xLjA0IDEzLjM1NC0zLjA5MyAxMi44NTMtNi40NzIgMTUuNTUtMTYuMjcyIDE1LjU1LTIzLjM1NHYtNDEuNjYzYzAtNC4xNDMtMy4zNTctNy41LTcuNS03LjVzLTcuNSAzLjM1Ny03LjUgNy41djQxLjY2M2MwIDIuOTI2LS44MjkgNi43MDEtNy4yOTYgOS45NTgtMS45OSAxLjAwMi00LjE1MSAxLjQ4OS02LjYwNCAxLjQ4OS0uMDA4IDAtLjAxNiAwLS4wMjMgMC0yLjY5MS0uMDA0LTUuMDI4LS42NjMtNy4xNDUtMi4wMTYtNS4wMTktMy4yMDYtNi4wNDctNi4wNzItNi4wNDctOS4zODl2LTQxLjcwNWMtLjAwMS00LjE0My0zLjM1OS03LjUtNy41MDEtNy41eiIvPjxwYXRoIGQ9Im00ODcuMDggMGgtMjY4LjIxYy0xMy43NDEgMC0yNC45MiAxMS4xNzktMjQuOTIgMjQuOTJ2OTAuNTYxYzAgMTMuNzQxIDExLjE3OSAyNC45MiAyNC45MiAyNC45Mmg5Ni4xMWM0LjE0MyAwIDcuNS0zLjM1NyA3LjUtNy41cy0zLjM1Ny03LjUtNy41LTcuNWgtOTYuMTFjLTUuNDcgMC05LjkyLTQuNDUtOS45Mi05Ljkydi05MC41NjFjMC01LjQ3IDQuNDUtOS45MiA5LjkyLTkuOTJoMjY4LjIxYzUuNDcgMCA5LjkyIDQuNDUgOS45MiA5LjkydjkwLjU2MWMwIDUuNDctNC40NSA5LjkyLTkuOTIgOS45MmgtNjMuMThjLTEuOTggMC0zLjg4Ljc4My01LjI4NSAyLjE3OWwtMzcuOTM2IDM3LjY3M3YtMzIuMzUzYzAtNC4xNDMtMy4zNTctNy41LTcuNS03LjVoLTIzLjE5OWMtNC4xNDMgMC03LjUgMy4zNTctNy41IDcuNXMzLjM1NyA3LjUgNy41IDcuNWgxNS42OTl2NDIuODY5YzAgMy4wMjggMS44MjEgNS43NiA0LjYxOCA2LjkyNC45MzEuMzg4IDEuOTEuNTc2IDIuODguNTc2IDEuOTQzIDAgMy44NTQtLjc1NSA1LjI4Ny0yLjE3OWw0OC41MjctNDguMTloNjAuMDg4YzEzLjc0MSAwIDI0LjkyLTExLjE3OSAyNC45Mi0yNC45MnYtOTAuNTZjLjAwMS0xMy43NDEtMTEuMTc4LTI0LjkyLTI0LjkxOS0yNC45MnoiLz48L2c+PC9nPjwvc3ZnPg=="
          ></img>
          <span>퀴즈</span>
        </li>
      </Ul>
      <Quiz setQuizClick={setQuizClick} quizClick={quizClick}></Quiz>
    </div>
  );
};

export default OpenNav;

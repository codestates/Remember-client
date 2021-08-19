import React, { useState, useEffect } from "react";
import "./ServicePay.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import Iamport from "react-iamport";
import { Root } from "../Store";
import { bindActionCreators } from "redux";
import * as notificationCreators from "../action-creators/notificationCreators";
import { useParams } from "react-router";
import { useTypedSelector } from "../hook/useTypedSelector";
import { useActionDispatch } from "../hook/useActionDispatch";
import Spinner from "../pages/Spinner";
import API from "../utils/api";

interface Values {
  mobile: any;
  amount: string | number;
  group: string;
  url: string;
}

interface servicePayParams {
  id: string;
}

const ServicePay: React.FC = () => {
  const params = useParams<servicePayParams>();
  const accidentState = useTypedSelector((state) => state.accident);
  const { fetchSingleData } = useActionDispatch();
  const token: any = useSelector((state: Root) => state.login);
  const dispatch = useDispatch();
  const { notify } = bindActionCreators(notificationCreators, dispatch);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [company, setCompany] = useState<string>("");
  const [values, setValues] = useState<Values>({
    mobile: {
      head: "",
      body: "",
      tail: "",
    },
    amount: "",
    group: "",
    url: "",
  });

  const getUserInfo = async () => {
    if (!token.OAuth.OAuth) {
      await API.get("/mypage", {
        headers: {
          authorization: `Bearer ${token.accessToken}`,
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }).then((res) => {
        const { email, name } = res.data.data.userInfo;
        setName(name);
        setEmail(email);
      });
    } else {
      const { name, email } = token.OAuth;
      setName(name);
      setEmail(email);
    }
  };

  const setPaymentInfo = async () => {
    const data = {
      name: name,
      email: email,
      amount: values.amount,
      title: accidentState.accidentSingle?.data.title,
    };

    if (values.group === "개인") {
      await API.post(`/payment`, data);
    } else if (values.group === "법인") {
      await API.post(`/payment`, { ...data, name: company });
    } else {
      await API.post(`/payment`, { ...data, name: company });
    }
  };

  const sendReceipt = async () => {
    const data = {
      name: name,
      email: email,
      amount: values.amount,
      title: accidentState.accidentSingle?.data.title,
    };

    if (values.group === "개인") {
      await API.post(`/mailreceipt`, data);
    } else if (values.group === "법인") {
      await API.post(`/mailreceipt`, { ...data, name: company });
    } else {
      await API.post(`/mailreceipt`, { ...data, name: company });
    }
  };

  useEffect(() => {
    getUserInfo();
    fetchSingleData(params.id);
  }, []);

  return accidentState.loading ? (
    <Spinner></Spinner>
  ) : (
    <section id="service__pay">
      <form className="service__pay__box">
        <h3 className="service__pay__title">
          후원인 또는 후원단체 정보를 입력해주세요.
        </h3>
        <div className="radio__row">
          <div className="radio__group">
            <div className="radio__group-head">
              <img
                className="radio__group-img1"
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJ1c2VyLXNlbGVjdDogYXV0bzsiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnIHRyYW5zZm9ybT0ibWF0cml4KDEsMCwwLDEsNDUsMCkiIHN0eWxlPSJ1c2VyLXNlbGVjdDogYXV0bzsiPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTMzMy42NzE4NzUgMTIzLjMwODU5NGMwIDMzLjg4NjcxOC0xMi4xNTIzNDQgNjMuMjE4NzUtMzYuMTI1IDg3LjE5NTMxMi0yMy45NzI2NTYgMjMuOTcyNjU2LTUzLjMwODU5NCAzNi4xMjUtODcuMTk1MzEzIDM2LjEyNWgtLjA1ODU5M2MtMzMuODQzNzUtLjAxMTcxOC02My4xNjAxNTctMTIuMTY0MDYyLTg3LjEzMjgxMy0zNi4xMjUtMjMuOTc2NTYyLTIzLjk3NjU2Mi0zNi4xMjUtNTMuMzA4NTk0LTM2LjEyNS04Ny4xOTUzMTIgMC0zMy44NzUgMTIuMTQ4NDM4LTYzLjIxMDkzOCAzNi4xMjUtODcuMTgzNTk0IDIzLjk2MDkzOC0yMy45NjQ4NDQgNTMuMjc3MzQ0LTM2LjExMzI4MTIgODcuMTMyODEzLTM2LjEyNWguMDU4NTkzYzMzLjg3NSAwIDYzLjIxMDkzOCAxMi4xNTIzNDQgODcuMTk1MzEzIDM2LjEyNSAyMy45NzI2NTYgMjMuOTcyNjU2IDM2LjEyNSA1My4zMDg1OTQgMzYuMTI1IDg3LjE4MzU5NHptMCAwIiBmaWxsPSIjZmZiYjg1IiBkYXRhLW9yaWdpbmFsPSIjZmZiYjg1IiBzdHlsZT0idXNlci1zZWxlY3Q6IGF1dG87IiBjbGFzcz0iIj48L3BhdGg+PHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJtNDI3LjE2Nzk2OSA0MjMuOTQ1MzEyYzAgMjYuNzM0Mzc2LTguNTAzOTA3IDQ4LjM3ODkwNy0yNS4yNTM5MDcgNjQuMzIwMzEzLTE2LjU1NDY4NyAxNS43NTM5MDYtMzguNDQ5MjE4IDIzLjczNDM3NS02NS4wNzAzMTIgMjMuNzM0Mzc1aC0yNDYuNTMxMjVjLTI2LjYyMTA5NCAwLTQ4LjUxNTYyNS03Ljk4MDQ2OS02NS4wNTg1OTQtMjMuNzM0Mzc1LTE2Ljc2MTcxOC0xNS45NTMxMjUtMjUuMjUzOTA2LTM3LjU5Mzc1LTI1LjI1MzkwNi02NC4zMjAzMTMgMC0xMC4yODEyNS4zMzk4NDQtMjAuNDUzMTI0IDEuMDE5NTMxLTMwLjIzNDM3NC42OTE0MDctMTAgMi4wODk4NDQtMjAuODgyODEzIDQuMTUyMzQ0LTMyLjM2MzI4MiAyLjA3ODEyNS0xMS41NzQyMTggNC43NS0yMi41MTU2MjUgNy45NDkyMTktMzIuNTE1NjI1IDMuMzIwMzEyLTEwLjM1MTU2MiA3LjgxMjUtMjAuNTYyNSAxMy4zNzEwOTQtMzAuMzQzNzUgNS43NzM0MzctMTAuMTUyMzQzIDEyLjU1NDY4Ny0xOC45OTYwOTMgMjAuMTU2MjUtMjYuMjc3MzQzIDcuOTY4NzUtNy42MjEwOTQgMTcuNzEwOTM3LTEzLjc0MjE4OCAyOC45NzI2NTYtMTguMjAzMTI2IDExLjIyMjY1Ni00LjQzNzUgMjMuNjY0MDYyLTYuNjg3NSAzNi45NzY1NjItNi42ODc1IDUuMjIyNjU2IDAgMTAuMjgxMjUgMi4xMzY3MTkgMjAuMDMxMjUgOC40ODgyODIgNi4xMDE1NjMgMy45ODA0NjggMTMuMTMyODEzIDguNTExNzE4IDIwLjg5NDUzMiAxMy40NzI2NTYgNi43MDMxMjQgNC4yNzM0MzggMTUuNzgxMjUgOC4yODEyNSAyNy4wMDM5MDYgMTEuOTAyMzQ0IDkuODYzMjgxIDMuMTkxNDA2IDE5Ljg3NSA0Ljk3MjY1NiAyOS43NjU2MjUgNS4yODEyNSAxLjA4OTg0My4wMzkwNjIgMi4xNzk2ODcuMDU4NTk0IDMuMjY5NTMxLjA1ODU5NCAxMC45ODQzNzUgMCAyMi4wOTM3NS0xLjgwMDc4MiAzMy4wNDY4NzUtNS4zMzk4NDQgMTEuMjIyNjU2LTMuNjIxMDk0IDIwLjMxMjUtNy42Mjg5MDYgMjcuMDExNzE5LTExLjkwMjM0NCA3Ljg0Mzc1LTUuMDExNzE5IDE0Ljg3NS05LjUzOTA2MiAyMC44ODY3MTgtMTMuNDYwOTM4IDkuNzU3ODEzLTYuMzYzMjgxIDE0LjgwODU5NC04LjUgMjAuMDQyOTY5LTguNSAxMy4zMDA3ODEgMCAyNS43NDIxODggMi4yNSAzNi45NzI2NTcgNi42ODc1IDExLjI2MTcxOCA0LjQ2MDkzOCAyMS4wMDM5MDYgMTAuNTkzNzUgMjguOTY0ODQzIDE4LjIwMzEyNiA3LjYxMzI4MSA3LjI4MTI1IDE0LjM5NDUzMSAxNi4xMjUgMjAuMTY0MDYzIDI2LjI3NzM0MyA1LjU2MjUgOS43ODkwNjMgMTAuMDYyNSAxOS45OTIxODggMTMuMzcxMDk0IDMwLjMzMjAzMSAzLjIwMzEyNCAxMC4wMTE3MTkgNS44ODI4MTIgMjAuOTUzMTI2IDcuOTYwOTM3IDMyLjUzNTE1NyAyLjA1MDc4MSAxMS40OTIxODcgMy40NTMxMjUgMjIuMzc1IDQuMTQwNjI1IDMyLjM0NzY1Ni42OTE0MDYgOS43NSAxLjAzMTI1IDE5LjkyMTg3NSAxLjA0Mjk2OSAzMC4yNDIxODd6bTAgMCIgZmlsbD0iIzc0ZjU3YyIgZGF0YS1vcmlnaW5hbD0iIzZhYTlmZiIgc3R5bGU9InVzZXItc2VsZWN0OiBhdXRvOyIgY2xhc3M9IiI+PC9wYXRoPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTIxMC4zNTE1NjIgMjQ2LjYyODkwNmgtLjA1ODU5M3YtMjQ2LjYyODkwNmguMDU4NTkzYzMzLjg3NSAwIDYzLjIxMDkzOCAxMi4xNTIzNDQgODcuMTk1MzEzIDM2LjEyNSAyMy45NzI2NTYgMjMuOTcyNjU2IDM2LjEyNSA1My4zMDg1OTQgMzYuMTI1IDg3LjE4MzU5NCAwIDMzLjg4NjcxOC0xMi4xNTIzNDQgNjMuMjE4NzUtMzYuMTI1IDg3LjE5NTMxMi0yMy45NzI2NTYgMjMuOTcyNjU2LTUzLjMwODU5NCAzNi4xMjUtODcuMTk1MzEzIDM2LjEyNXptMCAwIiBmaWxsPSIjZjVhODZjIiBkYXRhLW9yaWdpbmFsPSIjZjVhODZjIiBzdHlsZT0idXNlci1zZWxlY3Q6IGF1dG87IiBjbGFzcz0iIj48L3BhdGg+PHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJtNDI3LjE2Nzk2OSA0MjMuOTQ1MzEyYzAgMjYuNzM0Mzc2LTguNTAzOTA3IDQ4LjM3ODkwNy0yNS4yNTM5MDcgNjQuMzIwMzEzLTE2LjU1NDY4NyAxNS43NTM5MDYtMzguNDQ5MjE4IDIzLjczNDM3NS02NS4wNzAzMTIgMjMuNzM0Mzc1aC0xMjYuNTUwNzgxdi0yMjUuNTM1MTU2YzEuMDg5ODQzLjAzOTA2MiAyLjE3OTY4Ny4wNTg1OTQgMy4yNjk1MzEuMDU4NTk0IDEwLjk4NDM3NSAwIDIyLjA5Mzc1LTEuODAwNzgyIDMzLjA0Njg3NS01LjMzOTg0NCAxMS4yMjI2NTYtMy42MjEwOTQgMjAuMzEyNS03LjYyODkwNiAyNy4wMTE3MTktMTEuOTAyMzQ0IDcuODQzNzUtNS4wMTE3MTkgMTQuODc1LTkuNTM5MDYyIDIwLjg4NjcxOC0xMy40NjA5MzggOS43NTc4MTMtNi4zNjMyODEgMTQuODA4NTk0LTguNSAyMC4wNDI5NjktOC41IDEzLjMwMDc4MSAwIDI1Ljc0MjE4OCAyLjI1IDM2Ljk3MjY1NyA2LjY4NzUgMTEuMjYxNzE4IDQuNDYwOTM4IDIxLjAwMzkwNiAxMC41OTM3NSAyOC45NjQ4NDMgMTguMjAzMTI2IDcuNjEzMjgxIDcuMjgxMjUgMTQuMzk0NTMxIDE2LjEyNSAyMC4xNjQwNjMgMjYuMjc3MzQzIDUuNTYyNSA5Ljc4OTA2MyAxMC4wNjI1IDE5Ljk5MjE4OCAxMy4zNzEwOTQgMzAuMzMyMDMxIDMuMjAzMTI0IDEwLjAxMTcxOSA1Ljg4MjgxMiAyMC45NTMxMjYgNy45NjA5MzcgMzIuNTM1MTU3IDIuMDUwNzgxIDExLjQ5MjE4NyAzLjQ1MzEyNSAyMi4zNzUgNC4xNDA2MjUgMzIuMzQ3NjU2LjY5MTQwNiA5Ljc1IDEuMDMxMjUgMTkuOTIxODc1IDEuMDQyOTY5IDMwLjI0MjE4N3ptMCAwIiBmaWxsPSIjMzhkYjc3IiBkYXRhLW9yaWdpbmFsPSIjMjY4MmZmIiBzdHlsZT0idXNlci1zZWxlY3Q6IGF1dG87IiBjbGFzcz0iIj48L3BhdGg+PC9nPjwvc3ZnPg=="
              />
            </div>
            <div className="service__pay__radio">
              <input
                type="radio"
                name="radio"
                onClick={() => {
                  setValues({ ...values, group: "개인" });
                }}
              />{" "}
            </div>
            <div className="radio__group-text">개인</div>
          </div>
          <div className="radio__group">
            <div className="radio__group-head">
              <img
                className="radio__group-img1"
                src="data:image/svg+xml;base64,PHN2ZyBpZD0iQ2FwYV8xIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTIgNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHdpZHRoPSI1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGc+PHBhdGggZD0ibTQ3OSA0MTZ2ODFjMCA4LjI4LTYuNzIgMTUtMTUgMTVzLTE1LTYuNzItMTUtMTV2LTgxYzAtOC4yOCA2LjcyLTE1IDE1LTE1czE1IDYuNzIgMTUgMTV6IiBmaWxsPSIjZmY3MDM4Ii8+PHBhdGggZD0ibTQ3OSA0MTZ2ODFjMCA4LjI4LTYuNzIgMTUtMTUgMTV2LTExMWM4LjI4IDAgMTUgNi43MiAxNSAxNXoiIGZpbGw9IiNjZWFkMjkiLz48cGF0aCBkPSJtNTEyIDMwNHYxMTJjMCA4LjI4LTYuNzIgMTUtMTUgMTVoLTY2Yy04LjI4IDAtMTUtNi43Mi0xNS0xNXYtMTEyYzAtMTIuNjIgNS4xNS0yNC41IDE0LjQ5LTMzLjQ2IDE4LjgzNy0xOC4wNTEgNDguMTY4LTE4LjA2NSA2Ny4wMiAwIDkuMzQgOC45NiAxNC40OSAyMC44NCAxNC40OSAzMy40NnoiIGZpbGw9IiM5NmQ3NTAiLz48cGF0aCBkPSJtNTEyIDMwNHYxMTJjMCA4LjI4LTYuNzIgMTUtMTUgMTVoLTMzdi0xNzRjMjUuOTkzIDAgNDggMjEuMDAzIDQ4IDQ3eiIgZmlsbD0iIzgwYzAzYiIvPjxwYXRoIGQ9Im00OTcgNDgyaC0xMzdjLTguMjg0IDAtMTUgNi43MTYtMTUgMTVzNi43MTYgMTUgMTUgMTVoMTM3YzguMjg0IDAgMTUtNi43MTYgMTUtMTVzLTYuNzE2LTE1LTE1LTE1eiIgZmlsbD0iIzA1MzAzZCIvPjxwYXRoIGQ9Im0zODMgMTV2NDk3aC0zNjhjLTguMjggMC0xNS02LjcyLTE1LTE1di00ODJjMC04LjI4IDYuNzItMTUgMTUtMTVoMzUzYzguMjggMCAxNSA2LjcyIDE1IDE1eiIgZmlsbD0iIzBhNzg5YiIvPjxwYXRoIGQ9Im0zODMgMTV2NDk3aC0xOTF2LTUxMmgxNzZjOC4yOCAwIDE1IDYuNzIgMTUgMTV6IiBmaWxsPSIjMDg0NzVlIi8+PHBhdGggZD0ibTE2MCA2NWgtODBjLTguMjg0IDAtMTUgNi43MTYtMTUgMTV2NjRjMCA4LjI4NCA2LjcxNiAxNSAxNSAxNWg4MGM4LjI4NCAwIDE1LTYuNzE2IDE1LTE1di02NGMwLTguMjg0LTYuNzE2LTE1LTE1LTE1eiIgZmlsbD0iI2UwZWFlZiIvPjxwYXRoIGQ9Im0zMDQgNjVoLTgwYy04LjI4NCAwLTE1IDYuNzE2LTE1IDE1djY0YzAgOC4yODQgNi43MTYgMTUgMTUgMTVoODBjOC4yODQgMCAxNS02LjcxNiAxNS0xNXYtNjRjMC04LjI4NC02LjcxNi0xNS0xNS0xNXoiIGZpbGw9IiNjY2UwZTUiLz48cGF0aCBkPSJtMzA0IDE5M2gtODBjLTguMjg0IDAtMTUgNi43MTYtMTUgMTV2NjRjMCA4LjI4NCA2LjcxNiAxNSAxNSAxNWg4MGM4LjI4NCAwIDE1LTYuNzE2IDE1LTE1di02NGMwLTguMjg0LTYuNzE2LTE1LTE1LTE1eiIgZmlsbD0iI2NjZTBlNSIvPjxwYXRoIGQ9Im0xNjAgMTkzaC04MGMtOC4yODQgMC0xNSA2LjcxNi0xNSAxNXY2NGMwIDguMjg0IDYuNzE2IDE1IDE1IDE1aDgwYzguMjg0IDAgMTUtNi43MTYgMTUtMTV2LTY0YzAtOC4yODQtNi43MTYtMTUtMTUtMTV6IiBmaWxsPSIjZTBlYWVmIi8+PHBhdGggZD0ibTgwIDQzM2MtOC4yOCAwLTE1IDYuNzItMTUgMTV2NjRoMzB2LTY0YzAtOC4yOC02LjcyLTE1LTE1LTE1eiIgZmlsbD0iI2UwZWFlZiIvPjxwYXRoIGQ9Im0zMDQgNDMzYy04LjI4IDAtMTUgNi43Mi0xNSAxNXY2NGgzMHYtNjRjMC04LjI4LTYuNzItMTUtMTUtMTV6IiBmaWxsPSIjY2NlMGU1Ii8+PHBhdGggZD0ibTI1NSA0MDB2MTEyaC0xMjZ2LTExMmMwLTM0Ljc0IDI4LjI2LTYzIDYzLTYzczYzIDI4LjI2IDYzIDYzeiIgZmlsbD0iI2ZmZGQ1NCIvPjxwYXRoIGQ9Im0yNTUgNDAwdjExMmgtNjN2LTE3NWMzNC43NCAwIDYzIDI4LjI2IDYzIDYzeiIgZmlsbD0iI2ZmYjQ1NCIvPjwvZz48L3N2Zz4="
              />
            </div>
            <div className="service__pay__radio">
              <input
                type="radio"
                name="radio"
                onClick={() => {
                  setValues({ ...values, group: "법인" });
                  setCompany("");
                }}
              />{" "}
            </div>
            <div className="radio__group-text">법인</div>
          </div>
          <div className="radio__group">
            <div className="radio__group-head">
              <img
                className="radio__group-img1"
                src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHBhdGggc3R5bGU9ImZpbGw6I0ZGNTA0QTsiIGQ9Ik00MzguMTYyLDI3My4xNjJIMzg2LjE5Yy00MC43MTksMC03NC4wNjcsMzMuMjA0LTc0LjA2Nyw3My45MjN2ODEuNTENCgljMCwyNC40MzEsMjAuMDk3LDQ0LjQ0NCw0NC41MjksNDQuNDQ0SDQ2Ny43YzI0LjQzMiwwLDQ0LjMtMjAuMDEzLDQ0LjMtNDQuNDQ0di04MS41MUM1MTIsMzA2LjM2NSw0NzguODgxLDI3My4xNjIsNDM4LjE2MiwyNzMuMTYyDQoJeiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6I0ZGNzk1OTsiIGQ9Ik00MTIuMTc2LDI3My4xNjFIMzg2LjE5Yy00MC43MTksMC03NC4wNjcsMzMuMjA0LTc0LjA2Nyw3My45MjN2ODEuNTENCgljMCwyNC40MzEsMjAuMDk3LDQ0LjQ0NCw0NC41MjksNDQuNDQ0aDU1LjUyNEw0MTIuMTc2LDI3My4xNjFMNDEyLjE3NiwyNzMuMTYxeiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6I0ZGNTA0QTsiIGQ9Ik00MTIuMTc2LDEyMS43MzdjLTM2LjYyMywwLTY2LjQxNywyOS43OTUtNjYuNDE3LDY2LjQxN2MwLDM2LjYyMywyOS43OTQsNjYuNDE4LDY2LjQxNyw2Ni40MTgNCglzNjYuNDE3LTI5Ljc5NSw2Ni40MTctNjYuNDE4QzQ3OC41OTMsMTUxLjUzMyw0NDguNzk5LDEyMS43MzcsNDEyLjE3NiwxMjEuNzM3eiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6I0ZGNzk1OTsiIGQ9Ik00MTIuMTc2LDEyMS43MzdjLTM2LjYyMywwLTY2LjQxNywyOS43OTUtNjYuNDE3LDY2LjQxN2MwLDM2LjYyMywyOS43OTQsNjYuNDE4LDY2LjQxNyw2Ni40MTgNCglWMTIxLjczN3oiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiMyRkQxNjM7IiBkPSJNMTI2LjAzOCwyNzMuMTYySDc0LjA2N0MzMy4zNDgsMjczLjE2MiwwLDMwNi4zNjUsMCwzNDcuMDg0djgxLjUxDQoJYzAsMjQuNDMxLDIwLjA5Nyw0NC40NDQsNDQuNTI5LDQ0LjQ0NGgxMTEuMDQ4YzI0LjQzMiwwLDQ0LjMtMjAuMDEzLDQ0LjMtNDQuNDQ0di04MS41MQ0KCUMxOTkuODc3LDMwNi4zNjUsMTY2Ljc1OCwyNzMuMTYyLDEyNi4wMzgsMjczLjE2MnoiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiM3RUZGNzY7IiBkPSJNMTAwLjA1MywyNzMuMTYxSDc0LjA2N0MzMy4zNDgsMjczLjE2MSwwLDMwNi4zNjUsMCwzNDcuMDg0djgxLjUxDQoJYzAsMjQuNDMxLDIwLjA5Nyw0NC40NDQsNDQuNTI5LDQ0LjQ0NGg1NS41MjRDMTAwLjA1Myw0NzMuMDM5LDEwMC4wNTMsMjczLjE2MSwxMDAuMDUzLDI3My4xNjF6Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojMzU5NEM3OyIgZD0iTTMwMS4yMjIsMjM0Ljc2NmgtOTAuNDQ0Yy00MC43MTksMC03My44NDYsMzMuMTI3LTczLjg0Niw3My44NDZ2MTQ5LjUyMQ0KCWMwLDguMTU3LDYuNjEzLDE0Ljc2OSwxNC43NjksMTQuNzY5aDIwOC41OThjOC4xNTcsMCwxNC43NjktNi42MTIsMTQuNzY5LTE0Ljc2OVYzMDguNjEyDQoJQzM3NS4wNjgsMjY3Ljg5MywzNDEuOTQxLDIzNC43NjYsMzAxLjIyMiwyMzQuNzY2eiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6IzE2RENGQTsiIGQ9Ik0yNTYuNDk5LDIzNC43NjZoLTQ1LjcyMWMtNDAuNzE5LDAtNzMuODQ2LDMzLjEyNy03My44NDYsNzMuODQ2djE0OS41MjENCgljMCw4LjE1Nyw2LjYxMywxNC43NjksMTQuNzY5LDE0Ljc2OWgxMDQuNzk4TDI1Ni40OTksMjM0Ljc2NkwyNTYuNDk5LDIzNC43NjZ6Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojMzU5NEM3OyIgZD0iTTI1NiwzOC45NmMtNDguOTcsMC04OC44MSwzOS44NC04OC44MSw4OC44MXMzOS44MzksODguODEsODguODEsODguODFzODguODEtMzkuODQsODguODEtODguODENCglTMzA0Ljk3LDM4Ljk2LDI1NiwzOC45NnoiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiMxNkRDRkE7IiBkPSJNMjU2LDM4Ljk2Yy00OC45NywwLTg4LjgxLDM5Ljg0LTg4LjgxLDg4LjgxczM5LjgzOSw4OC44MSw4OC44MSw4OC44MVYzOC45NnoiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiMyRkQxNjM7IiBkPSJNMTAwLjA1MywxMjEuNzM3Yy0zNi42MjMsMC02Ni40MTcsMjkuNzk1LTY2LjQxNyw2Ni40MTdjMCwzNi42MjMsMjkuNzk0LDY2LjQxOCw2Ni40MTcsNjYuNDE4DQoJczY2LjQxNy0yOS43OTUsNjYuNDE3LTY2LjQxOEMxNjYuNDcsMTUxLjUzMywxMzYuNjc2LDEyMS43MzcsMTAwLjA1MywxMjEuNzM3eiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6IzdFRkY3NjsiIGQ9Ik0xMDAuMDUzLDEyMS43MzdjLTM2LjYyMywwLTY2LjQxNywyOS43OTUtNjYuNDE3LDY2LjQxN2MwLDM2LjYyMywyOS43OTQsNjYuNDE4LDY2LjQxNyw2Ni40MTgNCglWMTIxLjczN3oiLz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K"
              />
            </div>
            <div className="service__pay__radio">
              <input
                type="radio"
                name="radio"
                className="service__pay__radio"
                onClick={() => {
                  setValues({ ...values, group: "학교단체" });
                  setCompany("");
                }}
              />{" "}
            </div>
            <div className="radio__group-text">학교 & 단체</div>
          </div>
        </div>
        <div className="service__pay__row">
          <div className="input__group">
            <i className="fas fa-user"></i>
            {values.group === "법인" ? (
              <input
                placeholder="법인명"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="input__group-input"
              />
            ) : values.group === "학교단체" ? (
              <input
                placeholder="학교 or 단체명"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="input__group-input"
              />
            ) : values.group === "개인" ? (
              <input
                placeholder="성명"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input__group-input"
              />
            ) : (
              <input
                placeholder="자신이 속한 그룹을 선택해주세요"
                className="input__group-input"
              />
            )}
          </div>
          <div className="input__group">
            <i className="fas fa-envelope"></i>
            <input readOnly value={email} className="input__group-input" />
          </div>
        </div>
        <div className="service__pay__row">
          <div className="input__group">
            <div>
              <i className="fas fa-phone-alt"></i>
            </div>
            <input
              placeholder="010"
              type="number"
              value={values.mobile.head}
              className="input__group-mobile-head"
              onChange={(e) => {
                if (e.target.value.length > 3) {
                  e.target.value = e.target.value.slice(0, 4);
                } else {
                  setValues({
                    ...values,
                    mobile: {
                      head: e.target.value,
                      body: values.mobile.body,
                      tail: values.mobile.tail,
                    },
                  });
                }
              }}
            ></input>
            -
            <input
              type="number"
              value={values.mobile.body}
              className="input__group-mobile-bodytail"
              onChange={(e) => {
                if (e.target.value.length > 4) {
                  e.target.value = e.target.value.slice(0, 5);
                } else {
                  setValues({
                    ...values,
                    mobile: {
                      head: values.mobile.head,
                      body: e.target.value,
                      tail: values.mobile.tail,
                    },
                  });
                }
              }}
            ></input>
            -
            <input
              type="number"
              value={values.mobile.tail}
              className="input__group-mobile-bodytail"
              onChange={(e) => {
                if (e.target.value.length > 4) {
                  e.target.value = e.target.value.slice(0, 5);
                } else {
                  setValues({
                    ...values,
                    mobile: {
                      head: values.mobile.head,
                      body: values.mobile.body,
                      tail: e.target.value,
                    },
                  });
                }
              }}
            ></input>
          </div>
          <div className="input__group">
            <i className="fas fa-wallet"></i>
            <input
              type="number"
              placeholder="후원금액"
              value={values.amount}
              className="input__group-input"
              onChange={(e) => setValues({ ...values, amount: e.target.value })}
            ></input>
          </div>
        </div>
        <div className="button__area">
          <div className="button__group">
            <Iamport
              identificationCode="imp20562153"
              params={{
                pg: "nicepay",
                pay_method: "card",
                merchant_uid: "merchant_" + new Date().getTime(),
                name: accidentState.accidentSingle?.data.title,
                amount: values.amount,
                buyer_email: email,
                buyer_name: name,
                buyer_tel:
                  values.mobile.head + values.mobile.body + values.mobile.tail,
                m_redirect_url: `${process.env.IAMPORT_URL}`,
              }}
              onFailed={(err) => console.log(err)}
              onSuccess={(res) => {
                console.log(res);
                setPaymentInfo();
                sendReceipt();
                notify("후원이 완료되었습니다.");
              }}
              jqueryLoaded={false}
              render={(renderProps) => (
                <button
                  type="button"
                  className="btn__first"
                  onClick={() => {
                    if (!values.mobile || !values.amount) {
                      notify("모든 항목은 필수입니다.");
                    } else if (
                      values.mobile.head.length !== 3 ||
                      values.mobile.body.length !== 4 ||
                      values.mobile.tail.length !== 4
                    ) {
                      notify("전화번호 길이는 11자리입니다.");
                    } else {
                      renderProps.onClick();
                    }
                  }}
                >
                  후원하기
                </button>
              )}
            />
          </div>
          <div className="button__group">
            <Link to="/accident">
              <button type="submit" className="btn__second">
                취소하기
              </button>
            </Link>
          </div>
        </div>
      </form>
    </section>
  );
};

export default ServicePay;

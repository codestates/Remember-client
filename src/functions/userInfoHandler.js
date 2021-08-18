import axios from "axios";

const userInfoHandler = async (token) => {
  if (!token.OAuth.OAuth) {
    await axios
      .get(`${process.env.REACT_APP_API_URL}/mypage`, {
        headers: {
          authorization: `Bearer ${token.accessToken}`,
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then((res) => {
        return res.data.data.userInfo;
      });
  } else {
    await axios
      .post(
        `${process.env.REACT_APP_API_URL}/mypage`,
        {
          email: token.OAuth.email,
          name: token.OAuth.name,
          OAuth: token.OAuth.OAuth,
        },
        {
          headers: {
            authorization: `Bearer ${token.accessToken}`,
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      )
      .then((res) => {
        return res.data.data.userInfo;
      });
  }
};

export default userInfoHandler;

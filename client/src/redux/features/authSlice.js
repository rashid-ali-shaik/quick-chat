import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // user: localStorage.getItem("token") ? true : false,
  user: true,
  userName: "",
  userEmail: "",
  token: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginUser: (state, { payload }) => {
      const { token } = payload.data;
      state.user = true;
      state.token = token;
      console.log(token);
      localStorage.setItem("token", token);
    },
    logoutUser: (state) => {
      state.user = false;
      state.userEmail = "";
      state.userName = "";
      localStorage.removeItem("token");
    },
    setUser: (state, { payload }) => {
      console.log(payload.name);
      state.userName = payload.name;
      state.userEmail = payload.email;
    },
  },
});

export const { loginUser, logoutUser, setUser } = authSlice.actions;

export default authSlice.reducer;

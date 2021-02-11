import { createAction } from "@reduxjs/toolkit";

const registerRequest = createAction("@auth/registerRequest");
const registerSeccess = createAction("@auth/registerSeccess");
const registerError = createAction("@auth/registerError");

const loginRequest = createAction("@auth/loginRequest");
const loginSeccess = createAction("@auth/loginSeccess");
const loginError = createAction("@auth/loginError");

const logoutRequest = createAction("@auth/logoutRequest");
const logoutSeccess = createAction("@auth/logoutSeccess");
const logoutError = createAction("@auth/logoutError");

const getCurrentUserRequest = createAction("@auth/getCurrentUserRequest");
const getCurrentUserSeccess = createAction("@auth/getCurrentUserSeccess");
const getCurrentUserError = createAction("@auth/getCurrentUserError");

export default {
  registerRequest,
  loginRequest,
  logoutRequest,
  getCurrentUserRequest,
  registerError,
  loginError,
  logoutError,
  getCurrentUserError,
  registerSeccess,
  loginSeccess,
  logoutSeccess,
  getCurrentUserSeccess,
};

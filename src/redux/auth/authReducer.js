import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import authActions from "./authActions";

const initialUserState = { name: null, email: null };

const user = createReducer(initialUserState, {
  [authActions.registerSeccess]: (_, { payload }) => payload.user,
  [authActions.loginSeccess]: (_, { payload }) => payload.user,
  [authActions.logoutSeccess]: () => initialUserState,
  [authActions.getCurrentUserSeccess]: (_, { payload }) => payload,
});

const token = createReducer(null, {
  [authActions.registerSeccess]: (_, { payload }) => payload.token,
  [authActions.loginSeccess]: (_, { payload }) => payload.token,
  [authActions.logoutSeccess]: () => null,
});

const error = createReducer(null, {
  [authActions.registerError]: (_, { payload }) => payload,
  [authActions.loginError]: (_, { payload }) => payload,
  [authActions.logoutError]: (_, { payload }) => payload,
  [authActions.getCurrentUserError]: (_, { payload }) => payload,
});

export const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

export default combineReducers({
  user,
  token,
  error,
});

import axios from "axios";
import authActions from "./authActions";

axios.defaults.baseURL = "https://goit-phonebook-api.herokuapp.com";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

const register = (credentials) => async (dispatch) => {
  dispatch(authActions.registerRequest());
  try {
    const result = await axios.post("/users/signup", credentials);
    token.set(result.data.token);
    dispatch(authActions.registerSeccess(result.data));
  } catch (error) {
    dispatch(authActions.registerError(error));
  }
};

const logIn = (credentials) => async (dispatch) => {
  dispatch(authActions.loginRequest());
  try {
    const result = await axios.post("/users/login", credentials);
    token.set(result.data.token);
    dispatch(authActions.loginSeccess(result.data));
  } catch (error) {
    dispatch(authActions.loginError(error));
  }
};

const logOut = () => async (dispatch) => {
  dispatch(authActions.logoutRequest());
  try {
    await axios.post("/users/logout");
    token.unset();
    dispatch(authActions.logoutSeccess());
  } catch (error) {
    dispatch(authActions.logoutError(error));
  }
};

const getCurrentUser = () => async (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }

  token.set(persistedToken);
  dispatch(authActions.getCurrentUserRequest());
  try {
    const result = await axios.get("/users/current");
    dispatch(authActions.getCurrentUserSeccess(result.data));
  } catch (error) {
    dispatch(authActions.getCurrentUserError(error));
  }
};

export default { register, logIn, logOut, getCurrentUser };

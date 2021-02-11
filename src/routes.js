import { lazy } from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    path: "/",
    label: "Home",
    exact: true,
    component: lazy(() => import("./containers/Home/Home")),
    private: false,
    restricted: false,
  },
  {
    path: "/register",
    label: "Register",
    exact: true,
    component: lazy(() => import("./containers/Register/Register")),
    private: false,
    restricted: true,
  },
  {
    path: "/login",
    label: "Login",
    exact: true,
    component: lazy(() => import("./containers/Login/Login")),
    private: false,
    restricted: true,
  },
  {
    path: "/contacts",
    label: "Contacts",
    exact: true,
    component: lazy(() => import("./containers/Contacts/Contacts")),
    private: true,
    restricted: false,
  },
];

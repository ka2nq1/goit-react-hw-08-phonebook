import React from "react";
import { NavLink } from "react-router-dom";
import { AppBar, Toolbar } from "@material-ui/core";
import { connect } from "react-redux";
import { authSelectors } from "../../redux/auth";
import UserMenu from "../UserMenu/UserMenu";
import "./Header.css";

const Header = ({ isAuthenticated }) => {
  return (
    <div className="Header">
      <AppBar position="static">
        <Toolbar className="Toolbar">
          <NavLink
            exact
            to="/"
            className="Navigation-link"
            activeClassName="Navigation-link-active"
          >
            Home
          </NavLink>

          {isAuthenticated ? (
            <>
              <NavLink
                to="/contacts"
                className="Navigation-link"
                activeClassName="Navigation-link-active"
              >
                Contacts
              </NavLink>

              <UserMenu />
            </>
          ) : (
            <>
              <NavLink
                to="/login"
                className="Navigation-link"
                activeClassName="Navigation-link-active"
              >
                Login
              </NavLink>
              <NavLink
                to="/register"
                className="Navigation-link"
                activeClassName="Navigation-link-active"
              >
                Registration
              </NavLink>
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: authSelectors.isAuthenticated(state),
});

export default connect(mapStateToProps)(Header);

// {
//   routes.map((route) => (
//     <NavLink
//       key={route.label}
//       to={route.path}
//       exact={route.exact}
//       className="Navigation-link"
//       activeClassName="Navigation-link-active"
//     >
//       {route.label}
//     </NavLink>
//   ));
// }

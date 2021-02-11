import React from "react";
import { connect } from "react-redux";
import { authSelectors, authOperations } from "../../redux/auth";
import "./UserMenu.css";

const UserMenu = ({ avatar, email, onLogout }) => {
  return (
    <div className="MenuContainer">
      <div className="account-avatar">
        <img
          className="avatar avatar--hover"
          src={avatar}
          alt="User avatar"
          width="44"
          height="44"
        />
      </div>
      <span className="AccountEmail">{email}</span>
      <button className="logout-btn" type="button" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  email: authSelectors.getUserEmail(state),
  avatar: "https://www.meme-arsenal.com/memes/ee3f4233f647f4ce145b4be11dd7b620.jpg",
});

export default connect(mapStateToProps, { onLogout: authOperations.logOut })(
  UserMenu
);

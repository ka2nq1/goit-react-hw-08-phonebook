import React from "react";
import { connect } from "react-redux";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import PropTypes from "prop-types";
import { contactsSelectors } from "../../redux/contacts";
import SingleContact from "../ContactListItem/ContactListItem";
import "./ContactList.css";

const ContactList = ({ contacts }) => {
  return (
    <div className="ListContainer">
      <TransitionGroup component="ul" className="ContactList">
        {contacts.map(({ id }) => (
          <CSSTransition key={id} classNames="ListItem" timeout={250}>
            <SingleContact id={id} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>  
  );
};

const mapStateToProps = (state) => ({
  contacts: contactsSelectors.getFilteredContact(state),
});

export default connect(mapStateToProps)(ContactList);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.string,
      namber: PropTypes.string,
    })
  ).isRequired,
};

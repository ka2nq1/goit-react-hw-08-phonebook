import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { contactsOperations, contactsSelectors } from "../../redux/contacts";
import "./ContactListItem.css";

const ContactListItem = ({ name, number, deleteContact }) => {
  return (
    <li className="ListItem">
      <p className="Contact">
        <span className="ContactName">{name}</span>
        <span className="ContactNumber">{number}</span>
      </p>
      <button className="DeleteBtn" type="button" onClick={deleteContact}>x</button>
    </li>
  );
};

const mapStateToProps = (state, ownProps) => {
  const contact = contactsSelectors.getContactById(state, ownProps.id);

  return { ...contact };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  deleteContact: () => dispatch(contactsOperations.deleteContact(ownProps.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactListItem);

ContactListItem.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  deleteContact: PropTypes.func.isRequired,
};

import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { contactsAction, contactsSelectors } from "../../redux/contacts";
import "./Filter.css";

const Filter = ({ filter, handleFilter }) => {
  return (
    <>
      <label className="FilterLabel">Find contacts by name</label>
        <input
          className="FilterInput"
          type="text"
          name="filter"
          placeholder="Find contact"
          value={filter}
          onChange={handleFilter}
        />
    </>  
  );
};

const mapStateToProps = (state) => ({
  filter: contactsSelectors.filterSelector(state),
});

const mapDispatchToProps = {
  handleFilter: contactsAction.handleFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

Filter.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.string,
      namber: PropTypes.string,
    }).isRequired
  ),
  filter: PropTypes.string.isRequired,
  handleFilter: PropTypes.func.isRequired,
};

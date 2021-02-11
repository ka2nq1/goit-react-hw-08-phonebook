import React, { Component } from "react";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";
import { contactsOperations, contactsSelectors } from "../../redux/contacts";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import Filter from "../../components/Filter/Filter";
import "./Contacts.css";

class Contacts extends Component {
  state = {
    animation: false,
  };

  componentDidMount() {
    this.props.onGetContacts();
    this.setState((state) => ({
      animation: !state.animation,
    }));
  }

  render() {
    return (
      <div className="Container">
        <CSSTransition
          in={true}
          appear={true}
          classNames="TitleTransition"
          timeout={500}
          unmountOnExit
        >
          <h1 className="Tytle">Phonebook</h1>
        </CSSTransition>

        <ContactForm />

        {this.props.contacts.length > 0 && (
          <>
            <h2 className="Tytle">Contacts</h2>
          </>
        )}
        <CSSTransition
          in={this.props.contacts.length > 1}
          classNames="FilterAnimation"
          timeout={250}
          unmountOnExit
        >
          <Filter />
        </CSSTransition>

        <ContactList />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  contacts: contactsSelectors.itemsSelector(state),
});

const mapDispatchToProps = {
  onGetContacts: contactsOperations.getContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);

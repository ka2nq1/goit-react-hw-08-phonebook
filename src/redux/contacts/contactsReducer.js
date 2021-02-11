import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import contactsAction from "./contactsAction";

const removeContact = (state, { payload }) =>
  state.filter((contact) => contact.id !== payload);

const items = createReducer([], {
  [contactsAction.getContactsSeccess]: (_, { payload }) => payload,
  [contactsAction.addContactSeccess]: (state, { payload }) => [
    ...state,
    payload,
  ],
  [contactsAction.deleteContactSeccess]: removeContact,
});

const filter = createReducer("", {
  [contactsAction.handleFilter]: (state, { payload }) => (state = payload),
});

export default combineReducers({
  items,
  filter,
});

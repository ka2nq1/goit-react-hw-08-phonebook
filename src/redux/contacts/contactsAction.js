import { createAction } from "@reduxjs/toolkit";

const getContactsRequest = createAction("@contact/getRequest");
const getContactsSeccess = createAction("@contact/getSeccess");
const getContactsError = createAction("@contact/getError");

const addContactRequest = createAction("@contact/addRequest");
const addContactSeccess = createAction("@contact/addSeccess");
const addContactError = createAction("@contact/addError");

const deleteContactRequest = createAction("@contact/deleteRequest");
const deleteContactSeccess = createAction("@contact/deleteSeccess");
const deleteContactError = createAction("@contact/deleteError");

const handleFilter = createAction("@contact/filter", ({ target }) => ({
  payload: target.value,
}));

export default {
  getContactsRequest,
  getContactsSeccess,
  getContactsError,
  addContactRequest,
  addContactSeccess,
  addContactError,
  deleteContactRequest,
  deleteContactSeccess,
  deleteContactError,
  handleFilter,
};

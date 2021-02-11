import { createSelector } from "@reduxjs/toolkit";

const itemsSelector = (state) => state.contacts.items;
const filterSelector = (state) => state.contacts.filter;

const getFilteredContact = createSelector(
  [itemsSelector, filterSelector],
  (items, filter) => {
    return items.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

const getContactById = createSelector(
  [itemsSelector, (_, contactId) => contactId],
  (items, contactId) => items.find((contact) => contact.id === contactId)
);

export default {
  itemsSelector,
  filterSelector,
  getFilteredContact,
  getContactById,
};

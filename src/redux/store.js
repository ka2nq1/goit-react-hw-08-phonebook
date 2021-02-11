import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  REGISTER,
  PAUSE,
  PERSIST,
  PURGE,
} from "redux-persist";
import contactReducer from "./contacts/contactsReducer";
import authReducer, { authPersistConfig } from "./auth/authReducer";

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    auth: persistReducer(authPersistConfig, authReducer),
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, REGISTER, PAUSE, PERSIST, PURGE],
    },
  }),
});

export const persistor = persistStore(store);

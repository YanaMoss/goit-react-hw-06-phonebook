import { configureStore } from '@reduxjs/toolkit';
import localStorage from 'redux-persist/lib/storage';
import phonebookReducer from './phonebook-reducer';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const phonebookPersistConfig = {
  key: 'phonebook',
  storage: localStorage,
  blacklist: ['filter'],
};

// const persistedReducer = persistReducer(phonebookPersistConfig, rootReducer);

const store = configureStore({
  reducer: {
    phonebook: persistReducer(phonebookPersistConfig, phonebookReducer),
  },
  devTools: process.env.NODE_ENV === 'development',
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(store);
// eslint-disable-next-line import/no-anonymous-default-export
export default { store, persistor };

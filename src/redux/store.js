import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import phonebookReducer from './phonebook-reducer';

store.subscribe(() => {
  localStorage.setItem('reduxState', JSON.stringify(store.getState()));
});
const rootReducer = combineReducers({
  phonebook: phonebookReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;

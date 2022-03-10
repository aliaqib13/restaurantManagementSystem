import { createStore } from '@reduxjs/toolkit';
import rootReduces from './Reducer';

const store = createStore(
  rootReduces,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

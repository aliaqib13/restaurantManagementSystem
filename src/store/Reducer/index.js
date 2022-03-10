import { combineReducers } from '@reduxjs/toolkit';
import productReduces from './productReduces';

const rootReduces = combineReducers({
  productReduces,
});

export default rootReduces;

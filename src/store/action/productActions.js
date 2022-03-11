import * as actions from '../actionType/actiontType';

export const setProduct = (products) => {
  return {
    type: actions.PRODUCT_ADDED,
    payload: products,
  };
};

export const addProduct = (products) => {
  return {
    type: actions.ADD_TO_CART,
    payload: products,
  };
};

export const fetchProducts = (data) => {};

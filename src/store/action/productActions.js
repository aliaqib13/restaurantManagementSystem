import * as actions from '../actionType/actiontType';

export const setProduct = (products) => {
  return {
    type: actions.PRODUCT_ADDED,
    payload: {
      id: products.id,
      name:products.name,

    },
  };
};

export const addProduct = (products) => {
  return {
    type: actions.ADD_TO_CART,
    payload: products,
  };
};

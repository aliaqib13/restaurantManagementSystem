import * as actions from '../actionType/actiontType';

export default function productReduces(state = [], { type, payload }) {
  switch (type) {
    case actions.PRODUCT_ADDED:
      return [
        ...state,
        {
          id: payload.id,
          name: payload.name,
          image: payload.image,
          price: payload.price,
          stock: payload.stock,
        },
      ];
    case actions.PRODUCT_REMOVED:
      return state;

    case actions.ADD_TO_CART:
      return [...state];

    default:
      return state;
  }
}

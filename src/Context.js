import { createContext, useReducer } from 'react';
import { reducer } from './Reducer';

export const ShopContext = createContext();

const initialState = {
  goods: [],
  isLoading: true,
  order: [],
  isBasketShow: false,
  alertName: '',
};

export const ContextProvider = ({ children }) => {
  const [value, dispatch] = useReducer(reducer, initialState);

  value.closeALert = () => {
    dispatch({ type: 'CLOSE_ALERT' });
  };

  value.deleteFromBasket = (itemId) => {
    dispatch({ type: 'DELETE_FROM_BASKET', payload: { id: itemId } });
  };

  value.handleBasketShow = () => {
    dispatch({ type: 'HANDLE_BASKET_SHOW' });
  };

  value.addToBasket = (item) => {
    dispatch({ type: 'ADD_TO_BASKET', payload: item });
  };

  value.updateQuantity = (itemId, count) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id: itemId, count } });
  };

  value.setGoods = (data) => {
    dispatch({ type: 'SET_GOODS', payload: data });
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

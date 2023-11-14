export function reducer(state, { type, payload }) {
  switch (type) {
    case 'SET_GOODS': {
      return {
        ...state,
        goods: payload || [],
        loading: false,
      };
    }
    case 'CLOSE_ALERT':
      return {
        ...state,
        alertName: '',
      };
    case 'DELETE_FROM_BASKET':
      return {
        ...state,
        order: state.order.filter((item) => item.id !== payload.id),
      };
    case 'HANDLE_BASKET_SHOW':
      return {
        ...state,
        isBasketShow: !state.isBasketShow,
      };
    case 'ADD_TO_BASKET': {
      const itemIndex = state.order.findIndex((elem) => elem.id === payload.id);

      let newOrder = null;

      if (itemIndex < 0) {
        const newItem = {
          ...payload,
          quantity: 1,
        };
        newOrder = [...state.order, newItem];
      } else {
        newOrder = state.order.map((elem, i) => {
          if (i === itemIndex) {
            return {
              ...elem,
              quantity: elem.quantity + 1,
            };
          } else {
            return elem;
          }
        });
      }

      return {
        ...state,
        order: newOrder,
        alertName: payload.name,
      };
    }
    case 'UPDATE_QUANTITY': {
      const newOrder = state.order
        .map((elem) => {
          if (elem.id === payload.id) {
            return {
              ...elem,
              quantity: elem.quantity + payload.count,
            };
          } else {
            return elem;
          }
        })
        .filter((elem) => elem.quantity !== 0);

      return {
        ...state,
        order: newOrder,
      };
    }
    default:
      return state;
  }
}

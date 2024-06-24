export const initialState = {
  cart: [],
  user: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.item],
      };
    case "UPDATE_CART_ITEM_QUANTITY":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.itemId
            ? { ...item, quantity: item.quantity + action.quantity }
            : item,
        ),
      };
    case "REMOVE_FROM_CART":
      const index = state.cart.findIndex(
        (cartItem) => cartItem.id === action.id,
      );
      let newCart = [...state.cart];
      if (index >= 0) {
        newCart.splice(index, 1);
        localStorage.setItem(
          "state",
          JSON.stringify({ ...state, cart: newCart }),
        );
      } else {
        alert(
          `Can't remove product (id: ${action.id}) as it is not found in the cart.`,
        );
      }
      return {
        ...state,
        cart: newCart,
      };
    case "EMPTY_CART":
      return {
        cart: [],
        user: state.user,
      };
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};

export default reducer;

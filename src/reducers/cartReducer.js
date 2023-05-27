
import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  SAVE_SHIPPING_INFO,
  ADD_TO_CART1,
  REMOVE_CART_ITEM1,
  UPDATE_CART_RESET
} from "../constants/cartConstants";
import useCustomAlert from "../component/useCustomAlert";
export const cartReducer = (
  state = { cartItems: [], shippingInfo: {} },
  action
) => {

// const { showErrorAlert } = useCustomAlert();

  switch (action.type) {
    // case ADD_TO_CART:
    //   const item = action.payload;

    //   const isItemExist = state.cartItems.find(
    //     (i) => i.roomtype === item.roomtype
    //   );

    //   if (isItemExist) {
    //     return {
    //       ...state,
    //       cartItems: state.cartItems.map((i) =>
    //         i.roomtype === isItemExist.roomtype
    //           ? { ...i, quantity: i.quantity + item.quantity }
    //           : i
    //       ),
    //     };
    //   } else {
    //     return {
    //       ...state,
    //       cartItems: [...state.cartItems, item],
    //     };
    //   }
    case ADD_TO_CART:
      const item = action.payload;
      const existingItemIndex = state.cartItems.findIndex(
        (i) => i.name === item.name && i.roomType === item.roomType
      );

      if (existingItemIndex !== -1) {
        // If an item with the same name and roomType already exists, return the current state
        //  showErrorAlert("Item already exists in cart!");
        // useCustomAlert("already existed")
        return state;
      } else {
        // Otherwise, add the new item to the cartItems array
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    case ADD_TO_CART1:
      const item1 = action.payload;
      const existingItemIndex1 = state.cartItems.findIndex(
        (i) => i.name === item1.name && i.Category === item1.Category
      );

      if (existingItemIndex1 !== -1) {
        // If an item with the same name and roomType already exists, return the current state
        //  showErrorAlert("Item already exists in cart!");
        // useCustomAlert("already existed")
        return state;
      } else {
        // Otherwise, add the new item to the cartItems array
        return {
          ...state,
          cartItems: [...state.cartItems, item1],
        };
      }

    case REMOVE_CART_ITEM:
      const { price, roomType } = action.payload;
      //   console.log(`Removing item with prce ${price} and room type ${roomType}`);
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (i) => i.price !== price || i.roomType !== roomType
        ),
      };
    case REMOVE_CART_ITEM1:
      // const { id } = action.payload;
      //   console.log(`Removing item with prce ${price} and room type ${roomType}`);
      return {
        ...state,
        cartItems: state.cartItems.filter((i) => i.product1 !== action.payload),
      };
    case UPDATE_CART_RESET:
      return {
        ...state,
        cartItems: [],
      };

    case SAVE_SHIPPING_INFO:
      return {
        ...state,
        shippingInfo: action.payload,
      };

    default:
      return state;
  }
};

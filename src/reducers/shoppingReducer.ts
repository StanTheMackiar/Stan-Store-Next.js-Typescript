
import { ActionType } from "../actions/shoppingActions";
import { Cart, Products } from "../interfaces/products";

export interface CartState {
  products: Products[],
  cart: Cart[];
  isOpen: boolean;
  totalAmount: number;
  totalProducts: number;
}

export const shoppingInitialState: CartState = {
  products: [],
  cart: [],
  isOpen: false,
  totalAmount: 0,
  totalProducts: 0,
};

export function shoppingReducer(state: CartState, action: ActionType) {

  switch (action.type) {
    case "put_products_to_cart": {
      return {
        ...state,
        products: action.payload,
      };
    }
    case 'open_cart': {
      return {
        ...state,
        isOpen: true,
      };
    }
    case "close_cart": {
      return {
        ...state,
        isOpen: false,
      };
    }
    case "add_to_cart": {
      let newItem = state.products.find((product) => product.id === action.payload) as Products;

      let itemInCart = state.cart.find((item) => item.id === newItem.id)

      return itemInCart
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === newItem.id
                ? { ...item, amount: item.amount + 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: [...state.cart, { ...newItem, amount: 1 }],
          };
    }
    case "remove_one_from_cart": {
      let itemToDelete = state.cart.find((item) => item.id === action.payload) as Cart;

      return itemToDelete.amount > 1
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === action.payload ? { ...item, amount: item.amount - 1 } : item
            ),
          }
        : {
            ...state,
            cart: state.cart.filter((item) => item.id !== action.payload),
          };
    }
    case "add_one_from_cart": {
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload ? { ...item, amount: item.amount + 1 } : item
        ),
      };
    }
    case "remove_all_from_cart": {
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    }
    case "clear_cart":
      return {
        ...state,
        cart: [],
      }

    case "total_amount": {
      return {
        ...state,
        totalAmount: state.cart.reduce(
          (prev: number, current: { price: number; amount: number }) =>
            prev + current.price * current.amount,
          0
        ),
      };
    }

    case "total_products": {
      return {
        ...state,
        totalProducts: state.cart.reduce(
          (prev: number, current: Cart) => prev + current.amount,
          0
        ),
      };
    }

    default:
      return state;
  }
}

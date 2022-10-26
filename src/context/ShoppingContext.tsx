import React, { createContext, useEffect, useReducer } from "react";
import { getProducts } from "../../services/getProducts";
import { Products } from "../interfaces/products";
import {
  CartState,
  shoppingInitialState,
  shoppingReducer,
} from "../reducers/shoppingReducer";

interface ProviderProps {
  children: JSX.Element | JSX.Element[]
}

export interface ShoppingContextType {
  putProductsToCart: (a: Products[] | []) => void;
  openCart: () => void;
  closeCart: () => void;
  addToCart: (id: number) => void;
  addFromCart: (id: number) => void;
  delFromCart: (id: number) => void;
  delAllFromCart: (id: number) => void;
  clearCart: () => void;
  cartState: CartState;
};

const shoppingContext = createContext(
  {} as ShoppingContextType
);


const ShoppingProvider = ({ children }: ProviderProps) => {
  const [cartState, dispatch] = useReducer(shoppingReducer, shoppingInitialState);

  useEffect(() => {
    const addProducts = async () => {
      putProductsToCart(await getProducts())
    }
    addProducts();
  }, []);

  useEffect(() => {
    getTotalAmount();
    getTotalProducts();
  }, [cartState.cart]);


  const putProductsToCart = (products: Products[]) => {
    dispatch({ type: "put_products_to_cart", payload: products });
  };

  const openCart = () => {
    dispatch({ type: "open_cart" });
  };

  const closeCart = () => {
    dispatch({ type: "close_cart" });
  };

  const addToCart = (id: number) => {
    dispatch({ type: "add_to_cart", payload: id });
  };

  const addFromCart = (id: number) => {
    dispatch({ type: "add_one_from_cart", payload: id });
  };

  const delFromCart = (id: number) => {
    dispatch({ type: "remove_one_from_cart", payload: id });
  };

  const delAllFromCart = (id: number) => {
    dispatch({ type: "remove_all_from_cart", payload: id });
  };

  const clearCart = () => {
    dispatch({ type: "clear_cart" });
  };

  const getTotalAmount = () => {
    dispatch({ type: "total_amount" });
  };

  const getTotalProducts = () => {
    dispatch({ type: "total_products" });
  };


  return (
    <shoppingContext.Provider
      value={{
        putProductsToCart,
        addFromCart,
        addToCart,
        delFromCart,
        delAllFromCart,
        clearCart,
        openCart,
        closeCart,
        cartState,
      }}>
      {children}
    </shoppingContext.Provider>
  );
};

export { ShoppingProvider };
export default shoppingContext;

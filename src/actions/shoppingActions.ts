import { Products } from "../interfaces/products";

export type ActionType =
  | { type: "put_products_to_cart", payload: Products[] | [] }
  | { type: "open_cart" }
  | { type: "close_cart" }
  | { type: "add_to_cart", payload: number }
  | { type: "remove_one_from_cart", payload: number }
  | { type: "add_one_from_cart", payload: number }
  | { type: "remove_all_from_cart", payload: number }
  | { type: "clear_cart" }
  | { type: "total_amount" }
  | { type: "total_products" };

import { Products } from "../src/interfaces/products";



const URL_BASE = 'https://fakestoreapi.com'

export const getCategories = async (): Promise<string[]> => {
    const res = await fetch(`${URL_BASE}/products/categories`);
    return await res.json();
  };

  export const getProductsForCategories = async (category: string): Promise<Products[]> => {
    const res = await fetch (`${URL_BASE}/products/category/${category}`)
    return await res.json();
  }
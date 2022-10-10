import { Products } from "../src/interfaces/products";

const URL_BASE = 'https://fakestoreapi.com'

export const getProducts = async (quantity: number = 0): Promise<Products[]> => {
    let data;
    try {
        const res = await fetch(`${URL_BASE}/products?limit=${quantity}`);
        data = await res.json();
    } catch (error) {
        console.log(error);
        data = [];
    }
    return data;
}


export interface Products {
    category: string;
    id: number;
    image: string;
    price: number;
    rating?: {
        rate: number,
        count: number,
    }
    title: string,
    description?: string,
}

export interface Cart extends Products {
    amount: number
}

export interface CartType {
    product: Cart
}

export type ProductType = {
    product: Products,
}

export type ProductsType = {
    products: Products[],
  }

  export type CategoryPropsType = {
    products: Products[],
    category: string,
  }
export interface Products {
  category: string;
  id: number;
  image: string;
  price: number;
  rating?: {
    rate: number;
    count: number;
  };
  title: string;
  description?: string;
}

export interface Cart extends Products {
  amount: number;
}

export interface CartType {
  product: Cart;
}

export interface ProductType {
  product: Products;
};

export interface ProductsType {
  products: Products[];
};

export interface CategoryPropsType {
  products: Products[];
  category: string;
};

export interface ProductDetailRouteProps {
  product: Products;
  products: Products[];
}

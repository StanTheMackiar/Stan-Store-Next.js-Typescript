export const getCategories = async (): Promise<string[]> => {
    const res = await fetch(`http://fakestoreapi.com/products/categories`);
    return await res.json();
  };
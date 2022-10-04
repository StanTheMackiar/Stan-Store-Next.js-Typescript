import React, { useContext } from "react";
import styles from "../../../../styles/Store.module.scss";
import filtersContext, {
  FiltersContextType,
} from "../../../context/FiltersContext";
import { ProductsType } from "../../../interfaces/products";
import Card from "../../Products/Card";
import FilterProducts from "./FilterProducts";

const Store = ({ products }: ProductsType) => {
  const { filterProducts } = useContext(filtersContext) as FiltersContextType;
  

  const displayedProducts = filterProducts(products);

  return (
    <>
      <h1>List of Products</h1>
      <section className={styles.ListProductsContainer}>
        <FilterProducts />
        <h3>Showing {displayedProducts.length} products</h3>
        <div className={styles.productsGrid}>
          {displayedProducts.map((el) => (
            <Card
              key={el.id + "search"}
              product={el}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Store;

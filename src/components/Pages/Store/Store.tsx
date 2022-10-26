import React, { useContext } from "react";
import styles from "../../../../styles/Store.module.scss";
import filtersContext, {
  FiltersContextType,
} from "../../../context/FiltersContext";
import { ProductsType } from "../../../interfaces/products";
import { Card, ImageCard, PriceCard, TitleCard } from "../../Products/Card";
import FilterProducts from "./FilterProducts";

const Store = ({ products }: ProductsType) => {
  const { filterProducts } = useContext(filtersContext) as FiltersContextType;

  const displayedProducts = filterProducts(products);

  return (
    <>
      <section className={styles.ListProductsContainer}>
        <FilterProducts />
        <h3>Showing {displayedProducts.length} products</h3>
        <div className={styles.productsGrid}>
          {displayedProducts.map((product) => (
            <Card
              key={product.id + "store"}
              product={product}>
              <ImageCard />
              <TitleCard />
              <PriceCard />
            </Card>
          ))}
        </div>
      </section>
    </>
  );
};

export default Store;

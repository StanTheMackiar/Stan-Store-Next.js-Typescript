import React from "react";
import { SearchPropsResults } from "../../../interfaces/search";
import styles from "../../../../styles/Search.module.scss";
import { Card, ImageCard, PriceCard, TitleCard } from "../../Products/Card";

const SearchResults = ({ query, results }: SearchPropsResults) => {
  return (
    <>
      <h1>Search Results</h1>
      {results.length ? (
        <h3>
          Showing {results.length} results for{" "}
          <span className={styles.span}>{query}</span>
        </h3>
      ) : (
        <h3>
          No products for <span className={styles.span}>{query}</span>
        </h3>
      )}

      <div className={styles.gridContainer}>
        {results.map((product) => (
          <Card
            product={product}
            key={product.id}>
            <ImageCard />
            <TitleCard />
            <PriceCard />
          </Card>
        ))}
      </div>
    </>
  );
};

export default SearchResults;

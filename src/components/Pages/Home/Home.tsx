import React from "react";
import styles from "../../../../styles/Home.module.scss";
import { ProductsType } from "../../../interfaces/products";
import About from "./About";
import Banner from "./Banner";
import NewProducts from "./NewProducts";


const Home = ({products}: ProductsType) => {

  return (
    <article>
      <Banner />
      <NewProducts products={products} />
      <About />
    </article>
  );
};

export default Home;

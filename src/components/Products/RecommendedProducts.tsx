import { ProductDetailRouteProps, Products } from "../../interfaces/products";
import Card from "./Card";
import styles from "../../../styles/RecommendedProducts.module.scss";
import { useEffect, useState } from "react";

const RecommendedProducts = ({ products, product }: ProductDetailRouteProps) => {

    const [relatedProducts, setRelatedProducts] = useState<Products[]>([]);


    useEffect(() => {
        
        const matchProductsForCategories = products.filter(
            (el) => el.category === product.category
          );
          const productsWithoutActualProduct = matchProductsForCategories.filter(
            (el) => el.id !== product.id
          );
          
          let aleatoryNumber1 = Math.floor(Math.random() * productsWithoutActualProduct.length)
          let aleatoryNumber2 = Math.floor(Math.random() * productsWithoutActualProduct.length)

          while (aleatoryNumber1 === aleatoryNumber2) {
            aleatoryNumber2 = Math.floor(Math.random() * productsWithoutActualProduct.length)
          }
          
          setRelatedProducts([productsWithoutActualProduct[aleatoryNumber1], productsWithoutActualProduct[aleatoryNumber2]])

    }, [product.category, product.id, products]);
    

  return (
    <section>
      <h2>Related Products</h2>
      <div className={styles.productsGrid}>
        {relatedProducts.map((product) => (
          <Card
            product={product}
            key={product.id}
          />
        ))}
      </div>
    </section>
  );
};

export default RecommendedProducts;

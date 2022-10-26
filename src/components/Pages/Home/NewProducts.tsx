import { Button } from "@mui/material";
import { Products, ProductsType } from "../../../interfaces/products";
import Link from "next/link";
import styles from "../../../../styles/Home.module.scss";
import { Card, ImageCard, PriceCard, TitleCard } from "../../Products/Card";

const NewProducts = ({ products }: ProductsType) => (
  <div className={styles.newProductsSection}>
    <h1>New products</h1>
    <div className={styles.productsGrid}>
      {products &&
        products.map((product: Products) => (
          <Card
            product={product}
            key={product.id}>
            <ImageCard newTag />
            <TitleCard />
            <PriceCard />
          </Card>
        ))}
    </div>
    <Link href="/store">
      <a>
        <Button
          sx={{ m: "1.2rem" }}
          variant="contained"
          color="primary"
          disableElevation>
          Show more
        </Button>
      </a>
    </Link>
  </div>
);

export default NewProducts;

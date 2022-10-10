import { getProducts } from "../../services/getProducts";
import Layout from "../../src/components/Layout/Layout";
import Store from "../../src/components/Pages/Store/Store";
import { ProductsType } from "../../src/interfaces/products";

const StoreRoute = ({ products }: ProductsType) => (
  <Layout title="Store">
    <Store products={products} />
  </Layout>
);

export default StoreRoute;

export async function getStaticProps() {
  const products = await getProducts();

  return {
    props: {
      products,
    },
  };
}

import { getProducts } from "../services/getProducts";
import Layout from "../src/components/Layout/Layout";
import Home from "../src/components/Pages/Home/Home";
import { ProductsType } from "../src/interfaces/products";

const HomeRoute = ({ products }: ProductsType) => {

  return (
    <Layout title="Welcome">
      <Home products={products} />
    </Layout>
  );
};

export default HomeRoute;

export async function getStaticProps() {
  const products = await getProducts(4);

  return {
    props: {
      products,
    },
  };
}

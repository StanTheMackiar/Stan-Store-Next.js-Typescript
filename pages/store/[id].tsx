import React from "react";
import { getProducts } from "../../services/getProducts";
import Layout from "../../src/components/Layout/Layout";
import ProductDetails from "../../src/components/Products/ProductDetails";
import RecommendedProducts from "../../src/components/Products/RecommendedProducts";
import { ProductDetailRouteProps } from "../../src/interfaces/products";
import { convertToPath } from "../../src/utility/utils";

interface StaticProps {
  params: { id: string };
}

const ProductsDetailRoute = ({
  product,
  products,
}: ProductDetailRouteProps) => {
  return (
    <Layout title="Product">
      <>
        <ProductDetails product={product} />
        <RecommendedProducts
          products={products}
          product={product}
        />
      </>
    </Layout>
  );
};

export default ProductsDetailRoute;

export async function getStaticPaths() {
  const products = await getProducts();
  const paths = products.map((product) => {
    return {
      params: {
        id: convertToPath((product.title).trim()),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: StaticProps) {
  const { id } = params;
  const products = await getProducts();
  const product = products.find(
    (product) => convertToPath((product.title).trim()) === id
  );

  return {
    props: {
      product,
      products,
    },
  };
}

import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import { getProducts } from "../../services/getProducts";
import Layout from "../../src/components/Layout/Layout";
import ProductDetails from "../../src/components/Products/ProductDetails";
import RelatedProducts from "../../src/components/Products/RelatedProducts";
import { ProductDetailRouteProps } from "../../src/interfaces/products";
import { convertToPath } from "../../src/utility/utils";



const ProductsDetailRoute = ({
  product,
  products,
}: ProductDetailRouteProps) => {
  return (
    <Layout title="Product">
      <>
        <ProductDetails product={product} />
        <RelatedProducts
          products={products}
          product={product}
        />
      </>
    </Layout>
  );
};

export default ProductsDetailRoute;

export const getStaticPaths: GetStaticPaths = async () => {
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

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };
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

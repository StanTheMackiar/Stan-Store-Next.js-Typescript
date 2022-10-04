import React from "react";
import { getProducts } from "../../services/getProducts";
import Layout from "../../src/components/Layout/Layout";
import ProductDetails from "../../src/components/Products/ProductDetails";
import { ProductType } from "../../src/interfaces/products";
import { convertToPath } from "../../src/utility/utils";

interface StaticProps {
  params: { id: string };
}

const ProductsDetail = ({ product }: ProductType) => {
  return (
    <Layout title="Product">
      <ProductDetails product={product} />
    </Layout>
  );
};

export default ProductsDetail;


export async function getStaticPaths() {
  const products = await getProducts();
  const paths = products.map((product) => {
    return {
      params: {
        id: convertToPath(product.title),
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
    (product) => convertToPath(product.title) === id
  );

  return {
    props: {
      product,
    },
  };
}

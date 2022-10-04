import React from 'react'
import { getCategories, getProductsForCategories } from '../../services/getCategories';
import Layout from '../../src/components/Layout/Layout';
import CategoryProducts from '../../src/components/Pages/Categories/CategoryProducts';
import { CategoryPropsType, ProductsType } from '../../src/interfaces/products';

interface StaticProps {
    params: { category: string };
  }
  


const Categories = ( { products, category }: CategoryPropsType) => {
  return (
    <Layout title={category}>
      <CategoryProducts category={category} products={products} />
    </Layout>
  )
}

export default Categories

export async function getStaticPaths() {
    const categories = await getCategories();
    const paths = categories.map((category) => {
      return {
        params: {
          category,
        },
      };
    });
  
    return {
      paths,
      fallback: false,
    };
  }
  
  export async function getStaticProps({ params }: StaticProps) {
    const { category } = params;
    const products = await getProductsForCategories(category);
  
    return {
      props: {
        products,
        category,
      },
    };
  }
  
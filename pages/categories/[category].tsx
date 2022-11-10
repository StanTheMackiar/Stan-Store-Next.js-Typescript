import { GetStaticPaths, GetStaticProps } from 'next';
import { getCategories, getProductsForCategories } from '../../services/getCategories';

import Layout from '../../src/components/Layout/Layout';
import CategoryProducts from '../../src/components/Pages/Categories/CategoryProducts';
import { CategoryPropsType } from '../../src/interfaces/products';

  


const Categories = ( { products, category }: CategoryPropsType) => {
  return (
    <Layout title={category}>
      <CategoryProducts category={category} products={products} />
    </Layout>
  )
}

export default Categories

export const getStaticPaths: GetStaticPaths = async () => {
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
  
  export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { category } = params as {category: string};
    const products = await getProductsForCategories(category);
  
    return {
      props: {
        products,
        category,
      },
    };
  }
  
import { useReducer, useEffect } from 'react'
import { getProducts } from '../../services/getProducts'
import Layout from '../../src/components/Layout/Layout'
import Store from '../../src/components/Pages/Store/Store'
import { Products, ProductsType } from '../../src/interfaces/products'
import { shoppingInitialState, shoppingReducer } from '../../src/reducers/shoppingReducer'


const StoreRoute = ({products}: ProductsType) => {

  // const [cartState, dispatch] = useReducer(shoppingReducer, shoppingInitialState);

  // useEffect(() => {
  //   console.log(products);
    
  //   dispatch({ type: "put_products_to_cart", payload: products})

  //   console.log(cartState.products)
  // }, []);


  return (
    <Layout title='Store'>
      <Store products={products}/>
    </Layout>
  )
}

export default StoreRoute

export async function getStaticProps() {
  const products = await getProducts();

  return {
    props: {
      products,
    },
  };
}

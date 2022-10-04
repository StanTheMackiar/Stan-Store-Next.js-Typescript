import React from 'react'
import Layout from '../src/components/Layout/Layout'
import Checkout from '../src/components/Pages/Checkout/Checkout'

const CheckoutRoute = () => {
  return (
    <Layout title="Thanks for your purchase">
        <Checkout />
    </Layout>
  )
}

export default CheckoutRoute
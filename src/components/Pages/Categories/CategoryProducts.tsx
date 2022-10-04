import React from 'react'
import { CategoryPropsType } from '../../../interfaces/products'
import Store from '../Store/Store'

const CategoryProducts = ( { products, category }: CategoryPropsType) => {
  return (
    <>
    <h1 style={{textTransform: "capitalize"}}>{category}</h1>
    <Store products={products} />
    </>
  )
}

export default CategoryProducts
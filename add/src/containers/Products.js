import React, { useContext } from 'react'
// import { useSelector } from 'react-redux';
import { prodactContext } from '../components/constext/prodact-context'
import { useStore } from '../components/hook-story/store'

import ProductItem from '../components/Products/ProductItem'
import './Products.css'

const Products = (props) => {
  // const productList = useSelector(state => state.shop.products);
  const state = useStore()[0]
  // const ctx = useContext(prodactContext).prodact
  return (
    <ul className="products-list">
      {state.prodact.map((prod) => (
        <ProductItem
          key={prod.id}
          id={prod.id}
          title={prod.title}
          description={prod.description}
          isFav={prod.isFavorite}
        />
      ))}
    </ul>
  )
}

export default Products

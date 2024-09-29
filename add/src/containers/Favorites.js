import React, { useContext } from 'react'
// import { useSelector } from 'react-redux'

import FavoriteItem from '../components/Favorites/FavoriteItem'
import './Products.css'
// import { prodactContext } from '../components/constext/prodact-context'
import { useStore } from '../components/hook-story/store'

const Favorites = (props) => {
  // const ctx = useContext(prodactContext).prodact.filter((p) => p.isFavorite)
  const ctx = useStore()[0].prodact.filter((p) => p.isFavorite)
  // const favoriteProducts = useSelector(state =>
  //   state.shop.products.filter(p => p.isFavorite)
  // );

  let content = <p className="placeholder">Got no favorites yet!</p>
  if (ctx.length > 0) {
    content = (
      <ul className="products-list">
        {ctx.map((prod) => (
          <FavoriteItem
            key={prod.id}
            id={prod.id}
            title={prod.title}
            description={prod.description}
          />
        ))}
      </ul>
    )
  }
  return content
}

export default Favorites

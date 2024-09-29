import React from 'react'
// import { prodactContext } from '../constext/prodact-context'
import { useStore } from '../hook-story/store'

import Card from '../UI/Card'
import './ProductItem.css'

const ProductItem = (props) => {
  const dispatch = useStore()[1]

  // const tctx = useContext(prodactContext).toggleFav
  const toggleFavHandler = () => {
    dispatch('Togggelfav', props.id)
  }

  return (
    <Card style={{ marginBottom: '1rem' }}>
      <div className="product-item">
        <h2 className={props.isFav ? 'is-fav' : ''}>{props.title}</h2>
        <p>{props.description}</p>
        <button
          className={!props.isFav ? 'button-outline' : ''}
          onClick={toggleFavHandler}
        >
          {props.isFav ? 'Un-Favorite' : 'Favorite'}
        </button>
      </div>
    </Card>
  )
}

export default ProductItem

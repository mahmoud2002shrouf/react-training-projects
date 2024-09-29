import React, { createContext, useState } from 'react'
export const prodactContext = createContext({
  prodact: [],
  toggleFav: (id) => {},
})
export default (props) => {
  const [prodactLest, SetprodactLest] = useState([
    {
      id: 'p1',
      title: 'Red Scarf',
      description: 'A pretty red scarf.',
      isFavorite: false,
    },
    {
      id: 'p2',
      title: 'Blue T-Shirt',
      description: 'A pretty blue t-shirt.',
      isFavorite: false,
    },
    {
      id: 'p3',
      title: 'Green Trousers',
      description: 'A pair of lightly green trousers.',
      isFavorite: false,
    },
    {
      id: 'p4',
      title: 'Orange Hat',
      description: 'Street style! An orange hat.',
      isFavorite: false,
    },
  ])
  const toggleFavs = (prodactid) => {
    SetprodactLest((curantprodactlest) => {
      const prodIndex = curantprodactlest.findIndex((p) => p.id === prodactid)
      const newFavStatus = !curantprodactlest[prodIndex].isFavorite
      const updatedProducts = [...curantprodactlest]
      updatedProducts[prodIndex] = {
        ...curantprodactlest[prodIndex],
        isFavorite: newFavStatus,
      }
      return updatedProducts
    })
  }
  return (
    <prodactContext.Provider
      value={{ prodact: prodactLest, toggleFav: toggleFavs }}
    >
      {props.children}
    </prodactContext.Provider>
  )
}

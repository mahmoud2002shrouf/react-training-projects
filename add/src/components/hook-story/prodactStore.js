import { initStore } from './store'

const configerStore = () => {
  const actions = {
    Togggelfav: (curstate, prodactid) => {
      const proindex = curstate.prodact.findIndex((p) => p.id === prodactid)
      const newFaveState = !curstate.prodact[proindex].isFavorite
      const UpdateedProdact = [...curstate.prodact]
      UpdateedProdact[proindex] = {
        ...curstate.prodact[proindex],
        isFavorite: newFaveState,
      }
      return { prodact: UpdateedProdact }
    },
  }
  initStore(actions, {
    prodact: [
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
    ],
  })
}
export default configerStore

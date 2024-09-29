import React, { useState } from 'react'
import Cart from './components/cart/Cart'
import Heder from './components/layout/Heder'
import Meals from './components/meals/Meals'
import Cartprovider from './story/Cartprovider'

function App() {
  const [flex, setflex] = useState(false)
  const handelpag = () => {
    setflex(true)
  }
  const handelpags = () => {
    setflex(false)
  }
  return (
    <Cartprovider>
      {flex && <Cart nonshow={handelpags} />}
      <Heder onshoe={handelpag} />

      <main>
        <Meals />
      </main>
    </Cartprovider>
  )
}

export default App

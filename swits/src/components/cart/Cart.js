import React, { useContext, useState } from 'react'
import { Cartcontext } from '../../story/Cartcontext'
import Model from '../UL/Model'
import Checkout from './Checkout'
import classes from './Cart.module.css'
import CartItem from './CartItem'

export default function Cart(props) {
  const ctx = useContext(Cartcontext)
  const [orderviw, setorderviw] = useState(false)
  const totalamount = `$${ctx.totalamount.toFixed(2)}`
  const isval = ctx.totalamount > 0
  const additem = (item) => {
    ctx.additem(item)
  }
  const removeitem = (id) => {
    ctx.removeitem(id)
  }
  const handelOrder = () => {
    setorderviw(true)
  }
  const oncansel = () => {
    setorderviw(false)
  }

  const item = (
    <ul className={classes['cart-items']}>
      {ctx.item.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={removeitem.bind(null, item.id)}
          onAdd={additem.bind(null, item)}
        />
      ))}
    </ul>
  )

  const suborderhandel = (orderdata) => {
    fetch('https://react-http-b5e16-default-rtdb.firebaseio.com/order.json', {
      method: 'POST',
      body: JSON.stringify({
        user: orderdata,
        orderitem: ctx.item,
      }),
    })
  }

  return (
    <Model nonshow={props.nonshow}>
      {item}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalamount}</span>
      </div>
      {orderviw && <Checkout onconfourm={suborderhandel} oncansel={oncansel} />}
      {!orderviw && (
        <div className={classes.actions}>
          <button className={classes['.button--alt']} onClick={props.nonshow}>
            close
          </button>
          {isval && (
            <button className={classes.button} onClick={handelOrder}>
              order
            </button>
          )}
        </div>
      )}
    </Model>
  )
}

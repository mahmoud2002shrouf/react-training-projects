import React, { useContext, useState, useEffect } from 'react'
import { Cartcontext } from '../../story/Cartcontext'
import CartIcon from '../cart/CartIcon'
import classes from '../layout/HederCartBuuton.module.css'

export default function HederCartBuuton(props) {
    const [val, setval] = useState(false)
    const ctx = useContext(Cartcontext)
    const { item } = ctx

    const yourcart = item.reduce((numberr, item) => {
        return numberr + item.amount
    }, 0)
    useEffect(() => {
        if (item.length === 0) {
            return
        }

        setval(true)
        const timer = setTimeout(() => {
            setval(false)
        }, 200)
        return () => {
            clearTimeout(timer)
        }
    }, [item])
    const buttonclasses = `${classes.button} ${val ? classes.bump : ''}`
    return (
        <button className={buttonclasses} onClick={props.onshoe}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>your cart</span>
            <span className={classes.badge}>{yourcart}</span>
        </button>
    )
}

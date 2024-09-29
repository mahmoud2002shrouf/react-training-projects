import React, { useContext } from 'react';
import { Cartcontext } from '../../../story/Cartcontext';
import MealForm from './MealForm';
import classes from './MealItem.module.css';

export default function MealItem(props) {
    const ctx = useContext(Cartcontext);
    const handelamount = (amount) => [
        ctx.additem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        })

    ]
    const price = `$${props.price.toFixed(2)}`
    return (
        <li className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{price}</div>

            </div>
            <div> <MealForm onaddamount={handelamount} /></div>
        </li>
    )
}

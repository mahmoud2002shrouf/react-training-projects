import React, { useRef, useState } from 'react';
import Input from '../../UL/Input';
import classes from './MealForm.module.css'

export default function MealForm(props) {
    const [isval, setisval] = useState(true)
    const cartRef = useRef();
    const handelamount = (e) => {
        e.preventDefault();
        const amountref = cartRef.current.value;
        const amount = +amountref;
        if (amountref.trim().length === 0 || amount > 5 || amount < 1) {
            setisval(false);
            return;
        }

        props.onaddamount(amount)


    }
    return (
        <form className={classes.form} onSubmit={handelamount}>
            <Input ref={cartRef} label={"Amount"} input={{
                type: 'number',
                min: 1,
                max: 5,
                step: 1,
                defaultValue: 1,
                id: 'amount_' + props.id
            }} />
            <button>+ add</button>
            {!isval && <p>pleas enter amount valid</p>}
        </form>
    )
}

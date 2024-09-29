import React, { useState } from 'react'
import Form from './form'
import "./Newitem.css"

export default function Newitem(props) {
    const [back, setback] = useState(false);

    const newexitem = (e) => {
        const expenseData = {
            ...e,
            id: Math.random().toString()
        };
        props.onsave(expenseData);


    }
    const canselform = (e) => {
        setback(!back)
    }
    const canselforms = () => {
        setback(false)
    }
    return (
        <div className='new-expense'>
            {back === true ? <Form onsave={newexitem} onsaves={canselforms} /> : <button onClick={canselform}>Add new item</button>}


        </div>
    )
}

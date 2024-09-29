import React from 'react';
import '../progect/ExpenseItem.css';
import Card from './Card';
import Date from './Date';


export default function Exitem(props) {
    const dates = props.dates;


    return (
        <Card className='expense-item'>

            <Date date={dates} />



            <div className='expense-item__description'>
                <h2>{props.names}</h2>
                <div className='expense-item__price'>{props.prices}</div>
            </div></Card>




    )
}

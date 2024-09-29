import React from 'react'
import '../progect/ExpenseDate.css';


export default function Date(props) {
    const manth = props.date.toLocaleString('en-US', { month: 'long' })
    const day = props.date.toLocaleString('en-US', { day: '2-digit' })
    const year = props.date.getFullYear()
    return (
        <div className='expense-date'>
            <div className='expense-date__month'>{manth}</div>
            <div className='expense-date__day'>{day}</div>
            <div className='expense-date__year'>{year}</div>
        </div>
    )
}

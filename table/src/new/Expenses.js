import React, { useState } from 'react'
import Card from './Card'
import Exitem from './Exitem'
import '../progect/Expenses.css';
import ExpensesFilter from './Filter';
import ExpensesChart from './expensesChart';

export default function Expenses(props) {
    const [year, setyear] = useState("2020");
    const changefilter = (e) => {
        setyear(e);

    }
    const filters = props.data.filter((e) => { return e.dateion.getFullYear().toString() === year })


    return (

        <div>


            <Card className="expenses">
                <ExpensesChart expenses={filters} />



                <ExpensesFilter selcted={year} onChangeFilter={changefilter} />
                {filters.length === 0 ? <p className='c-red'>not found any thing</p> : (

                    filters.map((ex) => <Exitem
                        key={ex.id}
                        names={ex.titel}
                        prices={ex.price}
                        dates={ex.dateion}
                    />)
                )
                }






            </Card>
        </div>
    )
}

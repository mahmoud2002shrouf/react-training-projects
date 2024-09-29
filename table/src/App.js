import React, { useState } from 'react';
import Expenses from './new/Expenses';
import Newitem from './new/newitem';

let datasion = [
    { id: 1, titel: "tv", price: 1001, dateion: new Date(2020, 5, 4) },
    { id: 2, titel: "tv2", price: 1001, dateion: new Date(2020, 11, 9) },
    { id: 3, titel: "tv3", price: 1001, dateion: new Date(2020, 11, 9) },
];


export default function App() {

    const [expenses, setExpenses] = useState(datasion)
    const newexit = (e) => {
        setExpenses((prexpensev) => { return [e, ...prexpensev] });
    }

    return (
        <div>
            <Newitem onsave={newexit} />

            <Expenses data={expenses} />





        </div>
    )

}
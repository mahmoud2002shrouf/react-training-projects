
import React, { useState } from 'react';
import "./form.css"

export default function Form(props) {
    const [titel, settitel] = useState('')
    const [date, setdate] = useState('');
    const [price, setprice] = useState('')
    // const [userinput, setuserinput] = useState({
    //     entertitel: "",
    //     enterprice: "",
    //     enterdate:""
    // })
    const handeltitle = (e) => {
        settitel(e.target.value)
        // setuserinput({ ...userinput, entertitel: e.target.value });
        // setuserinput((e) => { return ({ ...e, entertitel: e.target.value }) });

    }

    const handelprice = (e) => {
        setprice(e.target.value)

        // setuserinput((e)=> {return({...e,enterprice:e.target.value})} );
    }

    const handeldate = (e) => {
        setdate(e.target.value)

        // setuserinput({...userinput,enterdate:e.target.value});
    }
    const handelform = (e) => {
        e.preventDefault();
        const datasub = {
            titel: titel,
            price: price,
            dateion: new Date(date)
        };
        props.onsave(datasub)
        settitel("");
        setprice("");
        setdate("");
    }

    return (
        <form onSubmit={handelform}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label >titel</label>
                    <input type='text' value={titel} onChange={handeltitle} />
                </div>
                <div className='new-expense__control'>
                    <label>price</label>
                    <input type='number' value={price} min='0.01' step="0.01" onChange={handelprice} />
                </div>
                <div className='new-expense__control'>
                    <label>date</label>
                    <input type='date' value={date} min='2019-1-1' max='2022-1-1' onChange={handeldate} />
                </div>
            </div>

            <button typr="submit" className='new-expense__actions'>sup</button>
            <button type='button' onClick={props.onsaves}>cansel</button>
        </form>
    )
}

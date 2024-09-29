import React from 'react';
import meals from '../assets/meals.jpg'
import classes from '../layout/Heder.module.css'
import HederCartBuuton from './HederCartBuuton';

export default function Heder(props) {
    return (
        <React.Fragment >
            <header className={classes.header}>
                <h1>React Meals</h1>
                <HederCartBuuton onshoe={props.onshoe} />

            </header>
            <div className={classes['main-image']}><img src={meals} alt={"soso"} /></div>
        </React.Fragment>
    )
}

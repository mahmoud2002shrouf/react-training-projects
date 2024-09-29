import React from 'react';
import classes from './Model.module.css';
import ReactDOM from 'react-dom';


const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.nonshow}></div>

}
const Modelover = (props) => {
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>

}
export default function Model(props) {
    const portolElement = document.getElementById('overlays');
    return (
        <React.Fragment>
            {ReactDOM.createPortal(<Backdrop nonshow={props.nonshow} />, portolElement)}
            {ReactDOM.createPortal(<Modelover >{props.children}</Modelover>, portolElement)}
        </React.Fragment>)
}

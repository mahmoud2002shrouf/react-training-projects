import React, { useContext } from 'react';
import { ThemeContext } from './contax';

export default function Heder() {
    const themeContext = useContext(ThemeContext);
    let style = {};
    if (themeContext.user === 'dark') {
        style = {
            background: '#000',
            color: '#fff'
        }
    } else {
        style = {
            background: '#fff',
            color: '#000'

        }
    }
    return (

        <div style={style}>Heder <hr /></div>
    )
}

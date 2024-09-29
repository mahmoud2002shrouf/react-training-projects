import React, { useContext } from 'react'
import { ThemeContext } from './contax'

export default function Login() {

    const themeContext = useContext(ThemeContext);

    let stylee = {}

    if (themeContext.user === 'dark') {
        stylee = {
            background: '#000',
            color: '#fff'

        }
    } else {
        stylee = {
            background: '#fff',
            color: 'blue'
        }

    };

    return (
        <div style={stylee}>
            login</div>
    );
}


import React, { useContext } from 'react';
import { ThemeContext } from './contax';

export default function Click() {
    const themeContext = useContext(ThemeContext);

    return (
        <div>
            <button onClick={themeContext.changcolor}> {themeContext.user} </button>
        </div>
    )
}

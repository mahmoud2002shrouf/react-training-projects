import React, { useState } from 'react';

export const ThemeContext = React.createContext()
export default function ThemeProvider(props) {
    const [user, setuser] = useState('dark');
    function changcolor() {
        setuser(user === 'dark' ? 'light' : 'dark');
    }
    return (

        <ThemeContext.Provider value={{ user, changcolor }}>
            {props.children}

        </ThemeContext.Provider>
    )
}

import React, { createContext, useEffect, useState } from 'react'
export const thecontext = createContext();


export default function Context(props) {

    const [othe, setothe] = useState({});
    useEffect(() => {
        const token = localStorage.getItem('token');
        const email = localStorage.getItem('email');
        if (email) {
            setothe({ email, token })
        }


    })
    return (
        <thecontext.Provider value={{ othe, setothe }}>
            {props.children}
        </thecontext.Provider>
    )
}

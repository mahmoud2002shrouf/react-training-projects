import React, { useState } from 'react';

export const UserContaxe = React.createContext();


export default function Teamuser(props) {
    const [user, setuser] = useState('dark')
    return (
        <UserContaxe.Provider value={{ user, setuser }}>
            {props.Children}
        </UserContaxe.Provider>
    );
}

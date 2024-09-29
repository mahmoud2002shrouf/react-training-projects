import React, { useContext } from 'react';
import Context, { thecontext } from './login+useContexe/context';
import Heder from './login+useContexe/Heder';
import Login from './login+useContexe/login';

function App() {
    const thecontexts = useContext(thecontext);
    return (
        <div className="App">
            <Heder />
            {thecontexts.othe.email ? <h2 className='mt-5 ms-5'> welocome</h2> : <Login />}
        </div>
    );
}

// export default App;

function addstory() {
    return (
        <Context>
            <App />
        </Context>
    )
}
export default addstory;

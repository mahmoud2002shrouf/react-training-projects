import React from 'react';
import ThemeProvider from './newprogect/contax';
import Login from './newprogect/Login';
import Heder from './newprogect/Heder';
import Click from './newprogect/Click';


function App() {
    return (
        <div className="App">
            <ThemeProvider>
                <Heder />
                <Click />
                <Login />
            </ThemeProvider>
        </div>
    );
}

export default App;
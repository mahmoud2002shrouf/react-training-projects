import React from 'react';
import { ThemeProvider } from './usecontaxxe/ThemeContext';
import Header from './usecontaxxe/layout';
import Login from './usecontaxxe/Login';
import ToggleTheme from './usecontaxxe/ToggleTheme';

function App() {
    return (
        <div className="App">
            <ThemeProvider>
                <Header />
                <ToggleTheme />
                <Login />
            </ThemeProvider>
        </div>
    );
}

export default App;
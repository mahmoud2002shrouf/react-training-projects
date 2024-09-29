import { useEffect, useState } from 'react';
import './App.css';
import Heder from './com/heder';
import Seder from './com/Seder';

function App() {
    const [visval, setvesval] = useState(true);

    useEffect(() => {
        console.log("فاضي يا معلم");
    }, [])
    useEffect(() => {
        if (visval === false) {
            console.log("تم الاخفاء")
        };
    }, [visval])
    useEffect(() => {
        if (visval === true) {
            console.log(" نورت")
        };
    }, [visval])
    useEffect(() => {
        if (visval === true) {
            console.log(" نورت")
        };
    }, [visval])



    return (

        <div className="App">
            <Heder />

            {visval ? <>

                <Seder /></> : null}
            <button onClick={() => { setvesval(!visval); console.log(visval) }}>اخفاء</button>


        </div>
    );
}

export default App;

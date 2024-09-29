// //هاد الشغل للclass


import React, { Component, createRef, useEffect, useRef, useState } from 'react'

// export default class Hello extends Component {
//     constructor() {
//         super();
//         this.inputRf = createRef();
//     }
//     Run = () => {
//         this.inputRf.current.focus();

//     }
//     render() {
//         return (
//             <div>Hello
//                 <input ref={this.inputRf} />
//                 <button onClick={this.Run}>onClick</button>
//             </div>

//         )
//     }
// }
// import React from 'react'

export default function Hello() {
    const [name, setname] = useState('');
    const [lname, setlname] = useState('');
    const Refone = useRef();
    const Reftow = useRef();
    const Refthree = useRef();
    useEffect(() => {
        Refone.current.focus();
    }, []);
    function clickdoun(e) {
        if (e.key === 'Enter') {
            Reftow.current.focus();
        } else {
            Refone.current.focus();
        }

    }
    function clickdountow(e) {
        if (e.key === 'Enter') {
            Refthree.current.focus();
        } else {
            Reftow.current.focus();
        }

    }


    return (
        <div>
            <input ref={Refone} value={name} onKeyDown={clickdoun} onChange={(e) => setname(e.target.value)} placeholder="first name" />
            <input ref={Reftow} value={lname} onKeyDown={clickdountow} onChange={(e) => setlname(e.target.value)} placeholder="last name" />
            <button ref={Refthree}>save</button>
        </div>


    )
}

import React, { useContext, useState } from 'react';
import { thecontext } from './context';

export default function Login() {
    const thecontexts = useContext(thecontext);
    const [email, setemail] = useState('');
    const [pass, setpass] = useState('');
    function onlogin(e) {
        e.preventDefault();
        if (pass === '123') {
            const token = 'abc';
            localStorage.setItem('token', token);
            localStorage.setItem('email', email);
            thecontexts.setothe({ token, email })
        } else {
            alert('لم تزبط معنا');

        }


    }

    return (
        <form className='mt-5 ms-5' onSubmit={onlogin}>
            <div className="row mb-3">
                <label for="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-10">
                    <input type="email" className="form-control w-50 " value={email} id="inputEmail3" onChange={(e) => setemail(e.target.value)} />
                </div>
            </div>
            <div className="row mb-3">
                <label for="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                <div className="col-sm-10">
                    <input type="password" className="form-control w-50" id="inputPassword3" value={pass} onChange={(e) => setpass(e.target.value)} />
                </div>
            </div>
            <button type="submit" className="btn btn-primary">Sign in</button>
        </form>

    )
}

import React, { useContext } from 'react';
import { thecontext } from './context';

export default function Heder() {
    const thecontexts = useContext(thecontext);
    function logout() {
        thecontexts.setothe({});
        localStorage.removeItem('token');
        localStorage.removeItem('email');

    }
    return (
        <nav class="navbar bg-light">
            <div class="container-fluid">

                <a href='#/' className="navbar-brand ms-4">Navbar</a> {thecontexts.othe.email ? <div>



                    <p className=' me-5'> {thecontexts.othe.email}</p>
                    <button type="button" class="btn btn-primary" onClick={logout}>logout</button>
                </div> : <p>you need login</p>
                }


            </div>
        </nav>
    )
}

import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { Authcontext } from '../Contexts/Authcontext';

const Signedoutlinks = () =>{

    const {Signout, user } = useContext(Authcontext);

    const handlesignout = () =>{
        Signout();
    }
    return(
        <div>
            <li><Link className="white-text" to="/dashboard">{ user===null? 'Loading..' : user.displayName}</Link></li>
            <li>
                    
                <button  onClick={handlesignout} className="mybutton" >
                Sign Out
                </button>
            </li>
        </div>
    )
}

export default Signedoutlinks;
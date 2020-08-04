import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Authcontext } from '../Contexts/Authcontext';
import Signedoutlinks from '../Links/Signedoutlinks';
import Signedinlinks from '../Links/Signedinlinks';




const Navbar = () =>{
    const {loginstatus} = useContext(Authcontext);
    
    if(loginstatus){
        return(
            <div >
                <nav className="green accent-3">
                    <div className="nav-wrapper">
                        <Link to='' className="brand-logo">PASSWORD SAVER</Link>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <Signedoutlinks/>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
    else{
        return(
            <nav className="green accent-3">
                <div className="nav-wrapper">
                    <Link to='' className="brand-logo">PASSWORD SAVER</Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <Signedinlinks/>
                    </ul>
                </div>
            </nav>
        )
        
    }
}

export default Navbar;
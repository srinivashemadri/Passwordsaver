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
                <nav className="nav-wrapper green accent-3">
                    <div className="nav-wrapper">
                        <Link to='' className="brand-logo">PASSWORD SAVER</Link>
                        <Link to='' className="sidenav-trigger" data-target="mobile-links">
                            <i className="material-icons">menu</i>
                        </Link>
                        <ul className="right hide-on-med-and-down">
                            <Signedoutlinks/>
                        </ul>
                    </div>
                </nav>
                <ul className="sidenav" id="mobile-links">
                    <Signedoutlinks/>
                </ul>
            </div>
        )
    }
    else{
        return(
            <div >
                <nav className="nav-wrapper green accent-3">
                    <div className="nav-wrapper">
                        <Link to='' className="brand-logo">PASSWORD SAVER</Link>
                        <Link to='' className="sidenav-trigger" data-target="mobile-links">
                            <i className="material-icons">menu</i>
                        </Link>
                        <ul className="right hide-on-med-and-down">
                            <Signedinlinks/>
                        </ul>
                    </div>
                </nav>
                <ul className="sidenav" id="mobile-links">
                    <Signedinlinks/>
                </ul>
            </div>
        )
        
    }
}

export default Navbar;
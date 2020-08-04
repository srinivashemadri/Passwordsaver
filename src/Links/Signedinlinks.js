import React from 'react'
import { Link } from 'react-router-dom';

const Signedinlinks = () =>{
    return(
        <div>
            <li><Link className="white-text" to="/signup">Sign Up</Link></li>
            <li><Link className="white-text" to="/signin">Sign In</Link></li>
        </div>
    )
}

export default Signedinlinks;
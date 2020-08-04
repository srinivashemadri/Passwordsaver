import React, { useState, useContext } from 'react'
import { Authcontext } from '../Contexts/Authcontext';

const Signin = () =>{

    
    const [email, changeemail] = useState('');
    const [password, changepassword] = useState('');
    
    const {Signin} = useContext(Authcontext)

    const handlesubmit = (e) =>{
        e.preventDefault();
        
        Signin(email,password);

    }
    
    return(
        <div className="center-align">
            <form onSubmit={handlesubmit}>
                <div className="card center-align my-card hoverable ">
                    <div className="card-content pink-text">
                        <span className="card-title "> Sign In </span>
                        <div className="input-field">
                            <input required onChange={(e)=>{changeemail(e.target.value)}} id="email" type="email" className="validate"/>
                            <span class="helper-text" data-error="Email is required"></span>
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className="input-field">
                            <input required onChange={(e)=>{changepassword(e.target.value)}} id="password" type="password" className="validate"/>
                            <span class="helper-text" data-error="Password is required"></span>
                            <label htmlFor="password">Password</label>
                        </div>
                    </div>
                    <div className="card-action">
                        <button  className="green accent-3 btn">
                            <i className="Small material-icons">person</i>
                            &nbsp; Sign In
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Signin
import React, { useState, useContext } from 'react'
import { Authcontext } from '../Contexts/Authcontext';

const Signup = () =>{

    const [name, changeName] = useState('');
    const [email, changeemail] = useState('');
    const [password, changepassword] = useState('');
    const [confirmpassword, changeconfirmpassword] = useState('');
    const {Signup} = useContext(Authcontext)

    const handlesubmit = (e) =>{
        e.preventDefault();
        
        if(confirmpassword === password){
            Signup(email,password,name);
        }
        else{
            alert("Passwords should match")
        }

    }
    
    return(
        <form onSubmit={handlesubmit}>
            <div className="card my-card hoverable center-align">
                <div className="card-content pink-text">
                    <span className="card-title">Sign Up</span>
                    <div className="input-field">
                        <input required onChange={(e)=>{changeName(e.target.value)}} id="name" type="text" className="validate"/>
                        <span class="helper-text" data-error="Name is required"></span>
                        <label htmlFor="name">Name</label>
                    </div>
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
                    <div className="input-field">
                        <input required onChange={(e)=>{changeconfirmpassword(e.target.value)}} id="cf_password" type="password" className="validate"/>
                        <span class="helper-text" data-error="Password is required"></span>
                        <label htmlFor ="cf_password">Confirm Password</label>
                    </div>
                    
                
                </div>
                <div className="card-action">
                    <button className="green accent-3 btn">
                        <i className="Small material-icons">person</i>
                        &nbsp; Sign Up
                    </button>
                </div>
            </div>
        </form>
    )
}

export default Signup
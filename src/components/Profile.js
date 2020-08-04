import React, { useContext, useEffect, useState } from 'react'
import { Authcontext } from '../Contexts/Authcontext';

const Profile = () =>{

    const {user, Updateprofile} = useContext(Authcontext)
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    useEffect(()=>{
        if(user != null){
            setEmail(user.email);
            setName(user.displayName);
            
        }
    }, [user])

    const handleSubmit =(e)=>{
        e.preventDefault();
        Updateprofile(name);

    }

    if(user == null){
        return(
            <div>
                Loading...
            </div>
        )
    }
    return(
        <form onSubmit={handleSubmit}>
            <div className="card center-align hoverable">
                <div className="card-content">
                    <div className="input-field">
                        <input  onChange={(e)=>{setEmail(e.target.value)}} readOnly value={ user==null? '': email }   type="email" id="email" className= "validate"/>
                        <label className="active" htmlFor="email">Enter Email</label>
                    </div>
                    <div className="input-field">
                        <input onChange={(e)=>{setName(e.target.value)}} value={user==null? '': name}  type="text" id="name" className="validate" />
                        <label className="active" htmlFor="name">Your Display Name</label>

                    </div>

                </div>
                <div className="card-action">
                    <button className="btn green accent-3">Update Profile</button>

                </div>
                
            </div>
        </form>
    )
}

export default Profile; 
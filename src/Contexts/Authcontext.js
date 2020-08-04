import React, { createContext,  useState, useEffect } from 'react'
import * as firebase from 'firebase'
import {useHistory} from 'react-router-dom'

export const Authcontext = createContext();



const Authcontextprovider = (props) =>{
    const [loginstatus, setLoginstatus] = useState(

    )

    const [user, setUser] = useState(null)
    const [isuserdataloading, setisuserdataloading] = useState(true);

    const history = useHistory();

    const Signout = () =>{
        firebase.auth().signOut().then(()=>{
            alert("Logged out successfully");
            history.push('')
        })
    }

    const Signin = (email,password) =>{
        firebase.auth().signInWithEmailAndPassword(email,password).then((result)=>{            
            history.push('dashboard')
        }).catch((err)=>{
            alert(err.message)
        })

    }

    const Signup = (email,password,name) =>{
        firebase.auth().createUserWithEmailAndPassword(email,password).then((result)=>{
            result.user.updateProfile({displayName: name});
            alert("Account creation successfully!");
            history.push('dashboard')
        }).catch((err)=>{
            alert(err.message)
        })
    }

    const Updateprofile = (name) =>{
        user.updateProfile({displayName: name}).then(()=>{
            alert("Profile updated successfully")
        })
    }

    useEffect(()=>{
        
        firebase.auth().onAuthStateChanged((user)=>{
            setisuserdataloading(false);
            if(user == null){
                setLoginstatus(false);
            }
            else{
                setLoginstatus(true)
                setUser(user);
            }
        })
    },[user])

    

    return(
        <Authcontext.Provider value={{loginstatus,isuserdataloading, Signin, Signup, Signout, user, Updateprofile}}>
            {props.children}
        </Authcontext.Provider>
    )
}

export default Authcontextprovider
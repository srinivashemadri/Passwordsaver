import React, { createContext, useState, useEffect, useContext } from 'react'
import * as firebase from 'firebase';
import { Authcontext } from './Authcontext';
import { useHistory } from 'react-router-dom';

export const Databasecontext = createContext();

const Databasecontextprovider = (props) =>{

    const [websites,updateWebsites] = useState( [] );
    const {user} = useContext(Authcontext);
    const [iswebsitesloading,setiswebsitesloading] = useState(true)
    
    const history = useHistory();

    const addAwebsite = (websitename,websiteurl,websitepassword, uid) =>{
        const ts = Date.now().toString();
        
        firebase.firestore().collection("users").doc(uid).collection("websites").doc(ts).set({
            websitename,websiteurl,websitepassword
        }).then((value)=>{
            
            updateWebsites([...websites, {'id': ts,websitename,websiteurl,websitepassword}]);
            alert("Website saved successfully");
        })
    }

    const updateAwebsite = (websitename,websiteurl,websitepassword, uid, id) =>{
        
        firebase.firestore().collection("users").doc(uid).collection("websites").doc(id).set({
            websitename,websiteurl,websitepassword
        }).then((value)=>{
            let newwebsites = websites.filter((website)=>{
                return website.id === id? false : true;
            })
            newwebsites.push({id,websitename,websiteurl,websitepassword})
            updateWebsites(newwebsites)
            alert("Website Updated successfully");
            history.push('/savedwebsites')
        })
    }

    const getValues = (id) =>{
        var result =  websites.find((website)=>{
            return website.id === id? true: false;
        })
        return result;
    }

    const deletewebsite = (id,uid) =>{
        
        firebase.firestore().collection("users").doc(uid).collection("websites").doc(id).delete().then(()=>{
            updateWebsites(websites.filter((website)=>{
               return website.id === id? false: true
            }))
        }).catch((err)=>{
            alert(err.message);
        })
        
    }

    useEffect(()=>{
        if(user!=null){
            const dummyarray=[];
            setiswebsitesloading(true);
            firebase.firestore().collection("users").doc(user.uid).collection("websites").get().then((documents)=>{
                documents.docs.forEach((document)=>{

                   const obj={
                       ...document.data(),
                       'id': document.id
                   }
                    
                    dummyarray.push(obj)
                    
                });
                
                updateWebsites(dummyarray)
                setiswebsitesloading(false);
            });
        }
    }, [user])
    

    
    return(
        <Databasecontext.Provider value={{addAwebsite,updateAwebsite,iswebsitesloading, websites,getValues, deletewebsite }}>
            {props.children}
        </Databasecontext.Provider>
    )
}

export default Databasecontextprovider
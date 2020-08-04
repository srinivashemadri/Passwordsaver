import React, { useState, useContext, useEffect } from 'react'
import { Databasecontext } from '../Contexts/Databasecontext';
import { Authcontext } from '../Contexts/Authcontext';

const Addanewwebsite = (props) =>{

    const [websitename, setwebsitename] = useState('');
    const [websiteurl, setwebsiteurl] = useState('');
    const [websitepassword, setwebsitepassword] = useState('');
    const {addAwebsite,updateAwebsite,iswebsitesloading,getValues} = useContext(Databasecontext);
    const {user,isuserdataloading}= useContext(Authcontext);
    

    const handlesubmit = (e) =>{
        e.preventDefault();
        if(result === undefined)
            addAwebsite(websitename,websiteurl,websitepassword, user.uid)
        else
            updateAwebsite(websitename,websiteurl,websitepassword,user.uid, result.id);
        setwebsiteurl('');
        setwebsitename('');
        setwebsitepassword('');

    }
    const paramvalue = (props.match.params.value)
    const result = getValues(paramvalue);
    
    
    useEffect(()=>{
        
        if(result !== undefined){
            setwebsiteurl(result.websiteurl);
            setwebsitepassword(result.websitepassword);
            setwebsitename(result.websitename);
        }
        else{
            if( paramvalue!=='add' && iswebsitesloading === false && isuserdataloading === false && result === undefined )
            alert("No website with this current id");
        }
    },[result,isuserdataloading,iswebsitesloading,paramvalue])
    
    if(isuserdataloading === false){
        if(user !== null){
            if(!iswebsitesloading){
                return(
                    <div className="Add-a-new-website">
                        <div className="card-panel my-card hoverable white">
                            <div className="card-content ">
                            <span className="card-title">Add a new Website</span>
                                <form onSubmit={handlesubmit}>
                                    <div className="input-field">
                                        <input required value={websitename} onChange={(e)=>{setwebsitename(e.target.value)}} type="text" id="websitename" />
                                        <label className={result !== undefined ? 'active' : ''} htmlFor="websitename">WebSite Name</label>
                                    </div>
                                    <div className="input-field">
                                        <input value={websiteurl} onBlur={(e)=>{e.target.placeholder = ""}} onFocus={(e)=>{e.target.placeholder="Ex: https://gmail.com"}}  onChange={(e)=>{setwebsiteurl(e.target.value)}} type="text" id="websiteurl" />
                                        <label className={result !== undefined ? 'active' : ''} htmlFor="websiteurl">WebSite Url(Please include "https")</label>
            
                                    </div>
                                    <div className="input-field">
                                        <input required value={websitepassword} onChange={(e)=>{setwebsitepassword(e.target.value)}} type="password" id="websitepassword" />
                                        <label className={result !== undefined ? 'active' : ''} htmlFor="websitepassword">WebSite Password</label>
                                    </div>
                                    <div className="input-field center-align">
                                        <input type="submit" value="Save" className="btn green accent-3 " />
                                    </div>
            
                                </form>
                            </div>
                            
                        </div>
                    </div>   
                )
            }
            else{
                return(
                    <div className="center-align">
                        <div className="preloader-wrapper big active">
                            <div className="spinner-layer spinner-blue-only">
                                <div className="circle-clipper left">
                                    <div className="circle"></div>
                                </div>
                                <div className="gap-patch">
                                    <div className="circle"></div>
                                </div>
                                <div className="circle-clipper right">
                                    <div className="circle"></div>
                                </div>
                            </div>
                        </div>
                        <h4>Loading </h4>
                    </div>
                 
                )
            }
        }
        else{
            return(
                <div>
                    <h4 className="center-align">Please login to continue</h4>
                </div>
            )
        }
    }
    else{
        return(
            <div className="center-align">
                <div className="preloader-wrapper big active">
                    <div className="spinner-layer spinner-blue-only">
                    <div className="circle-clipper left">
                        <div className="circle"></div>
                    </div><div className="gap-patch">
                        <div className="circle"></div>
                    </div><div className="circle-clipper right">
                        <div className="circle"></div>
                    </div>
                    </div>
                </div>
                <h4>Please wait while we are fetching your data</h4>

            </div>
        )
    }
    
    
}

export default Addanewwebsite;
import React, { useContext } from 'react'
import { Databasecontext } from '../Contexts/Databasecontext'
import { useHistory } from 'react-router-dom';
import { Authcontext } from '../Contexts/Authcontext';
import Showdetailedwebsite from './showdetailedwebsite';

const Showsavedwebsites = () =>{
    const {iswebsitesloading,websites,deletewebsite} = useContext(Databasecontext);
    const {user,isuserdataloading} = useContext(Authcontext);
    const history = useHistory();
    if(isuserdataloading === false){
        if(user!== null){
            if(iswebsitesloading){
                return(
                    <div className="center-align">
                        <div class="preloader-wrapper big active">
                            <div class="spinner-layer spinner-blue-only">
                            <div class="circle-clipper left">
                                <div class="circle"></div>
                            </div><div class="gap-patch">
                                <div class="circle"></div>
                            </div><div class="circle-clipper right">
                                <div class="circle"></div>
                            </div>
                            </div>
                        </div>
    
                        <h4 >Loading...</h4>
                    </div>
                )
            }
            else{
                if(websites.length > 0 && user!=null){
                    return(
                        websites.map((website)=>{
                            return(  
                                <div className="card my-card card-panel hoverable ">
                                    <div className="card-content ">
                                        <div >
                                            <Showdetailedwebsite key={website.id} website={website}/>
                                        </div>
                                        <div className="card-action right-align">
                                            <button onClick={()=>{
                                                history.push('website/'+website.id)
                                            }} className="btn blue accent-3 ">Update password</button>
                                            <button onClick={()=>{
                                                const confirmed = window.confirm("Are you sure you want to delete this website?")
                                                if(confirmed){
                                                    deletewebsite(website.id,user.uid)
                                                    
                                                }
                                            }} className="btn red accent-4 ">Delete this website</button>
                                        </div>
                                    </div>
                                </div>
                            
                            )
                        })
                    )
                }
                
                else{
                    return(
                        <div className="center-align flow-text">
                            <h5>You didn't add a single website yet!</h5>
                        </div>
                        
                    )
                    
                }
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

export default Showsavedwebsites;
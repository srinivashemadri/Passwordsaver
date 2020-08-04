import React, { useContext } from 'react'
import { Authcontext } from '../Contexts/Authcontext'
import Profile from './Profile';
import Activities from './Activities';

const Dashboard = () =>{
    const {loginstatus, isuserdataloading} = useContext(Authcontext);
    
    if(isuserdataloading === false){
        return loginstatus===true? (
            <div>
                <div className="row">
                    <div className="col s12 m7 l6">
                        <Activities/>
                    </div>
                    <div className="col s12 m5 l6">
                        <Profile/>
                    </div>
                    
                     
                </div>
            </div>
        ) : (
            <div>
                Login to continue
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

export default Dashboard
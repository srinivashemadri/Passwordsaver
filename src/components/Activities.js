import React from 'react'
import { useHistory } from 'react-router-dom'

const Activities = (props) =>{
    const history = useHistory();
    return(
        
            <div className="card card-panel hoverable center-align white">
                <div className="card-content">
                    <button onClick ={(e)=>{
                        history.push('website/add')

                    }} className="btn btn-block green accent-3">Add a new password and Website</button>
                    <button onClick ={(e)=>{
                        history.push('savedwebsites')

                    }} className="btn btn-block green accent-3">View my websites</button>
                </div>
            

            </div>
        
        
    )
}
export default Activities;
import React from 'react'

const Home = () =>{
    return(
        <div className="my-home">
            <div className="card hoverable my-card green accent-3">
                <div className="card-content">
                    <span className="card-title white-text">Welcome to PASSWORD SAVER</span>
                    <span className="card-title white-text">What can u do here?</span>
                    <hr/>
                    <ul >
                        <li>1. Create your account</li>
                        <li>2. Signin to your account</li>
                        <li>3. Manage your Profile</li>
                        <li>4. Save a website with 
                            <div className="abc">
                                <li>a) Website Name</li>
                                <li>b) Website url</li>
                                <li>c) Website password</li>
                            </div> 
                            
                        </li>
                        <li>5. View your saved websites and
                            <div className="abc">
                                <li>a) Update website</li>
                                <li>b) Delete website</li>
                            </div>   
                            
                        </li>

                    </ul>

                </div>

            </div>
            <div className="card my-card hoverable">
                <div className="card-image">
                    <img className="circle" src={require('../images/srinivas.jpg')} alt="Srinivas Pic" />
                    <span className="card-title white-text"> <b>DEVELOPER:</b> Srinivas Hemadri</span>
                </div>
                <div className="card-content">
                    Developed this website using REACT                    
                </div>
                <div className="card-action">
                    
                    <a href="https://github.com/srinivashemadri" target="_blank">Git Hub Link</a>

                </div>
                 
            </div>
            

        </div>
    )
}

export default Home;
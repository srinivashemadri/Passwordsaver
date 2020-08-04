import React from 'react'

const Showdetailedwebsite = ({website}) =>{
    
    return(
        <table className="highlight responsive-table">
            <tbody>
                <tr>
                    <td>
                        <span className="card-title my-card-title ">Website name: </span>
                    </td>
                    <td>
                        <span className="card-title my-card-subtitle">{website.websitename}</span> 
                    </td>
                    
                </tr>
                <tr>
                    <td>
                        <p className="card-title my-card-title ">Website url: </p>
                    </td>
                    <td>
                        <a rel="noopener noreferrer" href={ website.websiteurl} target="_blank" >{website.websiteurl}</a> 
                    </td>
                    
                </tr>
                <tr>
                    <td>
                    <p className="card-title my-card-title ">Website password: </p>
                    </td>
                    <td>
                    <span className="card-title my-card-subtitle">{website.websitepassword}</span> 
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default Showdetailedwebsite;
import React, { useEffect, useState } from 'react';
import './TopSellers.css';

const TopSellers = () => {
    const [user, setUser] = useState([]);
    useEffect(()=>{
        fetch("./TopUser.json")
        .then(res => res.json())
        .then(data => setUser(data))
    },[])
    return (
        <div  className='container'>
        <h2>Top User</h2>
        <div className="row">
        {
            user.map(topUser =>(
            
                <div className="col-lg-3 userContainer">
                   
                          <div className="UserImg">
                            <img className='imgUsers' src={topUser.img} alt="" />
                          </div>
                          <div className="userDetail">
                                <p>{topUser.name}</p>
                                <p>{topUser.amount}</p>
                           </div>

                </div>
             
            
            ))
        }
        </div>
        
        </div>
    );
};

export default TopSellers;
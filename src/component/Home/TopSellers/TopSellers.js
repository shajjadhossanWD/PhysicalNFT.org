import React, { useEffect, useState } from 'react';
import './TopSellers.css';
import { Link } from 'react-router-dom';

const TopSellers = () => {
    const [user, setUser] = useState([]);
    useEffect(()=>{
        fetch("./TopUser.json")
        .then(res => res.json())
        .then(data => setUser(data))
    },[])
    return (
        <div  className='container mx-auto my-5'>
        <h1 className='text-start text-white pb-3'>Top Users</h1>
        <div className="row ">
        {
            user.map(topUser =>(
            
                <div className=" col-md-4 col-lg-3  userContainer">
                          <div className="divno d-flex">
                          <span className='me-2 mt-2'>{topUser.id}.</span>
                          <div className="UserImg">
                           <Link to="/user">
                            <img className='imgUsers' src={topUser.img} alt="" />
                            </Link>
                          </div>
                          </div>
                          
                          <div className="userDetail">
                                <Link className='userLink' to="/user"><p className='p1'>{topUser.name}</p></Link>
                                <p className='p2'>{topUser.amount}</p>
                           </div>

                </div>
             
            
            ))
        }
        </div>
        
        </div>
    );
};

export default TopSellers;
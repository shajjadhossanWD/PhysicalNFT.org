import React, { useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
import './Activity.css';
import item from './Itme'

const Activity = () => {
    const [active, setActive] = useState(item);

    const filterItem = (category) =>{
      const updatedItems = item.filter(curItem => curItem.status === category)
      setActive(updatedItems);
    }
    return (
    
  <div>
      <Header></Header>
    <div className='pt-5'>
      <h1 className='text-white pageTitle'>Activity</h1>
     <div className="exploreDiv py-5">
        <div className='container'>
        <div className="row">
          <div className="col-lg-8">
          <Row xs={1} md={1} lg={1} className="gy-3 gx-4 mx-auto"> 
                { active.map(items =>(

              
                  <Col>
                      <Card className="cardMarket">
                         <div className="row activeCard">
                         <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                         <Card.Img src={items.img} className="marketImg" />
                         </div>
                         <div className="col-lg-10 col-md-10 col-sm-10 col-10">
                         <Card.Body>

                            <div className="row rowItems">
                            <div className="col-lg-8 col-md-8 col-sm-8 col-8 ActiveDes">
                            <Card.Text className='NameAbout'>Monica Lucas</Card.Text>
                            <p className="description">{items.description}</p>
                            <p>{items.dataTime}</p>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                            <Card.Text className='logo'>
                               <i className={items.logo}></i>
                             </Card.Text>
                            </div>
                            </div>                        
                        </Card.Body>
                         </div>      
                        </div>
                      </Card>
                    </Col>
                    ))
                  }
                   
                    </Row>
          </div>

          <div className="col-lg-4">
            <div className="sales">
            <div className="filterReset">
              <p>Filter</p>
              <p>Reset</p>
            </div>
            <div className="row">
              <div className="col-lg-12">
              <button className='activityBtn' onClick={() => filterItem('sales')}> <span><i className="fas fa-shopping-basket"></i></span> Sales</button>
              <button className='activityBtn' onClick={() => filterItem('likes')}><span ><i className="fas fa-heart"></i> </span>Likes</button>
              </div>
              <div className="col-lg-12">
              <button className='activityBtn' onClick={() => filterItem('offers')}><span><i className="fas fa-gavel"> </i></span> Offers</button>
              <button className='activityBtn' onClick={() => filterItem('followings')}><span><i className="fas fa-check"></i></span> Followings</button>
              </div>
            </div>            
            </div>
          </div>
        </div>
        </div>   
        </div>
        </div>
        <Footer></Footer>
        </div>
    );
};

export default Activity;
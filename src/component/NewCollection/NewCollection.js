import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import './NewCollection.css';
import { Link } from 'react-router-dom';
import maleImg from './maleprofile.jpg';

const NewCollection = () => {
    const [collection, setCollection] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:5007/nfts`)
        .then(res => res.json())
        .then(data => {
            const filterVideo = data.filter((video)=> video.newNFT === true)
            setCollection(filterVideo);
        })
    },[])
    return (
        <div className='container my-5'>
        <h1 className='text-white text-start'>New NFTs</h1>
            <Row xs={1} md={2} lg={4} className="g-4">
            {
                collection.map(items=>(
                <Col>
                    <Card className='newCollectionCard'>
                       <div className="ItemsImg">

                       <div className="UserImgNew">
                           <Link to="/user">
                            <img className='imgUsersNew' src={maleImg} alt="" />
                            <span className="checkNew"><i className="fas fa-check-circle"></i></span>
                            </Link>
                          </div>
                           <div className="btnCollection">
                              <button className='buttonCollection'>0h 0m 0s</button>
                           </div>
                           <img className="imgCollection" src={items.image} alt="" />
                          
                        
                       </div>
                        <Card.Body>
                        <Card.Title className='fs-6'>{items.title}</Card.Title>
                        <Card.Text>
                            <span className='collectionPrice'>{items.tokenPrices} USDSC</span>
                            <span className='ms-4'>{items.amount}/20</span><br />
                            <span className='payStatus'>Place a bid</span>
                            <span className='ms-4 collectionLike'><i className="fas fa-heart"></i> 90</span>
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                ))
            }
            
            </Row>
        </div>
    );
};

export default NewCollection;
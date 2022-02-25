import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import './NewCollection.css';
import FavoriteIcon from '@mui/icons-material/Favorite';

const NewCollection = () => {
    const [collection, setCollection] = useState([])
    useEffect(()=>{
        fetch("./newItems.json")
        .then(res => res.json())
        .then(data => setCollection(data))
    },[])
    return (
        <div className='container my-5'>
        <h1 className='text-white text-start'>New NFTs</h1>
            <Row xs={1} md={2} lg={4} className="g-4">
            {
                collection.slice(0, 4).map(items=>(
                <Col>
                    <Card className='newCollectionCard'>
                       <div className="ItemsImg">
                           <img className="imgCollection" src={items.img} alt="" />
                       </div>
                        <Card.Body>
                        <Card.Title className='fs-6'>{items.name}</Card.Title>
                        <Card.Text>
                            <span>{items.price}</span>
                            <span className='ms-4'>{items.quantity}</span><br />
                            <span>{items.payStatus}</span>
                            <span className='ms-4'><FavoriteIcon/> {items.react}</span>
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
import React, { useEffect, useState } from 'react';
import { Card, Col, Nav, Row, Tab } from 'react-bootstrap';
import user from './maleprofile.jpg';
import './UserProfile.css';
import FavoriteIcon from '@mui/icons-material/Favorite';


const UserProfile = () => {
    const [liked, setLiked] = useState([]);
    useEffect(()=>{
        fetch(`./newItems.json`)
        .then(res => res.json())
        .then(data => setLiked(data))
    },[])
    return (
        <div className='container'>
            <div className="userImgIfo">
              <div className="imgDiv">
              <img src={user} alt="" />
                <div className="detail">
                   <h4>Creator Name</h4>
                   <p>creator123@gamil.com</p>
                </div>
              </div>

              <div className="followers">
                  <h6>500 followers</h6>
                  <button className='followBtn'>Follow</button>
              </div>                
            </div>

            <div className="navLink pb-5">
            <Tab.Container className=""  id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    <Col sm={12} className="pb-5">
                    <Nav variant="pills" className="flex-row">
                        <Nav.Item>
                        <Nav.Link className='userItem' eventKey="first">On Sale</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link className='userItem' eventKey="second">Created</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link className='userItem' eventKey="third">Liked</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    </Col>
                    <Col sm={12}>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                        <Row xs={1} md={4} lg={4} className="g-4 mx-auto">
                            {
                                liked.slice(4, 8).map(items=>(
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
                    
                            </Row>                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                        <Row xs={1} md={4} lg={4} className="g-4 mx-auto">
                            {
                                liked.slice(0, 4).map(items=>(
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
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                        <Row xs={1} md={4} lg={4} className="g-4 mx-auto">
                            {
                                liked.slice(6, 10).map(items=>(
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
                        </Tab.Pane>
                    </Tab.Content>
                    </Col>
                </Row>
                </Tab.Container>
            </div>
        </div>
    );
};

export default UserProfile;
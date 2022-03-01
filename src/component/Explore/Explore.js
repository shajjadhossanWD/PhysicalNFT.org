import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import './Explore.css';
import Pagination from '@mui/material/Pagination';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';
import maleImg from './maleprofile.jpg';

const currencies = [
  
    {
      value: 'EUR',
      label: 'All Items',
    },
    {
      value: 'BTC',
      label: 'Art',
    },
    {
      value: 'JPY',
      label: 'Music',
    },
    {
        value: 'USD',
        label: 'Video',
    },
    {
        value: 'UE',
        label: 'Real World',
    },
  ];

const Explore = () => {
    const [collection, setCollection] = useState([])
    const [page, setPage] = useState(1);
    const [currency, setCurrency] = React.useState('EUR');

    useEffect(()=>{
        fetch(`./newItems.json?_page=${page}`)
        .then(res => res.json())
        .then(data => setCollection(data))
    },[page])

    const handleChange = (event) => {
        setCurrency(event.target.value);
      };



    return (
    <div>
            <Header></Header>

        <div className=' pt-5'>
        <h1 className='text-white pageTitle'>Explore</h1>
      


        <div className="exploreDiv py-5">
         
            <h4 className='text-white'>All Catagories</h4>
         
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            >
        <div className="inputDivExpo">
            <TextField
            id="outlined-select-currency"
            select
            label="Select"
            value={currency}
            onChange={handleChange}
            // color="secondary" 
            focused
            className='pb-5 textField'
            style={{
                color: '#FF343F'
            }}
            >
            {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  <span className='text-white'>{option.label}</span> 
                </MenuItem>
            ))}
            </TextField>
            </div>
        </Box>

        <div className="container">
            <Row xs={1} md={2} lg={4} className="g-4">
            {
                collection.map(items=>(
                <Col>
                    <Card className='newCollectionCard'>
                       <div className="ItemsImg">
                       <div className="UserImgNew">
                           <Link to="/user">
                            <img className='imgUsersNew' src={maleImg} alt="" />
                            <span className="checkNew"><i class="fas fa-check-circle"></i></span>
                            </Link>
                          </div>
                           <div className="btnCollection">
                              <button className='buttonCollection'>0h 0m 0s</button>
                           </div>
                           <img className="imgCollection" src={items.img} alt="" />
                       </div>
                        <Card.Body>
                    
                        <Card.Title className='fs-6'>{items.name}</Card.Title>
                        <Card.Text>
                            <span className='collectionPrice'>{items.price}</span>
                            <span className='ms-4'>{items.quantity}</span><br />
                            <span  className='payStatus'>{items.payStatus}</span>
                            <span className='ms-4 collectionLike'><i class="fas fa-heart"></i> {items.react}</span>
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                ))
            }
       
            </Row>
            <Pagination 
            className='pagination'
        count={5} 
        variant="outlined" 
        shape="rounded" 
        defaultPage={page}
        color='secondary' 
        showFirstButton={true} 
        onChange={(event, value) => setPage(value)}
        />
        </div>
      
        </div>
    
        </div>
       <Footer></Footer>
        </div>
      
 
    );
};

export default Explore;
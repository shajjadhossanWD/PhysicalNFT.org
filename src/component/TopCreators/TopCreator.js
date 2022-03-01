import React, { useEffect } from 'react';
import { MDBDataTable } from 'mdbreact';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './TopCreator.css';

const currencies = [
  
    {
      value: 'EUR',
      label: 'All Categories',
    },
    {
      value: 'BTC',
      label: 'Top sellers for the month',
    },
    {
      value: 'JPY',
      label: 'New sellers for the month',
    },

  ];

const data =  [
    {
      image: 'https://physicalnft.org/assets/frontend/images/maleprofile.jpg',
      name: 'Creator Name' ,
      volume: "15878.35" ,
     lastHours: '+309.49',
      price: '363.500000',
      owners: '2.6k',
      assets: '58.1'
    },
    {
      image: 'https://physicalnft.org/assets/frontend/images/maleprofile.jpg',
      name: 'Creator Name' ,
      volume: "15878.35" ,
     lastHours: '+309.49',
      price: '363.500000',
      owners: '2.3k',
      assets: '58.2'
    },
    {
      image: 'https://physicalnft.org/assets/frontend/images/maleprofile.jpg',
      name: 'Creator Name' ,
      volume: "15878.35" ,
     lastHours: '+309.49',
      price: '363.500000',
      owners: '2.8k',
      assets: '58.3'
     },
    {
      image: 'https://physicalnft.org/assets/frontend/images/maleprofile.jpg',
      name: 'Creator Name' ,
      volume: "15878.35" ,
      lastHours: '+309.49',
      price: '363.500000',
      owners: '2.7k',
      assets: '58.4'
    },
    {
      image: 'https://physicalnft.org/assets/frontend/images/maleprofile.jpg',
      name: 'Creator Name' ,
      volume: "15878.35" ,
     lastHours: '+309.49',
      price: '363.500000',
      owners: '2.9k',
      assets: '58.5'
    },
    {
      image: 'https://physicalnft.org/assets/frontend/images/maleprofile.jpg',
      name: 'Creator Name' ,
      volume: "15878.35" ,
      lastHours: '+309.49',
      price: '363.500000',
      owners: '2.8k',
      assets: '58.65'
    },
    {
      image: 'https://physicalnft.org/assets/frontend/images/maleprofile.jpg',
      name: 'Creator Name' ,
      volume: "15878.35" ,
      lastHours: '+309.49',
      price: '363.500000',
      owners: '3.3k',
      assets: '58.6'
    },
    {
      image: 'https://physicalnft.org/assets/frontend/images/maleprofile.jpg',
      name: 'Creator Name' ,
      volume: "15878.35" ,
      lastHours: '+309.49',
      price: '363.500000',
      owners: '3.3k',
      assets: '58.6'
    },
    {
      image: 'https://physicalnft.org/assets/frontend/images/maleprofile.jpg',
      name: 'Creator Name' ,
      volume: "15878.35" ,
      lastHours: '+309.49',
      price: '363.500000',
      owners: '3.3k',
      assets: '58.6'
    },
    {
      image: 'https://physicalnft.org/assets/frontend/images/maleprofile.jpg',
      name: 'Creator Name' ,
      volume: "15878.35" ,
      lastHours: '+309.49',
      price: '363.500000',
      owners: '3.3k',
      assets: '58.6'
    },
    {
      image: 'https://physicalnft.org/assets/frontend/images/maleprofile.jpg',
      name: 'Creator Name' ,
      volume: "15878.35" ,
      lastHours: '+309.49',
      price: '363.500000',
      owners: '3.3k',
      assets: '58.6'
    },
    {
      image: 'https://physicalnft.org/assets/frontend/images/maleprofile.jpg',
      name: 'Creator Name' ,
      volume: "15878.35" ,
      lastHours: '+309.49',
      price: '363.500000',
      owners: '3.3k',
      assets: '58.6'
    },
    {
      image: 'https://physicalnft.org/assets/frontend/images/maleprofile.jpg',
      name: 'Creator Name' ,
      volume: "15878.35" ,
      lastHours: '+309.49',
      price: '363.500000',
      owners: '3.3k',
      assets: '58.6'
    },

  ]
const TopCreator = () => {

    useEffect(() => {
        if (data) {
            data.map((item) => {
            item.image = (
              <img
                src={item.image}
                alt="image"
                className="tableImg"
              />
            )
          })
        }
    
      }, [data])

  const DataTable = {
    columns: [
      {
        label: 'Image',
        field: 'image',
        sort: 'asc',
        width: 300
      },
      {
        label: 'Name',
        field: 'name',
        sort: 'asc',
        width: 170
      },
      {
        label: 'Volume',
        field: 'volume',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Last 24 Hours',
        field: 'lastHours',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Floor Price',
        field: 'price',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Owners',
        field: 'owners',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Assets',
        field: 'assets',
        sort: 'asc',
        width: 200
      },

    ],

    rows: data
  };


  
  const [currency, setCurrency] = React.useState('EUR');
  const handleChange = (event) => {
      setCurrency(event.target.value);
    };
  return (
      <div >
          <Header></Header>
        <div className='pt-5'>
                <h1 className='text-white pageTitle'>Top Creators</h1>
          
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
     <MDBDataTable
      className='dataTableTop'
      small
      data={DataTable}
    />
    </div>
    </div>
    </div>
    <Footer></Footer>
    </div>
  );
}

export default TopCreator;
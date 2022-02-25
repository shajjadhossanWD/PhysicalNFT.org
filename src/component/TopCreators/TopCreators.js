import React from 'react';
import { Table } from 'react-bootstrap';
import maleIcon from './maleprofile.jpg'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import Pagination from '@mui/material/Pagination';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
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

const TopCreators = () => {
    const [currency, setCurrency] = React.useState('EUR');
    const handleChange = (event) => {
        setCurrency(event.target.value);
      };
    return (
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
        <div className='container table'>
         <Table striped bordered hover variant="dark" className='table'>
            <thead>
                <tr>
                <th>Creator<ArrowDropUpIcon/></th>
                <th>Name <ArrowDropUpIcon/></th>
                <th>Volume <ArrowDropUpIcon/></th>
                <th>Last 24 Hours <ArrowDropUpIcon/></th>
                <th>Floor Price <ArrowDropUpIcon/></th>
                <th>Owners <ArrowDropUpIcon/></th>
                <th>Assets <ArrowDropUpIcon/></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td><img className='tableImg' src={maleIcon} alt="" /></td>
                <td>Creator Name</td>
                <td>15,225.87</td>
                <td>+309.49%</td>
                <td>5.9</td>
                <td>2.8k</td>
                <td>58.5k</td>
                </tr>
                <tr>
                <td><img className='tableImg' src={maleIcon} alt="" /></td>
                <td>Creator Name</td>
                <td>15,225.87</td>
                <td>+309.49%</td>
                <td>5.9</td>
                <td>2.8k</td>
                <td>58.5k</td>
                </tr>
                <tr>
                <td><img className='tableImg' src={maleIcon} alt="" /></td>
                <td>Creator Name</td>
                <td>15,225.87</td>
                <td>+309.49%</td>
                <td>5.9</td>
                <td>2.8k</td>
                <td>58.5k</td>
                </tr>
                <tr>
                <td><img className='tableImg' src={maleIcon} alt="" /></td>
                <td>Creator Name</td>
                <td>15,225.87</td>
                <td>+309.49%</td>
                <td>5.9</td>
                <td>2.8k</td>
                <td>58.5k</td>
                </tr>
                <tr>
                <td><img className='tableImg' src={maleIcon} alt="" /></td>
                <td>Creator Name</td>
                <td>15,225.87</td>
                <td>+309.49%</td>
                <td>5.9</td>
                <td>2.8k</td>
                <td>58.5k</td>
                </tr>
                <tr>
                <td><img className='tableImg' src={maleIcon} alt="" /></td>
                <td>Creator Name</td>
                <td>15,225.87</td>
                <td>+309.49%</td>
                <td>5.9</td>
                <td>2.8k</td>
                <td>58.5k</td>
                </tr>
                <tr>
                <td><img className='tableImg' src={maleIcon} alt="" /></td>
                <td>Creator Name</td>
                <td>15,225.87</td>
                <td>+309.49%</td>
                <td>5.9</td>
                <td>2.8k</td>
                <td>58.5k</td>
                </tr>
                <tr>
                <td><img className='tableImg' src={maleIcon} alt="" /></td>
                <td>Creator Name</td>
                <td>15,225.87</td>
                <td>+309.49%</td>
                <td>5.9</td>
                <td>2.8k</td>
                <td>58.5k</td>
                </tr>
                <tr>
                <td><img className='tableImg' src={maleIcon} alt="" /></td>
                <td>Creator Name</td>
                <td>15,225.87</td>
                <td>+309.49%</td>
                <td>5.9</td>
                <td>2.8k</td>
                <td>58.5k</td>
                </tr>
                <tr>
                <td><img className='tableImg' src={maleIcon} alt="" /></td>
                <td>Creator Name</td>
                <td>15,225.87</td>
                <td>+309.49%</td>
                <td>5.9</td>
                <td>2.8k</td>
                <td>58.5k</td>
                </tr>
                <tr>
                <td><img className='tableImg' src={maleIcon} alt="" /></td>
                <td>Creator Name</td>
                <td>15,225.87</td>
                <td>+309.49%</td>
                <td>5.9</td>
                <td>2.8k</td>
                <td>58.5k</td>
                </tr>
            </tbody>
            </Table>  
            <Pagination className='tablePage' count={2} variant="outlined" shape="rounded" color='secondary' size='large'/> 
        </div>
        </div>
        </div>
        
    );
};

export default TopCreators;
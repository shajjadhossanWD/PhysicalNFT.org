import React, { useEffect } from 'react';
import { MDBDataTable } from 'mdbreact';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';

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
const Rankings = () => {

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

  return (
      <div >
          <Header></Header>
        <div className='pt-5'>
                <h1 className='text-white pageTitle'>Rankings</h1>
          
        <div className="exploreDiv py-5">
        <h4 className='text-white'>All Catagories</h4>
        <div className="rankingsInput">
         
          <select name="cars" id="cars" className='selectInput'>
              <option value="Last 7 Days">Last 7 Days</option>
              <option value="Last 24 Hours">Last 24 Hours</option>
              <option value="Last 30 Days">Last 30 Days</option>
              <option value="All Times">All Times</option>
            </select>
            <select name="cars" id="cars" className='selectInput'>
              <option value="All Catagories">All Catagories</option>
              <option value="Top sellers for the month">Top sellers for the month</option>
              <option value="New sellers for the month">New sellers for the month</option>
            </select>
        </div>
      <div className="container">
     <MDBDataTable
      small
      data={DataTable}
      className="dataTableTop"
    />
    </div>
    </div>
    </div>
    <Footer></Footer>
    </div>
  );
}

export default Rankings;
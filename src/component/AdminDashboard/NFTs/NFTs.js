import React, { useEffect } from 'react';
import { MDBDataTable } from 'mdbreact';
import './NFTs.css';

const data =  [
    {
      image: 'https://physicalnft.org/media/1644650081-nft.jpg',
      title: 'Title of NFT' ,
      token: "DSL" ,
     amount: '61',
      price: '363.500000',
      category: 'Art',
      Auction: '22 March, 2022',
      action: "edit/delete"
    },
    {
      image: 'https://physicalnft.org/media/1644650081-nft.jpg',
      title: 'Title of NFT' ,
      token: "DSL" ,
     amount: '63',
      price: '363.500000',
      category: 'Art',
      Auction: '22 March, 2022',
      action: "edit/delete"
    },
    {
      image: 'https://physicalnft.org/media/1644650081-nft.jpg',
      title: 'Title of NFT' ,
      token: "BNB" ,
     amount: '66',
      price: '363.500000',
      category: 'Real World'   ,
      Auction: '22 March, 2022',
      action: "edit/delete"
     },
    {
      image: 'https://physicalnft.org/media/1644650081-nft.jpg',
      title: 'Title of NFT' ,
      token: "DSL" ,
     amount: '22',
      price: '363.500000',
      category: 'Art',
      Auction: '22 March, 2022',
      action: "edit/delete"
    },
    {
      image: 'https://physicalnft.org/media/1644650081-nft.jpg',
      title: 'Title of NFT' ,
      token: "DSL" ,
     amount: '33',
      price: '363.500000',
      category: 'Music',
      Auction: '22 March, 2022',
      action: "edit/delete"
    },
    {
      image: 'https://physicalnft.org/media/1644650081-nft.jpg',
      title: 'Title of NFT' ,
      token: "BNB" ,
     amount: '61',
      price: '363.500000',
      category: 'Art',
      Auction: '22 March, 2022',
      action: "edit/delete"
    },
    {
      image: 'https://physicalnft.org/media/1644650081-nft.jpg',
      title: 'Title of NFT' ,
      token: "DSL" ,
     amount: '59',
      price: '363.500000',
      category: 'Real World',
      Auction: '22 March, 2022',
      action: "edit/delete"
    }

  ]
const NFTs = () => {

    useEffect(() => {
        if (data) {
            data.map((item) => {
            item.image = (
              <img
                src={item.image}
                alt="image"
                className="someImgClass"
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
        label: 'Title',
        field: 'title',
        sort: 'asc',
        width: 170
      },
      {
        label: 'Token',
        field: 'token',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Amount',
        field: 'amount',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Price',
        field: 'price',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Category',
        field: 'category',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Auction End',
        field: 'Auction',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Action',
        field: 'action',
        sort: 'asc',
        width: 100
      },
    ],

    rows: data
  };


  

  return (
    <div>
    <h5 className='text-start text-white'>NFTs</h5>
      <div className="NFTsTables">
      <div className="adminBtnNFT">
       New NFT
      </div>
     <MDBDataTable
      small
      data={DataTable}
    />
    </div>
    </div>
  );
}

export default NFTs;
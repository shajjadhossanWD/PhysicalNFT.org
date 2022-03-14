import React, { useEffect, useState } from 'react';
import { MDBDataTable } from 'mdbreact';
import './NFTs.css';
import NFTPopUp from './NFTPopUp/NFTPopUp';
import { Link } from 'react-router-dom';


const NFTs = () => {
   const [data, setData] = useState([]);
  //  const [deleteOrders, setDeleteOrders]= useState()

   useEffect(()=>{
    fetch("http://localhost:5007/nfts")
    .then(res => res.json())
    .then(data => {
      const filterNFTs = data.filter((music)=> music.featureNFT === true)
      setData(filterNFTs);
    })
  },[])


  // const handleOrderDelete = (id) =>{
  //   const confirmDelete = window.confirm('Are you sure, you want to delete this Orders? Please Check it again')
  //   if(confirmDelete){
  //      fetch(`http://localhost:5007/nfts/${id}`, {
  //          method: 'DELETE',
  //          headers:{
  //            "content-type": "application/json"
  //           }
  //      })
  //      .then(res => res.json())
  //      .then(result =>{
       
  //           setDeleteOrders(result)
       
  //   })

  //   }
  //  }

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
            item._id=(
              <div>
                <Link to={`updateNFTs/${item._id}`}>
                  <button className="AccessBtn"><i className="fas fa-pen-alt"></i></button>
                 </Link>
                 <button className='deleteBtn'><i className="fas fa-trash"></i></button>
              </div>
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
        field: 'tokenPrices',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Category',
        field: 'catagori',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Auction End',
        field: 'date',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Action',
        field: '_id',
        sort: 'asc',
        width: 100
      },
    ],

    rows: data
  };



  const [openNFT, setOpenNFT] = React.useState(false);
  const handleOpenNFT = () => setOpenNFT(true);
  const handleCloseNFT = () => setOpenNFT(false);

  return (
    <div>
    <h5 className='text-start text-white'>NFTs</h5>
      <div className="NFTsTables">
      <div className="adminBtnNFT" >
      <button className='ButtonNft' onClick={handleOpenNFT}>New NFT</button>
      </div>
     <MDBDataTable
      small
      data={DataTable}
    />
    </div>
    <NFTPopUp
      openNFT={openNFT}
      handleCloseNFT={handleCloseNFT}
    />
    </div>
  );
}

export default NFTs;
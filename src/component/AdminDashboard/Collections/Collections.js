import React, { useEffect } from 'react';
import DeletePopUp from '../Admin/DeletePopUp/DeletePopUp';
import { Table } from 'react-bootstrap';
import './Collections.css';
import { Link } from 'react-router-dom';

const Collections = () => {
    const [openDelete, setOpenDelete] = React.useState(false);
    const [collections, setCollections]= React.useState([]);
    const [deleteOrders, setDeleteOrders]= React.useState()

    useEffect(()=>{
      fetch('http://localhost:5007/collections')
      .then(res => res.json())
      .then(data => setCollections(data))
    },[deleteOrders])

    const handleOrderDelete = (id) =>{
      const confirmDelete = window.confirm('Are you sure, you want to delete this Orders? Please Check it again')
      if(confirmDelete){
         fetch(`http://localhost:5007/collections/${id}`, {
             method: 'DELETE',
             headers:{"content-type": "application/json"}
         })
         .then(res => res.json())
         .then(result =>{
          if(result.deletedCount > 0){
              alert('deleted successfully')
              setDeleteOrders(result)
          } 
      })
  
      }
     }

  //  const handleClickOpenDelete = () => {
  //     setOpenDelete(true);
  //   };
  
    const handleCloseDelete = () => {
      setOpenDelete(false);
    };
 

    return (
        <div className='collectionClass'>
            <div className='adminBody'>
    <h5 className='text-white text-start'>Creators</h5>
    <div className='adminCard py-2'>
    <Link to='newCollection' className='collectionLink'>
        <button className='adminBtn'>New Collection</button>
        </Link>
        <div className="tableNormal">

       
            <Table className='text-white adminDataTable'>
            <thead>
              <tr>
                <th>COLLECTION</th>
                <th>COLLECTION NAME</th>
                <th>CATEGORY</th>
                <th>TOKEN</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
           {
             collections.map(collection => (
              <tr className='tableRow'>
                <td> <img className='imgCollections' src={collection.FeaturedImg} alt="" /></td>
                <td>{collection.collectionName}</td>
                <td>{collection.category}</td>
                <td>{collection.paymentToken}</td>
                <td>
                <Link to={`updateCollection/${collection._id}`}>
                 <button className='AccessBtn'><i className="fas fa-pen-alt"></i></button>
               </Link>
               <button onClick={()=>handleOrderDelete(collection._id)} className="deleteBtn"><i className="fas fa-trash"></i></button>
                </td>
              </tr>
             ))
           }
              
            </tbody>
      </Table>
      </div>
            <DeletePopUp
              handleCloseDelete={handleCloseDelete}
              openDelete={openDelete}
            >

            </DeletePopUp>
    </div>

    <div className="copyrightAdmin ">
      <p>Copyright © 2022 - DS Legends Pte. Ltd.</p>
    </div>
    </div>
        </div>
    );
};

export default Collections;
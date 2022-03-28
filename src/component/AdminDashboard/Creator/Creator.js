import React, { useEffect } from 'react';
import { Table } from 'react-bootstrap';
import CreatorsPopUp from './CreatorsPopUp/CreatorsPopUp';
import DeletePopUp from '../Admin/DeletePopUp/DeletePopUp';
import { Link } from 'react-router-dom';

const Creator = () => {
  const [open, setOpen] = React.useState(false);
  const [creators, setCreators] = React.useState([]);
  const [deleteOrders, setDeleteOrders]= React.useState()

  useEffect(()=>{
    fetch('http://localhost:5007/creator')
    .then(res=> res.json())
    .then(data => setCreators(data))
  },[deleteOrders])

  const handleOrderDelete = (id) =>{
    const confirmDelete = window.confirm('Are you sure, you want to delete this Orders? Please Check it again')
    if(confirmDelete){
       fetch(`http://localhost:5000/creator/${id}`, {
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

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [openDelete, setOpenDelete] = React.useState(false);

  // const handleClickOpenDelete = () => {
  //   setOpenDelete(true);
  // };

  const handleCloseDelete = () => {
    setOpenDelete(false);
  };

  return (
    <div className='adminBody'>
    <h5 className='text-white text-start'>Creators</h5>
    <div className='adminCard py-2'>
        <button onClick={handleClickOpen} className='adminBtn'>New Creator</button>
        <div className="tableNormal">
         <Table className='text-white adminDataTable'>
           <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>User Name</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
           {
             creators.map(creator => (
              <tr className='tableRow'>
                <td> <img className='imgAdmin' src={creator.profileImg} alt="" /></td>
                <td>{creator.name}</td>
                <td>{creator.userName}</td>
                <td>{creator.email}</td>
                <td>
                <Link to={`updateCreator/${creator._id}`}>
                <button className='AccessBtn'><i className="fas fa-pen-alt"></i></button>
               </Link>
                <button onClick={()=>handleOrderDelete(creator._id)} className="deleteBtn"><i className="fas fa-trash"></i></button>
                </td>
              </tr>
             ))
           }
          
              
            </tbody>
      </Table>
      </div>

           <CreatorsPopUp
               open={open}
               handleClose={handleClose}
            >
            </CreatorsPopUp>

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
  );
};

export default Creator;
import React, { useEffect } from 'react';
import { Table } from 'react-bootstrap';
import './Admin.css';
import AdminPopUp from './AdminPopUp/AdminPopUp';
import DeletePopUp from './DeletePopUp/DeletePopUp';

const Admin = () => {
  const [open, setOpen] = React.useState(false);
  const [admin, setAdmin] = React.useState([]);
  const [deleteOrders, setDeleteOrders]= React.useState()

  useEffect(()=>{
    fetch('http://localhost:5007/admin')
    .then(res => res.json())
    .then(data => setAdmin(data))
  },[deleteOrders])


  const handleOrderDelete = (id) =>{
    const confirmDelete = window.confirm('Are you sure, you want to delete this Orders? Please Check it again')
    if(confirmDelete){
       fetch(`http://localhost:5007/admin/${id}`, {
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
    <h5 className='text-white text-start'>Admin</h5>
    <div className='adminCard py-2'>
        <button onClick={handleClickOpen} className='adminBtn'>New Admin</button>
        <div className="tableNormal">

            <Table className='text-white adminDataTable'>
            

            <thead>
              <tr>
                <th>Image</th>
                <th>Username</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
           {
           admin.map(admins =>(
              <tr className='tableRow'>
                <td> <img className='imgAdmin' src={admins.image} alt="" /></td>
                <td>{admins.userName}</td>
                <td>{admins.email}</td>
                <td>{admins.phone}</td>
                <td>
              <button className='AccessBtn'> <i className="fas fa-user-check"></i></button>
                <button onClick={()=>handleOrderDelete(admins._id)} className="deleteBtn"><i className="fas fa-trash"></i></button>
                </td>
              </tr>
              ))
            }
             
              
            </tbody>
      </Table>
      </div>
           <AdminPopUp
               open={open}
               handleClose={handleClose}
            >
            </AdminPopUp>

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

export default Admin;
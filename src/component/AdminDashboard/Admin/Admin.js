import React from 'react';
import { Table } from 'react-bootstrap';
import img1 from "./maleprofile.jpg";
import img2 from "./author-4.jpg"
import './Admin.css';
import AdminPopUp from './AdminPopUp/AdminPopUp';
import DeletePopUp from './DeletePopUp/DeletePopUp';

const Admin = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [openDelete, setOpenDelete] = React.useState(false);

  const handleClickOpenDelete = () => {
    setOpenDelete(true);
  };

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
           
              <tr className='tableRow'>
                <td> <img className='imgAdmin' src={img1} alt="" /></td>
                <td>Sam</td>
                <td>samDslegend@gmail.com</td>
                <td>01787676726</td>
                <td>
               <button className='AccessBtn'> <i class="fas fa-user-check"></i></button>
                <button onClick={handleClickOpenDelete} className="deleteBtn"><i class="fas fa-trash"></i></button>
                </td>
              </tr>

              <tr>
                <td> <img className='imgAdmin' src={img2} alt="" /></td>
                <td>Mark</td>
                <td>Otto@gmail.com</td>
                <td>01787676726</td>
                <td>
               <button className='AccessBtn'> <i class="fas fa-user-check"></i></button>
                <button onClick={handleClickOpenDelete} className="deleteBtn"><i class="fas fa-trash"></i></button>
                </td>
              </tr>

              <tr>
                <td><img className='imgAdmin' src={img1} alt="" /></td>
                <td>Shajjad Hossan</td>
                <td>Shajjadhossan@gamil.com</td>
                <td>01787676726</td>
                <td>
               <button className='AccessBtn'> <i class="fas fa-user-check"></i></button>
                <button onClick={handleClickOpenDelete} className="deleteBtn"><i class="fas fa-trash"></i></button>
                </td>
              </tr>
              
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
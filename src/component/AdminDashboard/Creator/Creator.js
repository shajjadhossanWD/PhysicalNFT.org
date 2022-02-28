import React from 'react';
import { Table } from 'react-bootstrap';
import img1 from "./maleprofile.jpg";
import CreatorsPopUp from './CreatorsPopUp/CreatorsPopUp';
import DeletePopUp from '../Admin/DeletePopUp/DeletePopUp';

const Creator = () => {
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
    <h5 className='text-white text-start'>Creators</h5>
    <div className='adminCard py-2'>
        <button onClick={handleClickOpen} className='adminBtn'>New Creator</button>
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
               <button className='AccessBtn'><i class="fas fa-pen-alt"></i></button>
                <button onClick={handleClickOpenDelete} className="deleteBtn"><i class="fas fa-trash"></i></button>
                </td>
              </tr>

              <tr>
                <td><img className='imgAdmin' src={img1} alt="" /></td>
                <td>Shajjad Hossan</td>
                <td>Shajjadhossan@gamil.com</td>
                <td>01787676726</td>
                <td>
               <button className='AccessBtn'> <i class="fas fa-pen-alt"></i></button>
                <button onClick={handleClickOpenDelete} className="deleteBtn"><i class="fas fa-trash"></i></button>
                </td>
              </tr>
              
            </tbody>
      </Table>
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
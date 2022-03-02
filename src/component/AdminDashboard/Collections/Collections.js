import React from 'react';
import DeletePopUp from '../Admin/DeletePopUp/DeletePopUp';
import { Table } from 'react-bootstrap';
import img1 from './coll-2.jpg';
import img2 from './coll-3.jpg';
import './Collections.css';
import { Link } from 'react-router-dom';

const Collections = () => {
    const [openDelete, setOpenDelete] = React.useState(false);

    const handleClickOpenDelete = () => {
      setOpenDelete(true);
    };
  
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
                <th>Image</th>
                <th>Username</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
           
              <tr className='tableRow'>
                <td> <img className='imgCollections' src={img1} alt="" /></td>
                <td>Sam</td>
                <td>samDslegend@gmail.com</td>
                <td>01787676726</td>
                <td>
               <button className='AccessBtn'><i class="fas fa-pen-alt"></i></button>
                <button onClick={handleClickOpenDelete} className="deleteBtn"><i class="fas fa-trash"></i></button>
                </td>
              </tr>

              <tr className='tableRow'>
                <td> <img className='imgCollections' src={img2} alt="" /></td>
                <td>Sam</td>
                <td>samDslegend@gmail.com</td>
                <td>01787676726</td>
                <td>
               <button className='AccessBtn'><i class="fas fa-pen-alt"></i></button>
                <button onClick={handleClickOpenDelete} className="deleteBtn"><i class="fas fa-trash"></i></button>
                </td>
              </tr>

              <tr>
                <td><img className='imgCollections' src={img1} alt="" /></td>
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
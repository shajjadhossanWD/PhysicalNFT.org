import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';

const DeletePopUp = ({openDelete, handleCloseDelete}) => {
    return (
        <div>
        <Dialog
        open={openDelete}
        onClose={handleCloseDelete}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
      <div className="delete">
        <DialogContent>
          <DialogContentText className='deleteDiv'>
             <p className='exclamatoryIcon'><i className="fas fa-exclamation-circle Icon"></i></p> 
            <p>Are you sure? You are going to remove this. </p>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDelete}>Disagree</Button>
          <Button onClick={handleCloseDelete} autoFocus>
            Agree
          </Button>
        </DialogActions>
        </div>
      </Dialog>
        </div>
        
    );
};

export default DeletePopUp;
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import 'react-phone-number-input/style.css'
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LanguageIcon from '@mui/icons-material/Language';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function NFTPopUp({open, handleClose}) {
  


  return (
    <div className='dialogDiv'>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        className='dialog'
      >
       <div className='dailogueAdmin'>
        <DialogTitle className='titleWallet'>New NFT </DialogTitle>

        <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
         <div className="row addAdminDiv">
             <div className="col-lg-12">
                <p>NFT</p>
                <input type="text"><button className='text-white'>Chose file</button></input>
                <p>NFT Title</p>
                <input type="text" name="" id="" />
                <p>NFT Description</p>
                <textarea name="" id="" cols="30" rows="4"></textarea>
              </div>
             <button className='adminBtnAdd'>Add</button>
         </div>
       </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
        </div>
      </Dialog>
    </div>
  );
}

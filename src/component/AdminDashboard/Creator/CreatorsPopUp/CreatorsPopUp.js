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

export default function CreatorsPopUp({open, handleClose}) {
  


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
        <DialogTitle className='titleWallet'>New Creator </DialogTitle>

        <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
         <div className="row addAdminDiv">
             <h6 className="linkTitle">Profile</h6>
             <div className="col-lg-6">
                 <p>Full Name</p>
                 <input type="text" /> <br />
                 <p>User Name</p>
                 <input type="text" name="" id="" />
                 <p>Email</p>
                 <input type="email" required/>
                 <p>Bio</p>
                 <textarea name="" id="" cols="30" rows="3"></textarea>
                
             </div>
              <div className="col-lg-6">
                   <h5 className='linkTitle'>Links</h5>
                   <p className="d-flex">
                   <span className='iconCreator'><TwitterIcon/></span>
                   <input className="creatorsInput" type="text" placeholder='Link twitter profile' />
                   </p>
                   <p className="d-flex">
                   <span className='iconCreator'><InstagramIcon/></span>
                   <input className="creatorsInput" type="text" placeholder='Link instagram profile' />
                   </p>
                   <p className="d-flex">
                   <span className='iconCreator'><LanguageIcon/></span>
                   <input className="creatorsInput" type="text" placeholder='Link your website' />
                   </p>
                    <p>Image</p>
                    <button className='addAdminImgBtn'>Choose File</button>
                    <input type="text" placeholder='Profile Image' />

                    <button className='addAdminImgBtn mt-2'>Choose File</button>
                    <input type="text" placeholder='Cover Image' />
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

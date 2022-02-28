import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import './AdminPopUp.css';
import PhoneInput,  { isValidPhoneNumber } from 'react-phone-number-input';
import 'react-phone-number-input/style.css'
import imgAdd from '../maleprofile.jpg';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AdminPopUp({open, handleClose}) {
  const [value, setValue] = React.useState()

  


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
        <DialogTitle className='titleWallet'><i class="fas fa-user"></i>Add Admin </DialogTitle>

        <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
         <div className="row addAdminDiv">
             <div className="col-lg-8">
                 <p>Full Name</p>
                 <input type="text" /> <br />
                 <p>User Name</p>
                 <input type="text" name="" id="" />
                 <p>Email</p>
                 <input type="email" required/>
                 <p>Phone</p>
                 <PhoneInput
                    international
                    countryCallingCodeEditable={false}
                    defaultCountry="RU"
                    value={value}
                    onChange={setValue}
                    error={value ? (isValidPhoneNumber(value) ? undefined : 'Invalid phone number') : 'Phone number required'}
                    />
                <p>Password</p>
                <input type="password" />
                <p>Re Enter Password</p>
                <input type="password" />
             </div>
              <div className="col-lg-4">
                  <p>Image</p>
                  <img className='addAdminImg' src={imgAdd} alt="" /> <br />
                  <button className='addAdminImgBtn'>Choose File</button>
                  <input type="text" />
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

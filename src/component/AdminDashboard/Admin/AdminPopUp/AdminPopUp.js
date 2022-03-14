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
  const [isError, setIsError]= React.useState();

  const nameRef = React.useRef();
  const userNameRef= React.useRef();
  const emailRef= React.useRef();
  const phoneRef= React.useRef();
  const passwordRef= React.useRef();
  const cPasswordRef = React.useRef();
  const imageRef= React.useRef();  
 

  const handleAddAdmin=(e)=>{
     const name = nameRef.current.value;
     const userName = userNameRef.current.value;
     const email = emailRef.current.value;
     const phone = phoneRef.current.value;
     const password = passwordRef.current.value;
     const cPass = cPasswordRef.current.value;
     const image = imageRef.current.value;

    if(password!==cPass){
      return setIsError("Confirm password & password are note match")
    }
     const NFTs = {name, userName, email, phone, password, cPass, image};
     fetch('http://localhost:5007/creators',{
       method: 'POST',
       headers:{
         'content-type': 'application/json'
       },
       body: JSON.stringify(NFTs)
     })
     .then()

     e.preventDefault();
  }


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
        <DialogTitle className='titleWallet'><i className="fas fa-user"></i>Add Admin </DialogTitle>

        <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
        <form  
        onSubmit={handleAddAdmin}
        encType="multipart/form-data"
        >
         <div className="row addAdminDiv">
             <div className="col-lg-8">
                 <p>Full Name</p>
                 <input type="text" ref={nameRef}/> <br />
                 <p>User Name</p>
                 <input type="text" name="" id="" ref={userNameRef}/>
                 <p>Email</p>
                 <input type="email" required ref={emailRef}/>
                 <p>Phone</p>
                 <PhoneInput
                    international
                    countryCallingCodeEditable={false}
                    defaultCountry="RU"
                    value={value}
                    onChange={setValue}
                    ref={phoneRef}
                    error={value ? (isValidPhoneNumber(value) ? undefined : 'Invalid phone number') : 'Phone number required'}
                    />
                <p>Password</p>
                <input type="password" ref={passwordRef}/>
                <p>Re Enter Password</p>
                <input type="password" ref={cPasswordRef}/>
                <p className='errorText'>{isError}</p>
             </div>
              <div className="col-lg-4">
                  <p>Image</p>
                  <img className='addAdminImg' src={imgAdd} alt="" /> <br />
                  <input type="file" ref={imageRef}  className='text-white'/>

              </div>
             <button className='adminBtnAdd'>Add</button>
         </div>
         </form>
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

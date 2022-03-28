import React, {useState} from 'react';
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
import { useNavigate } from 'react-router-dom';
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AdminPopUp({open, handleClose}) {
  const navigate = useNavigate();
  const [date, setDate] = useState({
      name:'',
      userName:'',
      email:'',
      phone:'',
      password:'',
      cPassword:'',
      image:'',
      
  });
  const handleChange=(e, name) =>{
      let value = name === "image" ? e.target.files[0] : e.target?.value ;
      if( name === 'phone'){
        setDate({...date, [name]: e });
        console.log(date)
      }else{
        setDate({...date, [name]: value});

      }
      
  };
  const handleSubmit = async(e)=>{
    e.preventDefault()
    console.log(date);
      try{
          let formData = new FormData()
          formData.append('name', date.name)
          formData.append('userName', date.userName)
          formData.append('email', date.email)
          formData.append('phone', date.phone)
          formData.append('password', date.password)
          formData.append('cPassword', date.cPassword)
          formData.append('image', date.image)

          const res = await fetch('http://localhost:5007/admin',{
              method: "POST",
              body: formData,
          });
          if(res.ok){
              setDate({name: '', userName:'', email:'', phone:'', password:'', cPassword:'', image:''});
              navigate('/admin');
          }
      }catch(err){
          console.log(err)
      }
  };
 

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
        <form action="" onSubmit={handleSubmit}>
         <div className="row addAdminDiv">
             <div className="col-lg-8">
                 <p>Full Name</p>
                 <input 
                  className='form-control'
                  placeholder='Enter name'
                  type="text" 
                  name="name"
                  value={date.name}
                  onChange={(e)=>handleChange(e, "name")}

                  /> <br />

                 <p>User Name</p>
                 <input 
                  className='form-control'
                  placeholder='Enter username'
                  type="text" 
                  name="userName"
                  value={date.userName}
                  onChange={(e)=>handleChange(e, 'userName')}

                 />
                 <p>Email</p>
                 <input 
                  className='form-control'
                  placeholder='Enter email'
                  type="email" 
                  name="email"
                  value={date.email}
                  onChange={(e)=>handleChange(e, 'email')}

                 />
                 <p>Phone</p>
                 <PhoneInput
                    international
                    countryCallingCodeEditable={true}
                    defaultCountry="RU"
                    className='form-control'
                    type="text" 
                    name="phone"
                    value={date.phone}
                    onChange={(e)=>handleChange(e,'phone')}
                    
                    error={date.phone ? (isValidPhoneNumber(date.phone) ? undefined : 'Invalid phone number') : 'Phone number required'}
                    />
                <p>Password</p>
                <input 
                className='form-control'
                placeholder='Enter email'
                type="text" 
                name="password"
                value={date.password}
                onChange={(e)=>handleChange(e, 'password')}

                 />
                <p>Re Enter Password</p>
                <input 
                className='form-control'
                placeholder='Confirm password'
                type="text" 
                name="cPassword"
                value={date.cPassword}
                onChange={(e)=>handleChange(e, 'cPassword')}

                 />
             </div>
              <div className="col-lg-4">
                  <p>Image</p>
                  <img className='addAdminImg' src={imgAdd} alt="" /> <br />
                  <input 
                      className='form-control'
                      type="file" 
                      accept='image/*'
                      name="image"
                      onChange={(e)=> handleChange(e, 'image')}

                   />

              </div>
             <input type="submit" value="add" className='adminBtnAdd' />
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

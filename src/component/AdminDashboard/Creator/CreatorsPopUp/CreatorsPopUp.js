import React, {useState} from 'react';
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
import {useNavigate} from 'react-router-dom';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function CreatorsPopUp({open, handleClose}) {

  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  const [date, setDate] = useState({
      name:'',
      userName:'',
      email:'',
      bio:'',
      twitter:'',
      instagram:'',
      website:'',
      profileImg:'',
      coverImg:'',
      
  });
  const handleChange=(e, name) =>{
      let value = name === "profileImg" ? e.target.files[0] : e.target?.value ;
    
        setDate({...date, [name]: value});

      
      
  };
  const handleSubmit = async(e)=>{
    e.preventDefault()
    console.log(date);
      try{
          let formData = new FormData()
          formData.append('name', date.name)
          formData.append('userName', date.userName)
          formData.append('email', date.email)
          formData.append('bio', date.bio)
          formData.append('twitter', date.twitter)
          formData.append('instagram', date.instagram)
          formData.append('website', date.website)
          formData.append('profileImg', date.profileImg)
          formData.append('coverImg', date.coverImg)

          const res = await fetch('http://localhost:5007/creator',{
              method: "POST",
              body: formData,
          });
          if(res.ok){
              setDate({name: '', userName:'', email:'', bio:'', twitter:'', instagram:'', website:'', profileImg:'', coverImg:''});
              navigate('/admin');
              setMessage('New Creator added successfully!')
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
        <DialogTitle className='titleWallet'>New Creator </DialogTitle>
          
        <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
        <p>{message}</p>
        <form  onSubmit={handleSubmit}>

         <div className="row addAdminDiv">
             <h6 className="linkTitle">Profile</h6>
             <div className="col-lg-6">
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

                 <p>Bio</p>
                 <textarea 
                  cols="30" 
                  rows="3"
                  className='form-control'
                  placeholder='write your bio'
                  type="text" 
                  name="bio"
                  value={date.bio}
                  onChange={(e)=>handleChange(e, 'bio')}
                 
    
                 ></textarea>
                
             </div>
              <div className="col-lg-6">
                   <h5 className='linkTitle'>Links</h5>
                   <p className="d-flex">
                   <span className='iconCreator'><TwitterIcon/></span>
                   <input 
                    type="text" 
                    placeholder='Link twitter profile' 
                    className='form-control'
                    name="twitter"
                    value={date.twitter}
                    onChange={(e)=>handleChange(e, 'twitter')}
                    />
                   </p>

                   <p className="d-flex">
                   <span className='iconCreator'><InstagramIcon/></span>
                   <input 
                    type="text" 
                    placeholder='Link instagram profile' 
                    className='form-control'
                    name="instagram"
                    value={date.instagram}
                    onChange={(e)=>handleChange(e, 'instagram')}                   />
                   </p>

                   <p className="d-flex">
                   <span className='iconCreator'><LanguageIcon/></span>
                   <input 
                    type="text" 
                    placeholder='Link your website' 
                    className='form-control'
                    name="website"
                    value={date.website}
                    onChange={(e)=>handleChange(e, 'website')}
                   />
                   </p>
                    <p>Image</p>
                    <input 
                      className='form-control'
                      type="file" 
                      accept='profileImg/*'
                      name="profileImg"
                      onChange={(e)=> handleChange(e, 'profileImg')}
                     />

                   <p>Cover Image</p>
                    <input 
                     className='form-control'
                      type="file" 
                      accept='coverImg/*'
                      name="coverImg"
                      onChange={(e)=> handleChange(e, 'coverImg')}
                  
                     /> 

              </div>
              <input type="submit" value="Add" className='adminBtnAdd'  />             
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

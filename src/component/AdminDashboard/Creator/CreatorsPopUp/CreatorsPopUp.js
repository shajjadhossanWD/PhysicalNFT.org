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
import axios from 'axios';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function CreatorsPopUp({open, handleClose}) {

  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");
  const [twitter, setTwitter] = useState("");
  const [instagram, setInstagram] = useState("");
  const [website, setWebsite] = useState("");
  const [userImg, setUserImg] = useState("");
  // const [coverImg, setCoverImg] = useState("");
  const [message, setMessage] = useState("");

  const onChangeFile = e =>{
    setUserImg(e.target.files[0])
    // setCoverImg(e.target.files[0])
  }

  const changeOnClick = (e) =>{
    e.preventDefault();
    
    const formData = new FormData();

    formData.append("name", name);
    formData.append("userName", userName);
    formData.append("email", email);
    formData.append("bio", bio);
    formData.append("twitter", twitter);
    formData.append("instagram", instagram);
    formData.append("website", website);
    formData.append("profileImg", userImg);
    // formData.append("coverImg", coverImg);

    setName("");
    setUserName("");
    setEmail("");
    setBio("");
    setInstagram("");
    setTwitter("");
    setWebsite("");


    axios.post("http://localhost:5007/creators", formData)
    .then(res => setMessage(res.data))
    .catch((err)=> {
      console.log(err);
    })

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
        <DialogTitle className='titleWallet'>New Creator </DialogTitle>

        <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
        <form  onSubmit={changeOnClick} encType="multipart/form-data">

         <div className="row addAdminDiv">
             <h6 className="linkTitle">Profile</h6>
             <span>{message}</span>
             <div className="col-lg-6">
                 <p>Full Name</p>
                 <input 
                  type="text" 
                  OnChange={(e)=> setName(e.target.value)}
                  
                 /> <br />

                 <p>User Name</p>
                 <input 
                  type="text" 
                  OnChange={(e)=> setUserName(e.target.value)}
                  defaultValue={userName}
                  
                 />

                 <p>Email</p>
                 <input 
                 type="email" 
                 required
                 OnChange={(e)=> setEmail(e.target.value)}
                 defaultValue={email}
                 
                 />

                 <p>Bio</p>
                 <textarea 
                 cols="30" 
                 rows="3"
                 OnChange={(e)=> setBio(e.target.value)}
                 defaultValue={bio}
                 
    
                 ></textarea>
                
             </div>
              <div className="col-lg-6">
                   <h5 className='linkTitle'>Links</h5>
                   <p className="d-flex">
                   <span className='iconCreator'><TwitterIcon/></span>
                   <input 
                    className="creatorsInput" 
                    type="text" 
                    placeholder='Link twitter profile' 
                    OnChange={(e)=> setTwitter(e.target.value)}
                    defaultValue={twitter}
                    />
                   </p>

                   <p className="d-flex">
                   <span className='iconCreator'><InstagramIcon/></span>
                   <input 
                    className="creatorsInput" 
                    type="text" 
                    placeholder='Link instagram profile' 
                    OnChange={(e)=> setInstagram(e.target.value)}
                   />
                   </p>

                   <p className="d-flex">
                   <span className='iconCreator'><LanguageIcon/></span>
                   <input 
                    className="creatorsInput" 
                    type="text" 
                    placeholder='Link your website' 
                    OnChange={(e)=> setWebsite(e.target.value)}
                    defaultValue={website}
                   />
                   </p>
                    <p>Image</p>
                    <input 
                     type="file" 
                     placeholder='Profile Image' 
                     OnChange={onChangeFile}
                     filename="profileImg"
                     />

                   {/* <p>Cover Image</p>
                    <input 
                     type="file" 
                     placeholder='Cover Image' 
                     OnChange={onChangeFile}
                  
                     /> */}

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

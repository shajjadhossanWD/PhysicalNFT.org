import React, { useState } from 'react';
import profileImg from './maleprofile.jpg'
import './AdminProfile.css';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import LockOpenRoundedIcon from '@mui/icons-material/LockOpenRounded';
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'

const AdminProfile = () => {
    const [value, setValue] = useState()

    return (
        <div>
            <h5 className='text-start text-white'>Profile</h5>
            <div className="profileDiv ">
                <div className="row container mx-auto">
                    <div className="col-lg-7">
                    <p className="d-flex inputProfile">
                   <span className='iconCreator'><AccountCircleRoundedIcon/></span>
                   <input className="creatorsInput" type="text" placeholder='Admin Name' />
                   </p>
                   <p className="d-flex inputProfile">
                   <span className='iconCreator text-white p-2'>@</span>
                   <input className="creatorsInput" type="text" placeholder='User Name' />
                   </p>
                   <p className="d-flex inputProfile">
                   <span className='iconCreator'><EmailRoundedIcon/></span>
                   <input className="creatorsInput" type="email" placeholder='sam@gamil.com' />
                   </p>
                   <p className="d-flex inputProfile">
                   <PhoneInput
                        international
                        countryCallingCodeEditable={false}
                        defaultCountry="US"
                        value={value}
                        onChange={setValue}
                        className="countryInput"   
                        />
                    
                        </p>
                   <p className="d-flex inputProfile">
                   <span className='iconCreator'><LockOpenRoundedIcon/></span>
                   <input className="creatorsInput" type="password" placeholder='password' />
                   </p>
                   <p className="d-flex inputProfile">
                   <span className='iconCreator'><LockOpenRoundedIcon/></span>
                   <input className="creatorsInput" type="password" placeholder='Enter New Password' />
                   </p>
                    </div>
                    <div className="col-lg-5 imageProfileDiv">
                        <img className='ProfileImg' src={profileImg} alt="" /> <br />
                        <button className='imgBtn text-black'>Choose File</button>
                        <input type="text" className='ImageInput' />
                    </div>
                </div>

                <button className="profileBtnChange">Save</button>
            </div>
            <div className="copyrightAdmin ">
      <p>Copyright © 2022 - DS Legends Pte. Ltd.</p>
    </div>
        </div>
    );
};

export default AdminProfile;
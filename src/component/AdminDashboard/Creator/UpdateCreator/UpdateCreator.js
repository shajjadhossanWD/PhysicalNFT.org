import React, {useEffect} from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LanguageIcon from '@mui/icons-material/Language';
import './UpdateCreator.css';
import { useParams } from 'react-router-dom';

const UpdateCreator = () => {
    const [Register, setRegister] = React.useState({}); 
    const [creators, setCreators] = React.useState([]);
    const { id } = useParams();

    useEffect(() => {

        fetch('http://localhost:5007/creators')
            .then(res => res.json())
            .then(result => {
                const data = result.find(offer => offer._id === id)
                setCreators(data);
            })
    }, [id])

    const handleOnBlur = e =>{
      const field = e.target.name;
      const value = e.target.value;
      const newRegister = {...Register};
      newRegister[field]=value;
      setRegister(newRegister);
      console.log(newRegister)
  }
  
  const handleSubmit = (id) =>{
  
    const email = Register.email;
    const name = Register.name;
    const userName = Register.userName;
    const bio = Register.bio;
    const twitter = Register.twitter;
    const instagram = Register.instagram;
    const website = Register.website;
    const profileImg = Register.profileImg;
    const coverImg = Register.coverImg;
  
    const creator = {name, userName, email, bio, twitter, instagram, website, profileImg, coverImg};
    fetch(`http://localhost:5007/creators/${id}`,{
      method: 'PUT',
      headers:{
        'content-type': 'application/json'
      },
      body: JSON.stringify(creator)
    })
    .then(res =>{
        if(res.data.modifiedCount){
            let ShippedStatus = []
            creators.forEach(product =>{
                if(product._id === id){
                    product = creator
                    ShippedStatus.push(product)
                }
                else{
                    ShippedStatus.push(product)
                }
            })
            setCreators(ShippedStatus);
        }
     })
  
  }
    return (
        <div>
        <h4 className='text-white text-start'>Update Creator</h4>
        <div className="updateCreatorDiv">
        <form action=""onSubmit={()=> handleSubmit(creators._id)}>
            <div className="row">
                <div className="col-lg-6">
                    <div className="UpdateImageCreat">
                        <img src={creators.profileImg} alt="" />
                        <button className='text-black bg-white'>Choose File</button>
                        <input 
                        type="text" 
                        onBlur={handleOnBlur}
                        name="profileImg"
                        defaultValue={creators.profileImg}
                        />
                    </div>
                    <div className="bioCreat">
                        <h6>Bio</h6>
                        <textarea 
                         cols="20" 
                         rows="3"
                         onBlur={handleOnBlur}
                         name="bio"
                         defaultValue={creators.bio}
                         ></textarea>
                    </div>
                 
                </div>
                <div className="col-lg-6">
                    <div className="nameCreate">
                        <h6>Full Name</h6>
                        <input 
                        type="text" 
                        onBlur={handleOnBlur}
                        name="name"
                        defaultValue={creators.name}
                        />
                    </div>
                    <div className="userCreate">
                        <h6>User Name</h6>
                        <input 
                        type="text" 
                        onBlur={handleOnBlur}
                        name="userName"
                        defaultValue={creators.userName}
                        />
                    </div>
                    <div className="emailCreat">
                        <h6>Email</h6>
                        <input 
                        type="text" 
                        onBlur={handleOnBlur}
                        name="email"
                        defaultValue={creators.eamil}
                        />
                    </div>
                    <div className="linksCreate">
                    <h6>Link</h6>
                    <p className="d-flex">
                   <span className='iconCreator'><TwitterIcon/></span>
                   <input 
                    className="creatorsInput" 
                    onBlur={handleOnBlur}
                    type="text" 
                    placeholder='Link twitter profile' 
                    name="twitter"
                    defaultValue={creators.twitter}
                    />
                   </p>

                    <p className="d-flex">
                   <span className='iconCreator'><InstagramIcon/></span>
                   <input 
                    className="creatorsInput" 
                    onBlur={handleOnBlur}
                    type="text" 
                    placeholder='Link instagram profile' 
                    name="instagram"
                   />
                   </p>

                   <p className="d-flex">
                   <span className='iconCreator'><LanguageIcon/></span>
                   <input 
                    className="creatorsInput" 
                    onBlur={handleOnBlur}
                    type="text" 
                    placeholder='Link your website' 
                    name="website"
                   />
                   </p>
                    </div>
                </div>
            </div>
              <input 
              type="submit" value="Update" className='createBtn' />
            </form>
            </div>
        </div>
    );
};

export default UpdateCreator;
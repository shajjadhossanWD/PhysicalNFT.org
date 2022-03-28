import React, {useEffect, useState} from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useNavigate } from 'react-router-dom';


const AddNewCollection = () => {
    const [tokens, setTokens] = useState([]);
    const navigate = useNavigate();
    const [message, setMessage] = useState('');
    const [body, setBody] = useState("");
    
    const handleBody = e =>{
        console.log(e);
        setBody(e);
    }

    useEffect(()=>{
      fetch("http://localhost:5007/tokens")
      .then(res => res.json())
      .then(data => setTokens(data))
    },[])


    
  const [date, setDate] = useState({
      logo:'',
      FeaturedImg:'',
      bannerImg:'',
      collectionName:'',
      url:'',
      description:'',
      category:'',
      yoursite:'',
      discord:'',
      instagram:'',
      medium:'',
      telegam:'',
      creatorEarning:'',
      blockchain:'',
      paymentToken:'',
      
  });
  const handleChange=(e, name) =>{
      let value = name === "yoursite" ? e.target.files[0] : e.target?.value ;
    
        setDate({...date, [name]: value});

      
      
  };
  const handleSubmit = async(e)=>{
    e.preventDefault()
    console.log(date);
      try{
          let formData = new FormData()
          formData.append('logo', date.logo)
          formData.append('FeaturedImg', date.FeaturedImg)
          formData.append('bannerImg', date.bannerImg)
          formData.append('collectionName', date.collectionName)
          formData.append('url', date.url)
          formData.append('description', date.description)
          formData.append('category', date.category)
          formData.append('yoursite', date.yoursite)
          formData.append('discord', date.discord)
          formData.append('instagram', date.instagram)
          formData.append('medium', date.medium)
          formData.append('telegam', date.telegam)
          formData.append('creatorEarning', date.creatorEarning)
          formData.append('blockchain', date.blockchain)
          formData.append('paymentToken', date.paymentToken)

          const res = await fetch('http://localhost:5007/collection',{
              method: "POST",
              body: formData,
          });
          if(res.ok){
              setDate({logo: '', FeaturedImg:'', bannerImg:'', collectionName:'', url:'', description:'', category:'', yoursite:'', discord:'',  instagram:'', medium:'', telegam:'', creatorEarning:'', blockchain:'', paymentToken:'',});
              navigate('/admin/collections');
              setMessage('New Creator added successfully!')
          }
      }catch(err){
          console.log(err)
      }
  };

    return (
        <div>
        <form action="" onSubmit={handleSubmit}>
        <div className='addItemDiv'>
        <div className="bannerImg mt-3">
            <p className='text-start text-white'><b>Logo Image</b></p>
            <p className='text-start text-white'><small>250 X 250 recommended</small></p>
            <div className="profileImgDiv">
            <i className="far fa-image bannerIcon" ></i>           
           </div>
           <div className="choseDiv">
           <input type="file"
            className='form-control collectionInput text-white'
            accept='logo/*'
            name="logo"
            onBlur={(e)=> handleChange(e, 'logo')}
            />
          </div>
        </div>

        <div className="bannerImg mt-3">
            <p className='text-start text-white'><b>Featured Image</b></p>
            <p className='text-start text-white'><small>600 X 400 recommended</small></p>
            <div className="FeaturedImgDiv">
            <i className="far fa-image bannerIcon" ></i>           
           </div>
           <div className="choseDiv">
           <input 
            type="file" 
            name="FeaturedImg"
            className='form-control collectionInput text-white'
            accept='FeaturedImg/*'
            onBlur={(e)=> handleChange(e, 'FeaturedImg')}
            />
           
           </div>
        </div>

        <div className="bannerImg mt-3">
            <p className='text-start text-white'><b>Banner Image</b></p>
            <p className='text-start text-white'><small>1400 X 400 recommended</small></p>
            <div className="bannerImgDiv">
            <i className="far fa-image bannerIcon" ></i>           
           </div>
           <div className="choseDiv">
           <input 
           type="file" 
           name="bannerImg"
           className='form-control collectionInput text-white'
           accept='bannerImg/*'
           onBlur={(e)=> handleChange(e, 'bannerImg')}
           />           
           
           </div>
        </div>
            <div className="creatorEarn mt-3">
                  <div className="creatorDes">
                  <p className='text-start text-white'><b>Name of collection</b></p>
                  </div>
              <input 
                type="text" 
                name="collectionName"
                className='form-control collectionInput'
                placeholder='Enter collection'
                value={date.collectionName}
                onBlur={(e)=>handleChange(e, "collectionName")}
               />
            </div>

            <div className="creatorEarn mt-3">
                  <div className="creatorDes">
                  <p className='text-start text-white'><b>URL</b></p>
                <p className='text-start'><small>Customize your URL. Must only contain lowercase letters,numbers, and hyphens.</small></p>
                  </div>
                <input 
                type="text" 
                name="url"
                className='form-control collectionInput'
                placeholder='Enter url'
                value={date.url}
                onBlur={(e)=>handleChange(e, "url")}
                />
            </div>

            <div className="textEditor mt-3">
                <p className='text-start text-white'>Description</p>
                <p className='text-start text-white'><small>Markdown syntax is supported. 0 of 1000 characters used.</small></p>
                <ReactQuill
                  placeholder='write your item description'
                  modules={AddNewCollection.modules}
                  formats={AddNewCollection.formats}
                  type="text" 
                  name="description"
                  className='form-control'
                  value={date.description}
                  onBlur={(e)=>handleChange(e, "description")}
                />
            </div>

            <div className="sectionSelect mt-3">
            <div className="selectionItemDes">
            <h6 className='text-start text-white'>Category</h6>
            <p className='text-start text-white'><small>Adding a category will help make your item discoverable on Physicalnft.</small></p>
            </div>
            <select 
              id="cars" 
              type="text" 
              name="category"
              className='form-control collectionInputSelect'
              placeholder='Enter category'
              value={date.category}
              onBlur={(e)=>handleChange(e, "category")}
            >
              <option value="Art" className='text-black'>Art</option>
              <option value="Music" className='text-black'>Music</option>
              <option value="Video" className='text-black'>Video</option>
              <option value="Real World" className='text-black'>Real World</option>
            </select>
            </div>

            <div className="linksDiv mt-3">
                    <h6 className='text-start text-white'>Links</h6>
                   <p className="d-flex">
                   <span className='iconCreator'><i class="fas fa-globe-africa"></i></span>
                   <input 
                    type="text" 
                    name="yoursite"
                    className='form-control collectionInput'
                    placeholder='Enter yoursite'
                    value={date.yoursite}
                    onBlur={(e)=>handleChange(e, "yoursite")}
                   />
                   </p>
                   <p className="d-flex">
                   <span className='iconCreator'><i class="fab fa-discord"></i></span>
                   <input 
                    type="text" 
                    placeholder='Link instagram profile' 
                    name="discord"
                    className='form-control collectionInput'
                    value={date.yoursite}
                    onBlur={(e)=>handleChange(e, "yoursite")}
                   />
                   </p>
                   <p className="d-flex">
                   <span className='iconCreator'><i class="fab fa-instagram"></i></span>
                   <input 
                    type="text" 
                    placeholder='Link your website' 
                    name="instagram"
                    className='form-control collectionInput'
                    value={date.instagram}
                    onBlur={(e)=>handleChange(e, "instagram")}
                   />
                   </p>
                   <p className="d-flex">
                   <span className='iconCreator'><i class="fab fa-medium-m"></i></span>
                   <input 
                    type="text" 
                    placeholder='Link your website' 
                    name="medium"
                    className='form-control collectionInput'
                    value={date.medium}
                    onBlur={(e)=>handleChange(e, "medium")}
                   />
                   </p>
                   <p className="d-flex">
                   <span className='iconCreator'><i class="fab fa-telegram-plane"></i></span>
                   <input 
                    type="text" 
                    placeholder='Link your talegram' 
                    name="telegam"
                    className='form-control collectionInput'
                    value={date.telegam}
                    onBlur={(e)=>handleChange(e, "telegam")}
                   />
                   </p>
            </div>

            <div className="creatorEarn mt-3">
                  <div className="creatorDes">
                  <p className='text-start'><b>Creator Earnings</b></p>
                <p className='text-start'><small>Collect a fee when a user re-sells an item you originally created. This is deducted from the final sale price and paid monthly to a payout address of your choosing. Learn more about creator earnings. Percentage fee</small></p>
                  </div>
                <input 
                 type="text" 
                 placeholder='e.g.2.5' 
                 name="creatorEarning"
                 className='form-control collectionInput'
                 value={date.creatorEarning}
                 onBlur={(e)=>handleChange(e, "creatorEarning")}
                 />
            </div>

            <div className="selectBlockChain mt-3">
            <div className="descriptionChain">
                <p className='text-start'>Blockchain <small>Select the blockchain where you'd like new items from this collection to be added by default.</small></p>
            </div>
            <div className='blockchainInput'>
            <select 
              id="cars" 
              placeholder="Select one"
              name="blockchain"
              className='form-control collectionInputSelect'
              value={date.blockchain}
              onBlur={(e)=>handleChange(e, "blockchain")}
            >
              <option value="Music" className='text-black'>Binance Smart Chain</option>
              <option value="Video" className='text-black'>Polygon</option>
            </select>
            </div>
            </div>

            <div className="selectBlockChain mt-3">
            <div className="descriptionChain">
                <p className='text-start pay'>Payment Tokens</p>
                <p className='text-start'><small>These tokens can be used to buy and sell your items</small></p>
            </div>
            <div className='blockchainInput'>
            <select 
            id="cars" 
              placeholder="Select one"
              name="paymentToken"
              className='form-control collectionInputSelect'
              value={date.paymentToken}
              onBlur={(e)=>handleChange(e, "paymentToken")}
              >
               {
                tokens.map(name => (
                
                  <option value={name.coin_name} className='text-black'>{name.coin_name}</option>
                  
                ))
               }
            </select>
            </div>
            </div>
            <input type="submit" value="Create" className='createBtn' />
        </div>
        </form>

          <div className="copyrightAdmin ">
      <p>Copyright © 2022 - DS Legends Pte. Ltd.</p>
    </div>
    </div>
    );
};

AddNewCollection.modules={
    toolbar:[
        [{header: '1'}, {header: '2'}, {header: [3, 4, 5, 6]}, {font: []}],
        [{size: []}],
        ["bold", "italic", "underline", "strike", "blockquote"],
        [{list: 'ordered'}, {list: 'bullet'}],
        ['link', 'image', 'video'],
        ['clean'],
        ['code-block'],
    ],
};
AddNewCollection.formats = [
    'header',
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'link',
    'image',
    'video',
    'code-block',
];


export default AddNewCollection;
import React, {useEffect, useState} from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useParams } from 'react-router-dom';


const UpdateCollection = () => {
    const [body, setBody] = useState("");
    const [tokens, setTokens] = useState([]);
    const [Collections, setCollections] = React.useState({}); 
    const { id } = useParams();
    const [Update, setUpdate] = useState({name: '' , logo: ''});

    useEffect(() => {

        fetch('http://localhost:5007/collections')
            .then(res => res.json())
            .then(result => {
                const data = result.find(offer => offer._id === id)
                setUpdate(data);
            })
    }, [])

    const handleBody = e =>{
        console.log(e);
        setBody(e);
    }

    useEffect(()=>{
      fetch("http://localhost:5007/Tokens")
      .then(res => res.json())
      .then(data => setTokens(data))
    },[])


    const onCollectionBlur = e =>{
      const field = e.target.name;
      const value = e.target.value;
      const newCollections = {...Collections};
      newCollections[field]=value;
      setCollections(newCollections);
      console.log(newCollections)
  }

    const handleSubmit = e =>{

      const logo = Collections.logo;
      const FeaturedImg = Collections.FeaturedImg;
      const bannerImg = Collections.bannerImg;
      const collectionName = Collections.collectionName;
      const url = Collections.url;
      const description = Collections.description;
      const category = Collections.category;
      const yoursite = Collections.yoursite;
      const discord = Collections.discord;
      const instagram = Collections.instagram;
      const medium = Collections.medium;
      const telegam = Collections.telegam;
      const creatorEarning = Collections.creatorEarning;
      const blockchain = Collections.blockchain;
      const paymentToken = Collections.paymentToken;
    
      const creator = {logo, FeaturedImg, bannerImg , collectionName, url, description, category, yoursite, discord, instagram, medium, telegam, creatorEarning, blockchain, paymentToken};
      fetch('http://localhost:5007/collections',{
        method: 'POST',
        headers:{
          'content-type': 'application/json'
        },
        body: JSON.stringify(creator)
      })
      .then()
    
    }

    return (
        <div>
         <h4 className='text-white text-start'>Update Collection</h4>
        <form action="" onSubmit={handleSubmit}>
        <div className='addItemDiv'>
        <div className="bannerImg mt-3">
            <p className='text-start text-white'><b>Logo Image</b></p>
            <p className='text-start text-white'><small>250 X 250 recommended</small></p>
            <div className="profileImgDivUpdate">
             <img src={Update.logo} alt="" />
           </div>
           <div className="choseDiv">
           
           <input 
            type="file"  
            onBlur={onCollectionBlur}
            name="logo"
            defaultValue={Update.logo}
            className='text-white'
            />
           
           </div>
        </div>

        <div className="bannerImg mt-3">
            <p className='text-start text-white'><b>Featured Image</b></p>
            <p className='text-start text-white'><small>600 X 400 recommended</small></p>
            <div className="FeaturedImgDivUpdate">
            <img src={Update.FeaturedImg} alt="" />
           </div>
           <div className="choseDiv">
           
           <input 
            type="file"  
            defaultValue={Update.FeaturedImg}
            onBlur={onCollectionBlur}
            name="FeaturedImg"
            className='text-white'
            />
           
           </div>
        </div>

        <div className="bannerImg mt-3">
            <p className='text-start text-white'><b>Banner Image</b></p>
            <p className='text-start text-white'><small>1400 X 400 recommended</small></p>
            <div className="bannerImgDivUpdate">
             <img src={Update.bannerImg} alt="" />
           </div>
           <div className="choseDiv">
           
           <input 
            type="file"  
            defaultValue={Update.bannerImg}
            onBlur={onCollectionBlur}
            name="bannerImg"
            className='text-white'
            />
           
           </div>
        </div>
            <div className="creatorEarn mt-3">
                  <div className="creatorDes">
                  <p className='text-start text-white'><b>Name of collection</b></p>
                  </div>
              <input 
                type="text" 
                className='creatorInput'
                onBlur={onCollectionBlur}
                name="collectionName"
                defaultValue={Update.collectionName}
               />
            </div>

            <div className="creatorEarn mt-3">
                  <div className="creatorDes">
                  <p className='text-start text-white'><b>URL</b></p>
                <p className='text-start'><small>Customize your URL. Must only contain lowercase letters,numbers, and hyphens.</small></p>
                  </div>
                <input 
                  type="text" 
                  className='creatorInput' 
                  defaultValue={Update.url}
                  onBlur={onCollectionBlur}
                  name="url"
                />
            </div>

            <div className="textEditor mt-3">
                <p className='text-start text-white'>Description</p>
                <p className='text-start text-white'><small>Markdown syntax is supported. 0 of 1000 characters used.</small></p>
                <ReactQuill
                  placeholder='write your item description'
                  modules={UpdateCollection.modules}
                  formats={UpdateCollection.formats}
                  onChange={handleBody}
                  value={body}
                  onBlur={onCollectionBlur}
                  name="description"
                  defaultValue={Update.description}

                />
            </div>

            <div className="sectionSelect mt-3">
            <div className="selectionItemDes">
            <h6 className='text-start text-white'>Category</h6>
            <p className='text-start text-white'><small>Adding a category will help make your item discoverable on Physicalnft.</small></p>
            </div>
            <select 
              id="cars" 
              className='collectionInputSelect'
              onBlur={onCollectionBlur}
              name="category"
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
                    className="collectionInput" 
                    type="text" 
                    placeholder='Link twitter profile' 
                    onBlur={onCollectionBlur}
                    name="yoursite"
                   />
                   </p>
                   <p className="d-flex">
                   <span className='iconCreator'><i class="fab fa-discord"></i></span>
                   <input 
                    className="collectionInput" 
                    type="text" 
                    placeholder='Link instagram profile' 
                    onBlur={onCollectionBlur}
                    name="discord"
                   />
                   </p>
                   <p className="d-flex">
                   <span className='iconCreator'><i class="fab fa-instagram"></i></span>
                   <input 
                    className="collectionInput" 
                    type="text" 
                    placeholder='Link your website' 
                    onBlur={onCollectionBlur}
                    name="instagram"
                   />
                   </p>
                   <p className="d-flex">
                   <span className='iconCreator'><i class="fab fa-medium-m"></i></span>
                   <input 
                    className="collectionInput" 
                    type="text" 
                    placeholder='Link your website' 
                    onBlur={onCollectionBlur}
                    name="medium"
                   />
                   </p>
                   <p className="d-flex">
                   <span className='iconCreator'><i class="fab fa-telegram-plane"></i></span>
                   <input 
                    className="collectionInput" 
                    type="text" 
                    placeholder='Link your website' 
                    onBlur={onCollectionBlur}
                    name="telegam"
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
                 className='creatorInput' 
                 placeholder='e.g.2.5' 
                 onBlur={onCollectionBlur}
                 name="creatorEarning"
                 />
            </div>

            <div className="selectBlockChain mt-3">
            <div className="descriptionChain">
                <p className='text-start'>Blockchain <small>Select the blockchain where you'd like new items from this collection to be added by default.</small></p>
            </div>
            <div className='blockchainInput'>
            <select 
              id="cars" 
              className='collectionInputSelect' 
              placeholder="Select one"
              onBlur={onCollectionBlur}
              name="blockchain"
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
              className='collectionInputSelect'
              onBlur={onCollectionBlur}
              name="paymentToken"
              >
               {
                tokens.map(name => (
                
                  <option value={name.coin_name} className='text-black'>{name.coin_name}</option>
                  
                ))
               }
            </select>
            </div>
            </div>
            <input type="submit" value="Update" className='createBtn' />
        </div>
        </form>

          <div className="copyrightAdmin ">
      <p>Copyright © 2022 - DS Legends Pte. Ltd.</p>
    </div>
    </div>
    );
};

UpdateCollection.modules={
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
UpdateCollection.formats = [
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


export default UpdateCollection;
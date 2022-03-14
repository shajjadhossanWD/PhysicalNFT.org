import React, { useEffect, useRef, useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import './NFTPopUp.css';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: '#272D47',
  border: '2px solid #6958BE',
  boxShadow: 24,
  p: 4,

};

export default function NFTPopUp({openNFT, handleCloseNFT}) {
  const [tokens, setTokens] = useState([]);
  const [tokenDetails, setTokenDetail] = useState({})

  const imgRef = useRef();
  const titleRef= useRef();
  const DesRef= useRef();
  const tokenRef= useRef();
  const amountRef= useRef();
  const dateRef = useRef();
  const catagoriesRef= useRef();
  const homeNftRef = useRef(null);
  const newnftRef= useRef(null);
  const tokenPrice= useRef();
  
 

  const handleAddNfts=(e)=>{
     const image = imgRef.current.value;
     const title = titleRef.current.value;
     const description = DesRef.current.value;
     const token = tokenRef.current.value;
     const amount = amountRef.current.value;
     const date = dateRef.current.value;
     const catagori = catagoriesRef.current.value;
     const featureNFT = homeNftRef.current.checked;
     const newNFT = newnftRef.current.checked;
     const tokenPrices = tokenPrice.current.value;


     const NFTs = {image, title, description, token, amount, date, catagori, featureNFT, newNFT, tokenPrices};
     fetch('http://localhost:5007/nfts',{
       method: 'POST',
       headers:{
         'content-type': 'application/json'
       },
       body: JSON.stringify(NFTs)
     })
     .then()

     e.preventDefault();
  }


  useEffect(()=>{
    fetch("http://localhost:5007/Tokens")
    .then(res => res.json())
    .then(data => setTokens(data))
  },[])

  const tokenDetail =(e)=>{
     const singleToken= e.target.value;
     const token = tokens.find(ee => ee.coin_name === singleToken )
     setTokenDetail(token)
     console.log(token)

  }

  return (
    <div>
      <Modal
        open={openNFT}
        onClose={handleCloseNFT}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
          <div className="NFTmodal">

        <Box sx={style} className="modalNFTBox">
        <h5 className='NFTPopupTitle'>New NFT</h5>
        <form onSubmit={handleAddNfts}>
         <div className="fullInput">
          <p className='NFTImgText'>NFT</p>
           <div className="chosenImg">
             <button className='text-black NFTBtn'>Choose File</button>
             <input type="text" className='NFTInput' ref={imgRef} />
           </div>
          <div className="NFTInputDive">
           <p className='NFTImgText'>NFT Title</p>
           <input type="text" className='NFTInput' ref={titleRef} />
           </div>
           <div className="NFTInputDive">
           <p className='NFTImgText'>NFT Description</p>
            <textarea name="" id="" cols="30" rows="3" ref={DesRef}/>
            </div>
         </div>
         <div className="row">
           <div className="col-lg-6">
             <div className="tokenInput">
               <p>Token</p>
               <select name="cars" id="cars" className='selectInputNFTToken' onChange={tokenDetail} ref={tokenRef}>
               {
                tokens.map(name => (
                
                  <option value={name.coin_name} className='text-black'>{name.coin_name}</option>
                  
                ))
               }
               <input type="number" name="" id="" value={tokenDetails.price_in_usd} className="priceToken" ref={tokenPrice}/>

            </select>
            
              
             </div>
             </div>
             <div className="col-lg-6 dollarDiv">
               <div className="dolar">
                 <p>$</p>
                 <input type="number" className='dolarInput'ref={amountRef} />
               </div>
             </div>
           </div>
        
         <div className="row">
           <div className="col-lg-6">
             <div className="dateCal">
               <p>Countdown</p>
               <input type="date" id="start" name="trip-start" className='dateNFT' ref={dateRef} />
             </div>
           </div>
           <div className="col-lg-6">
           <select name="cars" id="cars" className='selectInputNFT' ref={catagoriesRef} >
              <option value="Art" className='text-black'>Art</option>
              <option value="Music" className='text-black'>Music</option>
              <option value="Video" className='text-black'>Video</option>
              <option value="Real World" className='text-black'>Real World</option>
            </select>
           </div>
         </div>
           <input type="checkbox" name="" id="" ref={homeNftRef} />
           <label htmlFor="" className='NFTlabel'>Display in Featured</label><br />
           <input type="checkbox" name="" id="" ref={newnftRef} />
           <label htmlFor="" className='NFTlabel'>Display as New NFT</label><br />
            <input type="submit" value="Save" className='NFTSubmitBtn' />
         </form>
        </Box>
        </div>

      </Modal>
    </div>
  );
}

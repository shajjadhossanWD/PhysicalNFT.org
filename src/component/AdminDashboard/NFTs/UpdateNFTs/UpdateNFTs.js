import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateNFTs = () => {
    const [tokens, setTokens] = useState([]);
    const [tokenDetails, setTokenDetail] = useState({})
    const { id } = useParams();
    const [Update, setUpdate] = useState({name: '' , logo: ''});

    useEffect(() => {

        fetch('http://localhost:5007/nfts')
            .then(res => res.json())
            .then(result => {
                const data = result.find(offer => offer._id === id)
                setUpdate(data);
            })
    }, [])

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
          <h4 className='text-white text-start'>Update NFT</h4>
           <div className="UpdateNftsDiv">
           <form action="">
               <div className="row">
                   <div className="col-lg-6">
                       <div className="imgDivUpdateNfts">
                           <img src={Update.image} alt="" />
                       </div>
                   </div>
                   <div className="col-lg-6">
                     <h6 className='UpdateNftTitle'>Update NFT</h6>
                     <div className="chooseImgUpdate">
                        
                         <button className='text-black bg-white'>Choose file</button>
                         <input type="text" />
                     </div>
                     <div className="UpdateTitle">
                         <h6>NFT Title</h6>
                         <input type="text" defaultValue={Update.title}/>
                     </div>
                     <div className="UpdateNftDes">
                         <h6>NFT Description</h6>
                         <textarea name="" id="" cols="30" rows="3" defaultValue={Update.description}></textarea>
                     </div>
                     <div className="tokenUpdate">
                     <div className="row">
                        <div className="col-lg-6">
                            <div className="tokenInput">
                            <p>Token</p>
                            <select name="cars" id="cars" className='selectInputNFTToken' onChange={tokenDetail} defaultValue={Update.token} >
                            {
                                tokens.map(name => (
                                
                                <option value={name.coin_name} className='text-black'>{name.coin_name}</option>
                                
                                ))
                            }
                            <input type="number" name="" id="" value={tokenDetails.price_in_usd} className="priceToken"/>

                            </select>
                            
                            
                            </div>
                            </div>
                            <div className="col-lg-6 dollarDiv">
                            <div className="dolar">
                                <p>$</p>
                                <input type="number" className='dolarInput' defaultValue={Update.amount}/>
                            </div>
                            </div>
                        </div>
                     </div>
                     <div className="countDownUpdate">
                     <div className="dateCal">
                        <p>Countdown</p>
                        <input type="date" id="start" name="trip-start" className='dateNFT' defaultValue={Update.date}/>
                        </div>
                     </div>
                     <div className="categoryUpdate">
                     <select name="cars" id="cars" className='selectInputNFT' defaultValue={Update.catagori} >
                        <option value="Art" className='text-black'>Art</option>
                        <option value="Music" className='text-black'>Music</option>
                        <option value="Video" className='text-black'>Video</option>
                        <option value="Real World" className='text-black'>Real World</option>
                    </select>
                     </div>
                     <div className="selectUpdateDiv">
                        <input type="checkbox" name="" id="" defaultValue={Update.featureNFT}/>
                        <label htmlFor="" className='NFTlabel'>Display in Featured</label><br />
                        <input type="checkbox" name="" id=""  />
                        <label htmlFor="" className='NFTlabel'>Display as New NFT</label><br />
                            <input type="submit" value="Update" className='NFTSubmitBtn' />
                     </div>
                   </div>
               </div>
               </form>
           </div> 
        </div>
    );
};

export default UpdateNFTs;
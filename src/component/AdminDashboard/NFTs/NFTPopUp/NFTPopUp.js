import React from 'react';
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
        <form action="">
         <div className="fullInput">
          <p className='NFTImgText'>NFT</p>
           <div className="chosenImg">
             <button className='text-black NFTBtn'>Choose File</button>
             <input type="text" className='NFTInput'></input>
           </div>
          <div className="NFTInputDive">
           <p className='NFTImgText'>NFT Title</p>
           <input type="text" className='NFTInput'/>
           </div>
           <div className="NFTInputDive">
           <p className='NFTImgText'>NFT Description</p>
            <textarea name="" id="" cols="30" rows="3"></textarea>
            </div>
         </div>
         <div className="row">
           <div className="col-lg-6">
             <div className="tokenInput">
               <p>Token</p>
               <select name="cars" id="cars" className='selectInputNFTToken'>
              <option value="All Catagories">All Catagories</option>
              <option value="Top sellers for the month">Top sellers for the month</option>
              <option value="New sellers for the month">New sellers for the month</option>
            </select>
             </div>
             </div>
             <div className="col-lg-6 dollarDiv">
               <div className="dolar">
                 <p>$</p>
                 <input type="number" className='dolarInput'/>
               </div>
             </div>
           </div>
        
         <div className="row">
           <div className="col-lg-6">
             <div className="dateCal">
               <p>Countdown</p>
               <input type="date" id="start" name="trip-start" className='dateNFT'/>
             </div>
           </div>
           <div className="col-lg-6">
           <select name="cars" id="cars" className='selectInputNFT'>
              <option value="All Catagories">All Catagories</option>
              <option value="Top sellers for the month">Top sellers for the month</option>
              <option value="New sellers for the month">New sellers for the month</option>
            </select>
           </div>
         </div>
           <input type="checkbox" name="" id="" />
           <label htmlFor="" className='NFTlabel'>Display in Featured</label><br />
           <input type="checkbox" name="" id="" />
           <label htmlFor="" className='NFTlabel'>Display as New NFT</label><br />
            <input type="submit" value="Save" className='NFTSubmitBtn' />
         </form>
        </Box>
        </div>

      </Modal>
    </div>
  );
}

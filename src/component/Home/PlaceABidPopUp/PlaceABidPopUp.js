import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import './PlaceABidPopUp.css';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function PlaceABidPopUp({open, handleClose}) {
  
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
      <div className='dailogue'>
        <DialogTitle className='titleWallet'>Place a Bid</DialogTitle>

        <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
        <br />
        <span className='content'>You are about to place a bid for <b>Red Ocean</b> from <b>Monica Lucas</b></span>

          
       

           <div className="row">
            <div className="col-lg-12 my-5 inputDivBid">
              <span>Your bid (BNB)</span> <br />
              <input className='BidInput' type="text" placeholder='Enter A Bid'/>
              <br />
              <br />
              <span>Enter quantity. <b>10 available</b></span> <br />
              <input className='BidInput' type="number" placeholder='1' />
              <br />
              <br />
              <div className="listDiv">
                  <ul className='leftList'>
                      <li>Your bidding balance</li>
                      <li>Your balance</li>
                      <li>Service fee 2.5%</li>
                      <li>You will pay</li>
                  </ul>
                  <ul className='rightList'>
                      <li>0.013325 BNB</li>
                      <li>10.67856 BNB</li>
                      <li>0.00325 BNB</li>
                      <li>0.013325 BNB</li>
                  </ul>
              </div>
             </div>
               <button className='placeBidBtn'>Place A Bid</button>
           </div>

 
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

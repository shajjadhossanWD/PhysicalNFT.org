import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import './AlertDialogSlide.css';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide({open, handleClose}) {
  const [wallet, setWallet] = React.useState([])
  React.useEffect(()=>{
    fetch('./paymentWallet.json')
    .then(res => res.json())
    .then(data => setWallet(data))
  },[])
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
        <DialogTitle className='titleWallet'><i className="fas fa-user"></i>  My Wallet</DialogTitle>

        <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
        <span className='content'>Connect with one of our available wallet providers or create a new one.</span>

       {
         wallet.map(pay => (
       

           <div className="row">
            <a href="#wallet" className="wallets">
            <div className="col-lg-12 my-2 walletDiv">
                  <img src={pay.img} alt="" />
                  <span>{pay.name}</span>
             </div>
            </a>
           </div>

          
         ))
       }
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

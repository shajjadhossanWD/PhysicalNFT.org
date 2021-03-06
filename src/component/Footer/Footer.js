import React, { useEffect, useState } from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import './Footer.css';
import ScrollToTop from "react-scroll-to-top";

const Footer = () => {
    const [link, setLink] = useState({});
    useEffect(()=>{
        fetch("https://dslegends.org/api/social-links.php")
        .then(res=> res.json())
        .then(data => setLink(data))
    },[])
    return (
        <div className="footerDiv">
      <ScrollToTop smooth top="100" width='25px' color='white'/>

        
        <div className='container'>
            <div className="row footer">
                <div className="col-lg-3 col-md-3 mt-5">
                <h5>Marketplace</h5>
                    <p className='menuFooter'><a href='#home'>All NFTs</a></p>
                    <p className='menuFooter'><a href='#home'>Art</a></p>
                    <p className='menuFooter'><a href='#home'>Music</a></p>
                    <p className='menuFooter'><a href='#home'>Portraits</a></p>
                    <p className='menuFooter'><a href='#home'>Videos</a></p>
                    <p className='menuFooter'><a href='#home'>Real World</a></p>
                </div>
                <div className="col-lg-3 col-md-3 mt-5">
                  <h5>Resources</h5>
                  <p className='menuFooter'><a href='#home'>Help Center</a></p>
                  <p className='menuFooter'><a href='#home'>Newsletter</a></p>
                </div>
                <div className="col-lg-3 col-md-3 mt-5">
                  <h5>Community</h5>
                  <p className='menuFooter'><a href='#home'>Community</a></p>
                  <p className='menuFooter'><a href='#home'>Documentation</a></p>
                </div>
                <div className="col-lg-3 col-md-3 mt-5">
                  <h5>Newsletter</h5>
                  <p>Signup for our newsletter to get the latest news in your inbox.</p>
                  <InputGroup className="mb-3 footerInput">
                    <FormControl
                    placeholder="Recipient's username"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    />
                    <Button variant="outline-secondary " className="footerInputBtn" id="button-addon2">
                    <i className="fas fa-arrow-right"></i>
                    </Button>
                </InputGroup>
                <p>Your email is safe with us. We don't spam.</p>
                </div>
            </div>
            
         
        </div>
        <div className="footerCopy">

        
        <div className="copyRight container">
       
               <p className='copyText'>?? Copyright 2022 - DS Legends Pte. Ltd.</p>
         
            
            <div className="iconDivSocial">
               <span>Follow Us: </span> 
                <a className="iconItem ms-2" target="_any" href={link.facebook}><i className="fab fa-facebook-f"></i></a>
                <a className="iconItem" target="_any" href={link.instagram}><i className="fab fa-instagram"></i></a>
                <a className="iconItem" target="_any" href={link.twitter}><i className="fab fa-twitter"></i></a>
                <a className="iconItem" target="_any" href={link.tiktok}><i className="fab fa-tiktok"></i></a>
                <a className="iconItem" target="_any" href={link.linkedin}><i className="fab fa-linkedin-in"></i></a>
                <a className="iconItem" target="_any" href={link.pinterest}><i className="fab fa-pinterest-p"></i></a>
                <a className="iconItem" target="_any" href={link.medium}><i className="fab fa-medium-m"></i></a>
                <a className="iconItem" target="_any" href={link.telegram}><i className="fab fa-telegram-plane"></i></a>
                <a className="iconItem" target="_any" href={link.discord}><i className="fab fa-discord"></i></a>
            </div>
        </div>
        </div>
        </div>
    );
};

export default Footer;
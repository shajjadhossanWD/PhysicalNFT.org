import React from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footerDiv">

        
        <div className='container'>
            <div className="row footer">
                <div className="col-lg-3">
                <h5>Marketplace</h5>
                    <p className='menuFooter'><a href='#home'>All NFTs</a></p>
                    <p className='menuFooter'><a href='#home'>Art</a></p>
                    <p className='menuFooter'><a href='#home'>Music</a></p>
                    <p className='menuFooter'><a href='#home'>Portraits</a></p>
                    <p className='menuFooter'><a href='#home'>Videos</a></p>
                    <p className='menuFooter'><a href='#home'>Real World</a></p>
                </div>
                <div className="col-lg-3">
                  <h5>Resources</h5>
                  <p className='menuFooter'><a href='#home'>Help Center</a></p>
                  <p className='menuFooter'><a href='#home'>Newsletter</a></p>
                </div>
                <div className="col-lg-3">
                  <h5>Community</h5>
                  <p className='menuFooter'><a href='#home'>Community</a></p>
                  <p className='menuFooter'><a href='#home'>Documentation</a></p>
                </div>
                <div className="col-lg-3">
                  <h5>Newsletter</h5>
                  <p>Signup for our newsletter to get the latest news in your inbox.</p>
                  <InputGroup className="mb-3">
                    <FormControl
                    placeholder="Recipient's username"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    />
                    <Button variant="outline-secondary" id="button-addon2">
                    Button
                    </Button>
                </InputGroup>
                <p>Your email is safe with us. We don't spam.</p>
                </div>
            </div>
            
         
        </div>
        <div className="footerCopy">

        
        <div className="copyRight container">
            <p>© Copyright 2022 - DS Legends Pte. Ltd.</p>
            <p>Follow Tiktokheaven.com</p>
        </div>
        </div>
        </div>
    );
};

export default Footer;
import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import StyleIcon from '@mui/icons-material/Style';
import './CreateAndSell.css';

const CreateAndSell = () => {
    return (
        <div className='container py-5'>
        <h1 className='text-start text-white pb-3'>Create and Sell Now</h1>
            <Row xs={1} md={2} lg={3} className="g-4">
                <Col>
                <Card className="createSellDiv">
                    <Card.Body>
                    <Card.Title className='iconDivSell'>
                    <AccountBalanceWalletIcon className='sellIcon'/>
                    </Card.Title>
                    <Card.Text>
                        <h5>Register with us</h5>
                    </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
                <Col>
                <Card className="createSellDiv">
                    <Card.Body>
                    <Card.Title className='iconDivSell'>
                    <CloudUploadIcon className='sellIcon'/>
                    </Card.Title>
                    <Card.Text>
                        <h5>Add your NFT's</h5>
                    </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
                <Col>
                <Card className="createSellDiv">
                    <Card.Body>
                    <Card.Title className='iconDivSell'>
                    <StyleIcon className='sellIcon'/>
                    </Card.Title>
                    <Card.Text>
                        <h5>Sell your NFT's</h5>
                    </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
        </div>
    );
};

export default CreateAndSell;
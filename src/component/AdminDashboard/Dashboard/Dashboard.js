import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import './Dashboard.css';

const Dashboard = () => {
    const [nft, setNft] = useState([]);
    const [Admin, setAdmin] = useState([]);
    const [Creators, setCreators] = useState([]);
    const [Collections, setCollections] = useState([]);
    const [Tokens, setTokens] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5007/admin')
        .then(res => res.json())
        .then(data => setAdmin(data))
      },[])
      
    useEffect(()=>{
        fetch('http://localhost:5007/NFTs')
        .then(res => res.json())
        .then(data => setNft(data))
      },[])

    useEffect(()=>{
        fetch('http://localhost:5007/collection')
        .then(res => res.json())
        .then(data => setCollections(data))
      },[])

    useEffect(()=>{
        fetch('http://localhost:5007/creator')
        .then(res => res.json())
        .then(data => setCreators(data))
      },[])

    useEffect(()=>{
        fetch('http://localhost:5007/Tokens')
        .then(res => res.json())
        .then(data => setTokens(data))
      },[])

    return (
        <div>
        <div className='container'>
            <h4 className='text-white text-start'>Dashboard</h4>
            <Row xs={1} md={2} lg={3} xl={4} className="g-4">
                <Col>
                <Card className='cardDash'>
                    <Card.Body className="d-flex align-items-center justify-content-between">
                    <Card.Text className='dashboardTxt'>
                       <p>NFTs</p>
                       <h2>{nft.length}</h2>
                    </Card.Text>
                    <div className="iconDas">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-collection-fill" viewBox="0 0 16 16">
                            <path d="M0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6v7zM2 3a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 0-1h-11A.5.5 0 0 0 2 3zm2-2a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7A.5.5 0 0 0 4 1z"></path>
                    </svg>
                    </div>
                    </Card.Body>
                </Card>
                </Col>

                <Col>
                <Card className='cardDash'>
                    <Card.Body className="d-flex align-items-center justify-content-between">
                    <Card.Text className='dashboardTxt'>
                       <p>Collections</p>
                       <h2>{Collections.length}</h2>
                    </Card.Text>
                    <div className="iconDas">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-basket3-fill" viewBox="0 0 16 16">
							<path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM2.468 15.426.943 9h14.114l-1.525 6.426a.75.75 0 0 1-.729.574H3.197a.75.75 0 0 1-.73-.574z"></path>
						</svg>
                    </div>
                    </Card.Body>
                </Card>
                </Col>

                <Col>
                <Card className='cardDash'>
                    <Card.Body className="d-flex align-items-center justify-content-between">
                    <Card.Text className='dashboardTxt'>
                       <p>Admin</p>
                       <h2>{Admin.length}</h2>
                    </Card.Text>
                    <div className="iconDas">
                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" className="bi bi-people-fill" viewBox="0 0 16 16">
							<path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path>
							<path fill-rule="evenodd" d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"></path>
							<path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"></path>
						</svg>
                    </div>
                    </Card.Body>
                </Card>
                </Col>

                <Col>
                <Card className='cardDash'>
                    <Card.Body className="d-flex align-items-center justify-content-between">
                    <Card.Text className='dashboardTxt'>
                       <p>Creators</p>
                       <h2>{Creators.length}</h2>
                    </Card.Text>
                    <div className="iconDas">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
							<path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"></path>
							<path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"></path>
						</svg>
                    </div>
                    </Card.Body>
                </Card>
                </Col>

                <Col>
                <Card className='cardDash'>
                    <Card.Body className="d-flex align-items-center justify-content-between">
                    <Card.Text className='dashboardTxt'>
                       <p>Tokens</p>
                       <h2>{Tokens.length}</h2>
                    </Card.Text>
                    <div className="iconDas">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-coin" viewBox="0 0 16 16">
							<path d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9H5.5zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518l.087.02z"></path>
							<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
							<path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11zm0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
						</svg>
                    </div>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
            <p className='demoP'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem quae nam pariatur laboriosam omnis sequi laborum accusamus vel aperiam ducimus voluptatum at aspernatur a nostrum quibusdam doloribus inventore impedit, facere velit odit deleniti dolorum minima culpa! Accusamus dolorum quasi esse autem mollitia! Iure aliquid reiciendis vitae praesentium ratione! Impedit vero velit doloremque quidem, mollitia ut cupiditate ex non atque quia optio aliquam nobis exercitationem cum. Porro velit facere libero harum, sed recusandae magni commodi dolore minus odit fuga voluptas maxime fugit ipsa explicabo, aut quasi doloribus debitis suscipit, cupiditate alias! Id a ab, minima sint quisquam sunt rem earum non minus autem maiores, aut quos nemo ullam recusandae velit! Pariatur, debitis et! Dignissimos provident, dicta sapiente debitis expedita ex accusamus fugiat aut unde. Quo dolorum rerum laudantium inventore officia saepe, sint sed quibusdam. Pariatur impedit possimus, explicabo sint cum perspiciatis doloremque vitae et fugit libero? Neque delectus impedit rem saepe doloribus eveniet ullam sed, aperiam beatae incidunt eos reprehenderit dolorem ipsam amet eius, culpa labore aliquam expedita magni. Quam, voluptatum voluptates! Numquam, dolorum! Incidunt assumenda asperiores dolores culpa aliquid, accusamus eligendi fuga praesentium impedit aspernatur reprehenderit architecto veritatis ab eaque quae odio molestias minima voluptatum molestiae expedita nemo amet ratione rem! Ad eveniet pariatur commodi cum fuga harum asperiores esse quas voluptatibus facilis. Ducimus eligendi velit quaerat laboriosam. Quo asperiores ea magnam placeat eveniet explicabo ad delectus nemo molestias qui. Sunt, commodi corrupti sequi reprehenderit exercitationem odit voluptatem quaerat cum dolorum assumenda. Corrupti saepe, eius ab tenetur doloremque illum labore odio, quas cumque natus non. Modi facilis libero, animi est perferendis voluptatem ipsam quo iste delectus possimus enim explicabo praesentium eveniet a nisi error dolorem accusantium et ipsum inventore, distinctio sed. Quas distinctio nemo quod tempore est ducimus corrupti unde facilis minus, adipisci numquam sed tempora qui possimus? Quis, sed.</p>
        </div>
        <div className="copyrightAdmin my-5">
      <p>Copyright © 2022 - DS Legends Pte. Ltd.</p>
    </div>
        </div>
    );
};

export default Dashboard;
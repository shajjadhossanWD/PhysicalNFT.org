import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import NewCollection from '../NewCollection/NewCollection';
import Banner from './Banner/Banner';
import CreateAndSell from './CreateAndSell/CreateAndSell';
import TopSellers from './TopSellers/TopSellers';
import Collections from './Collections/Collections';

const Home = () => {
    return (
        <div>
           <Header></Header>
            <Banner></Banner>
            <Collections></Collections>
            <TopSellers></TopSellers>
            <NewCollection></NewCollection>
            <CreateAndSell></CreateAndSell>
            <Footer></Footer>
        </div>
    );
};

export default Home;
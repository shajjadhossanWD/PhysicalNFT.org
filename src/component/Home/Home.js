import React from 'react';
import Header from '../Header/Header';
import Banner from './Banner/Banner';
import TopSellers from './TopSellers/TopSellers';
// import Collections from './Collections/Collections';

const Home = () => {
    return (
        <div>
           <Header></Header>
            <Banner></Banner>
            {/* <Collections></Collections> */}
            <TopSellers></TopSellers>

        </div>
    );
};

export default Home;
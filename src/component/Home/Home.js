import React from 'react';
import NewCollection from '../NewCollection/NewCollection';
import Banner from './Banner/Banner';
import CreateAndSell from './CreateAndSell/CreateAndSell';
import TopSellers from './TopSellers/TopSellers';
import Collections from './Collections/Collections';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Collections></Collections>
            <TopSellers></TopSellers>
            <NewCollection></NewCollection>
            <CreateAndSell></CreateAndSell>
        </div>
    );
};

export default Home;
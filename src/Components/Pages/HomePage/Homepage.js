import React from 'react';
import Advertised from './AdvertisedItem/Advertised';
import Carosel from './Carosel/Carosel';
import CategoryItem from './CategoryItem/CategoryItem';

const Homepage = () => {
    return (
        <div className='mx-16'>
            <Carosel></Carosel>
            <Advertised></Advertised>
            <CategoryItem></CategoryItem>
        </div>
    );
};

export default Homepage;
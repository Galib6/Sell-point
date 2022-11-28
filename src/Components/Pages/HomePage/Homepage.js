import React from 'react';
import Advertised from './AdvertisedItem/Advertised';
import Carosel from './Carosel/Carosel';
import CategoryItem from './CategoryItem/CategoryItem';

const Homepage = () => {
    return (
        <div className='lg:mx-16 sm:mx-0'>
            <Carosel></Carosel>
            <Advertised></Advertised>
            <CategoryItem></CategoryItem>
        </div>
    );
};

export default Homepage;
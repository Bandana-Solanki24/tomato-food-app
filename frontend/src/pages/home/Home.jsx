import React, { useState } from 'react';
import './home.css';
import Header from '../../components/header/Header';
import ExploreMenu from '../explore-menu/ExploreMenu';
import FoodDisplay from '../../components/food-display/FoodDisplay';
import AppDownLoad from '../../components/app-download/AppDownLoad';
import Footer from '../../components/footer/Footer';

function Home() {
    const [category, setCategory] = useState("All");

    return (
        <>
            <div className='layout'>
                <Header />
                <ExploreMenu category={category} setCategory={setCategory} />
                <FoodDisplay category={category} />
                <AppDownLoad />
            </div>
            <Footer />
        </>
    )
}

export default Home

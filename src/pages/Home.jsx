import React from 'react';
import Header from '../components/Header';
import Hero from "../components/Hero";
import Advantages from "../components/Advantages";
import Footer from "../components/Footer";
import Information from "../components/Information";
function Home() {
    return (
        <>
            <Header/>
            <Hero/>
            <Advantages/>
            <Information/>
            <Footer/>
        </>
    );
}

export default Home;
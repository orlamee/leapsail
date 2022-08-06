import React from 'react';
import './App.css';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import FooterBottom from './components/FooterBottom';
import GetStarted from './components/GetStarted';
import Header from './components/Header';
import Hero from './components/Hero';
import Steps from './components/Steps';
import Support from './components/Support';
import WhyLeapsail from './components/WhyLeapsail';

function App() {
  return (
    <div>
      <Header/>
      <Hero/>
      <GetStarted/>
      <Carousel/>
      <WhyLeapsail/>
      <Steps/>
      <Support/>
      <FooterBottom/>
      <Footer/>
    </div>
  );
}

export default App;

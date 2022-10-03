import React from 'react'
import Header from './Header';
import Navbar from "./Navbar.js"
import Home from './Home';
import Services from './Services';
import OurServices from './OurServices';
import Details from './Details';
import QuestionAndAnswer from './QuestionAndAnswer';
import CustomerReview from './CustomerReview';
import Contact from './Contact';
import Map from './Map';
import Footer from './Footer';


const Index = () => {
  return (
    <>
    <Header />
    <Navbar />
    <Home />
    <Services />
    <OurServices />
    <Details />
    <QuestionAndAnswer />
    <CustomerReview />
    <Contact />
    <Map />
    <Footer />
    </>
  )
}

export default Index;
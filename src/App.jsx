import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header'
import MainComponent from './component/MainComponent';
import SecondContainer from './component/SecondContainer';
import Segment from './component/Segment';
import ContactForm from './component/ContactForm';
import Footer from './component/Footer';

const App = () => {
  return (
    <>
    <Header />
    <MainComponent />
    <SecondContainer />
    <Segment />
    <ContactForm />
    <Footer />
    </>
  )
}

export default App
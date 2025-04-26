import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './component/Header'
import MainComponent from './component/MainComponent';
import SecondContainer from './component/SecondContainer';
import Segment from './component/Segment';
import ContactForm from './component/ContactForm';
import Footer from './component/Footer';
import Services from './component/Services';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <MainComponent />
            <SecondContainer />
            <Segment />
            <ContactForm />
          </>
        } />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App

import React from 'react';
import Card1 from './components/Card1'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Card from './components/Cards'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'

const App = () => {
  return <>
      <Navbar/>
      < Home />
      < Card />
      <Card1 />
    < ContactUs />
    < Footer />

  </>;
};

export default App;



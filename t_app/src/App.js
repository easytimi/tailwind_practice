import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/hero';
import Destination from'./Components/destination'
import Search from './Components/search'
import Selects from './Components/selectDest'
import Carosel from "./Components/caurosel"
import Footer from  './Components/footer'

function App() {
  return (
    <div >
           <Navbar/> 
           <Hero/>
           <Destination/>
           <Search/>
           <Selects/>
           <Carosel/>
           <Footer/>
    </div>
  );
}

export default App;

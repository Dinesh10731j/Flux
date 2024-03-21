import React from 'react';
import Header from './components/Header';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Aboutus from './components/Aboutus';
import Blog from './components/Blog';
import Getstarted from './components/Getstarted';
import Home from './components/Home';
import Features from './components/Features';
const App = () => {
  return (
   <>
   <Router>
   <Header/>
    <Routes>
    <Route path='/' Component={Home}/>
      <Route path='/aboutus' Component={Aboutus}/>
      <Route path='/blog' Component={Blog}/>
      <Route path='/getstarted' Component={Getstarted}/>
      <Route path='/features' Component={Features}/>

      
    </Routes>
    
   </Router>
  

   </>
  )
}

export default App
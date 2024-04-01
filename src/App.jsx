import React, { useState } from 'react';
import Header from './components/Header';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Aboutus from './components/Aboutus';
import Blog from './components/Blog';
import Getstarted from './components/Getstarted';
import Home from './components/Home';
import Features from './components/Features';
import "./App.css";
const App = () => {

  const [theme,setTheme] = useState(true);

const handleTheme = ()=>{
  setTheme(!theme);
}
  return (
   <>
   <Router>
   <div className={theme?"darkmode":"lightmode"}>
   <Header handleTheme={handleTheme} theme={theme}/>
    <Routes>
    <Route path='/' element={<Home/>}/>
      <Route path='/aboutus' element={<Aboutus/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/getstarted' element={<Getstarted/>}/>
      <Route path='/features' element={<Features/>}/>

      
    </Routes>
    </div>
   </Router>
  

   </>
  )
}

export default App
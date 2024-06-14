import React, { useState } from 'react';
import Header from './components/Header';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Aboutus from './components/Aboutus';
import Blog from './components/Blog';
import Getstarted from './components/Getstarted';
import Home from './components/Home';
import Features from './components/Features';
import "./App.css";
import Admin from './components/Admin';
const App = () => {

  const [theme,setTheme] = useState(false);
  const [admin,setAdmin] = useState();


const handleTheme = ()=>{
  setTheme(!theme);
}

const CheckisAdmin = (isAdmin)=>{
  setAdmin(isAdmin);
}

  return (
   <>
   <Router>
   <div className={theme?"darkmode":"lightmode"}>
   <Header handleTheme={handleTheme} theme={theme} admin={admin}/>
    <Routes>
    <Route path='/' element={<Home/>}/>
      <Route path='/aboutus' element={<Aboutus/>}/>
      <Route path='/blog' element={<Blog CheckisAdmin={CheckisAdmin}/>}/>
      <Route path='/getstarted' element={<Getstarted/>}/>
      <Route path='/features' element={<Features/>}/>
      <Route path='/admin' element={admin?<Admin/>:<Home/>}/>

      
    </Routes>
    </div>
   </Router>
  

   </>
  )
}

export default App
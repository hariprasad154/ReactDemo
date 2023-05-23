import React from 'react';
import Home from'./component/Home.js';
import Contact from './component/Contact';
import About from './component/About.js';
import UserProfile from './component/UserProfile.js';
import './App.css';

import { Route,Routes,Link } from 'react-router-dom';
class App extends React.Component{
 render(){
  return(<div>
    <nav className='link'>
    <Link to="/"> Root |</Link>
      <Link to="/home"> Home |</Link>
      <Link to="/Contact"> Contact |</Link>
      <Link to="/About"> About |</Link>
      <Link to="/profile"> Profile |</Link>
      
    </nav>
    {/* App Component */}
    <Routes>
      <Route path="/home" element={<Home/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path='/profile' element={<UserProfile/>}/>
      <Route path="/About" element={<About/>}/>
    </Routes>
  </div>);
}
}
export default App;

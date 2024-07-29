import React from 'react';
import Navbar from './Component/Navbar';
import {Outlet} from 'react-router-dom';
import Footer from './Component/Footer';

function App() {
  return (
      <>
       
          <Navbar/>
          <Outlet/>
          <div className='footer-bottom-last'>
          <Footer/>
          </div>
        
          
           
        
             
      </>
    
  );
}

export default App;
import React from 'react';
import './App.css';

import Hero from './Components/Hero/Hero';

import Program from './Components/Programs/Program';
import Region from './Components/Regions/Region';
import Plan from './Components/Plans/Plan';
import Testimonial from './Components/Testimonials/Testimonial';
import Join from './Components/Join/Join';
import Footer from './Components/Footer/Footer';
import XTRA from './Components/XTRA/XTRA';


function App() {
  return (
      <div className="App">
       <Hero/>
       <Program/>
       <Region/>
       <Plan></Plan>
       <Testimonial/>
       <Join/>
       {/* <XTRA/> */}
     <Footer/>
    </div>
  );
}

export default App;

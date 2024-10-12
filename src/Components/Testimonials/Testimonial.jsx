import React from 'react'
import { useState } from 'react'
import './Testimonials.css'
import {testimonialsData} from '../../data/testimonialsData'
import leftArrow from '../../assets/leftArrow.png'
import rightArrow from '../../assets/rightArrow.png'
import { motion } from 'framer-motion'
import { type } from '@testing-library/user-event/dist/type'
const Testimonial = () => {
  const [selected,setSelected]=useState(0);
  const tlength=testimonialsData.length;
  const transition={type:'spring',duration:1}
  return (
    <div className='testimonials'>
      <div className='blur  c'></div>
      <div className='left-t'>

        <span > Testimonials</span>
        <span>what they</span>
        <span className='stroke'>say about us</span>

        <span>
          {testimonialsData[selected].review}
        </span>
        <span>
          <span className='x'>
            {testimonialsData[selected].name}
          </span>
          -{testimonialsData[selected].status}
        </span>
      </div>
      <div className='right-t'>
        <motion.div
        initial={{right:'20rem'}}
        whileInView={{right:'16rem'}}
        transition={(transition)}
        ></motion.div>
        <motion.div
        initial={{right:'-1rem'}}
        whileInView={{right:'14rem'}}
        transition={transition}
        ></motion.div>
        <img src={testimonialsData[selected].image}/>
        <div className='arrow'>
          <img 
          onClick={()=>{
            selected===0
            ? setSelected(tlength-1)
            :setSelected((prev)=>prev-1);
          }}
          src={leftArrow}/>
          <img 
          onClick={()=>{
            selected===tlength-1
            ? setSelected(0)
            :setSelected((prev)=>prev+1);
          }}
          src={rightArrow}/>
        </div>
      </div>
    </div>
  )
}

export default Testimonial

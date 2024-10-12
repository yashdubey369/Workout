import React from 'react'
import './Hero.css'
import Header from '../Header/Header'
import Heart from '../../assets/heart.png'
import Heroim from '../../assets/th6.png'
import Heroim2 from '../../assets/hero_image_back.png'
import Calories from '../../assets/calories.png'
import frame1 from '../../assets/frame1.png'
import frame2 from '../../assets/frame2.png'
import { motion } from 'framer-motion'
import { type } from '@testing-library/user-event/dist/type'
import NumberCounter from 'number-counter'
const Hero = () => {
    const transition={type:'spring',duration:5}
  return (
  <div className="hero">
    <div className='blur heroblur'></div>
 
    <div className='left-h'>
        <Header/>
    {/*the best add */}
    <div className='the-best'>
        <motion.div
        initial={{left:'238px'}}
        whileInView={{left:'8px'}}
        transition={{...transition,type:Infinity}}></motion.div>
        <span>the best fitness club of varanasi</span>
    </div>
    

    {/* hero*/}
    <div className='herotext'>
    <div className='tests'>
        <span className='stroke'>No </span>
        <span>Pain</span>
    </div>
  <div className='test'>
      <span> No</span>
      <span className='stroke'> Gain</span>
 </div>
 <div>Makes Your Body Fit And provide charm hurry up for the admission now !!</div>

    </div>
    {/*figure */}
    <div className='figure'>
        <div>
            <span>
                <NumberCounter end={540} start={520} delay='500' preFix="+"/>
            </span>
            <span>Expert Trainers</span>
        </div>

        <div>
            <span>  <NumberCounter end={10000} start={5000} delay='100' preFix="+"/></span>
            <span>Members Joined</span>
        </div>

        <div>
            <span>  <NumberCounter end={158} start={125} delay='800' preFix="+"/></span>
            <span>Fitness Programm</span>
        </div>
    </div>
    {/*hero button */}
    <div className='button'>
        <button className='btn'>Get Started</button>
        <button className='btn'>Learn More</button>
    </div>

    </div>
     <div className='right-h'>
        <button className='btn  xb'    onClick={()=>{window.scrollTo(0,3100) } }  >Join Now
        </button>
        <motion.div 
       initial={{right:'-1rem'}}
       whileInView={{right:'3.9rem'}}
       transition={transition}
        className='heartrate'>

        <img src={Heart} alt=''></img>
            <span>Heart Rate</span>
            <span>  <NumberCounter end={115} start={80} delay='600'/>bpm</span>
        </motion.div>
        {/*promoters */}
        <img src={Heroim2} alt='' className='heroim2'/>
        <div className='heroth'>
        <motion.div
     initial={{right:'-1rem'}}
     whileInView={{right:'16rem'}}
     transition={transition} className='po'></motion.div>
        <img src={Heroim} alt='' className='heroim'/>
        <img src={frame1} alt=''className='frame1'/>
        </div>
        {/* <img src={frame2} alt=''className='frame2'/> */}
        </div> 

        {/*calories */}
        <motion.div
        
        className='calorie'>
            <div className='cal'>
                
      <img src={Calories} alt=' '/>
      <span>Clories Burn</span>
      <span>  <NumberCounter end={10000} start={100} delay='300' />kcal</span>
            </div>

        </motion.div>
     </div>
  )
}

export default Hero

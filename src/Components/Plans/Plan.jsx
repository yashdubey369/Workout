import React from 'react'
import './Plan.css'
import {plansData} from '../../data/plansData'
import whiteTick from '../../assets/whiteTick.png'
const Plan = () => {
  return (
    <div className='S'>
    <div className='T'>
      <div className='blur o'></div>

    <span className='stroke'>READY TO START</span>
    <span>YOUR JOURNEY</span>
    <span className='stroke'>WITH OUR PROGRAM</span>
    </div>

  
 <div className='plandata'>
      {plansData.map((plan,i)=>(
        <div className='Plan'>
            {plan.icon}
            <span>{plan.name}</span>
            <span> $ {plan.price}</span>
            <div className='features'>
                {plan.features.map((feature,i)=>(
                    <div className='feature'>
            <img src={whiteTick}/>
            <span key={i}>{feature}</span>
            </div>
              
            ))}
            </div>

            <div className='sk'>
                <span>See More--</span>
                <button className='btn'>Join Now</button>
              </div>
        </div>
      ))}
    </div>
    </div>
  )
} 

export default Plan;

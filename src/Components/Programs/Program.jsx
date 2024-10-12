import React from 'react'
import {programsData} from '../../data/programsData'
import './Program.css'
import Right from '../../assets/rightArrow.png'
const Program = () => {
  return (
    <div className='programs' id='programs'>
      <div className=' blur t'></div>
        {/*header */}
        <div className='programhead'>

      <span className='stroke'>Explore Prime</span>
      <span>Programs</span>
      <span className='stroke'>To Shape You</span>
        </div>

        <div className='categories'>
            {programsData.map((program)=>(
                <div className='cat'>
                <span>{program.image}</span>
                <span>{program.heading}</span>
                <span>{program.details}</span>
                <div className='join'>
                    <span>JOIN NOW</span>
                    <img src={Right}/>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Program

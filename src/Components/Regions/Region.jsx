import React from 'react'
import './Region.css'
import img1 from '../../assets/2.jpg'
import img2 from '../../assets/3.jpg'
import img3 from '../../assets/4.jpg'
import img4 from '../../assets/5.jpg'
import tick from '../../assets/tick.png'
const Region = () => {
  return (
    <div className='Region' id='Region'>
      <div className='blur b'></div>
      <div className='left-r'>
<img src={img3}/>
<img src={img2}/>
<img src={img1}/>
{/* <img src={img4}/> */}

      </div>
      <div className='right-r'>
        <span>Some Reasons</span>
        <div>
            <span className='stroke'>Why</span>
            <span> Choose Us ?</span>

            <div className='detail'>
                <div>
                    <img src={tick}/>
                    <span>OVER 200+ EXPERT TRAINERS</span>
                </div>
                <div>
                    <img src={tick}/>
                    <span>MAKES YOU HARD WORKING AND SMART</span>
                </div>
                <div>
                    <img src={tick}/>
                    <span>TRIAL PACKAGES ARE ALSO AVAILABLE</span>
                </div>
                <div>
                    <img src={tick}/>
                    <span>MAKES YOU EFFICIENCY INCREASE</span>
                </div>
            </div>
        </div>

      </div>
    </div>
  )
}

export default Region

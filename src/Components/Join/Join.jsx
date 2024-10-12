
import './Join.css'
import  emailjs  from '@emailjs/browser'
import React, { useRef } from 'react';

const Join = () => {
    const form= useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_nwzd82z', 'template_pbjbjta', form.current, 'DfA5oFFZy6G0sQtUf')
          .then((result) => {
              console.log(result.text);
              console.log(alert("email sent"));
          }, (error) => {
              console.log(error.text);
          });
      };
  return (
    <div className='joins' >
        <div className='left-j'>
            <hr/>
            <div className='y'>
                <span  className='stroke'>READY TO</span>
                <span>LEVEL UP</span>
            </div>
            <div>
                <span>YOUR BODY</span>
                <span className='stroke'> WITH US ?</span>
            </div>
        </div>
            <div className='right-j'>
                <div className='em'>

                  <form ref={form} action=" " className="emails" onSubmit={sendEmail}  >

              

                    <input type="email" name="user_email" placeholder="Enter Email Address"/>
                  <button className='btn'>Join Now</button>
                  
                  </form>
                </div>
            </div>
      
    </div>
  ) 
}

export default Join

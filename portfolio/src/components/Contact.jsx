import React from 'react';
import { SiGmail } from 'react-icons/si';

function Contact() {
  return (
    <section id='contact'>
      <div className='contact-main-container'>
        <h3 className='text-style'>Contact</h3>
        <h4 className='text-style'>Dont be shy! Hit me up!</h4>
        <div className='contact-elements-container w-3/4'>
          <div className='contact-left-container contact-icon-box'>
            <SiGmail size={30} />
            <div className='contact-info'>
              <h3>Email</h3>
              <a href='mailto:marlon.pena.dev@gmail.com'>
                marlon.pena.dev@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

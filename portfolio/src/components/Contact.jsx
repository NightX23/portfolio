import React from 'react';
import { SiGmail } from 'react-icons/si';

function Contact() {
  return (
    <section id='contact'>
      <div className='section-container flex-col'>
        <h3 className='section-title'>Contact</h3>
        <h4 className='section-subtitle'>Dont be shy! Hit me up!</h4>
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

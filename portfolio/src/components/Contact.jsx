import React from 'react';
import MailInfo from './contact-elements/MailInfo';
import LinkedInCard from './contact-elements/LinkedInCard';

function Contact() {
  return (
    <section id='contact'>
      <div className='section-container flex-col'>
        <h3 className='section-title'>Contact</h3>
        <h4 className='section-subtitle'>Dont be shy! Hit me up!</h4>
        <div className='contact-elements-container w-3/4'>
          <MailInfo />
          <LinkedInCard />
        </div>
      </div>
    </section>
  );
}

export default Contact;

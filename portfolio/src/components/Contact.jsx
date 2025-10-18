import React from 'react';
import MailInfo from './contact-elements/MailInfo';
import LinkedInCard from './contact-elements/LinkedInCard';

function Contact({ content }) {
  const { title, subtitle, email } = content;
  return (
    <section id='contact'>
      <div className='section-container flex-col'>
        <h3 className='section-title'>{title}</h3>
        <h4 className='section-subtitle'>{subtitle}</h4>
        <div className='contact-elements-container w-3/4'>
          <MailInfo email={email} />
          <LinkedInCard />
        </div>
      </div>
    </section>
  );
}

export default Contact;

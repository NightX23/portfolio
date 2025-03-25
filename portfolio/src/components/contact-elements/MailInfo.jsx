import React from 'react';
import { SiGmail } from 'react-icons/si';

export const MailInfo = () => {
  return (
    <div className='contact-left-container contact-icon-box'>
      <SiGmail size={30} />
      <div className='contact-info'>
        <h3>Email</h3>
        <a href='mailto:marlon.pena.dev@gmail.com'>marlon.pena.dev@gmail.com</a>
      </div>
    </div>
  );
};

export default MailInfo;
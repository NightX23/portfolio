import React from 'react';
import { SiGmail } from 'react-icons/si';

export const MailInfo = ({ email }) => {
  return (
    <div className='contact-left-container contact-icon-box'>
      <SiGmail size={30} />
      <div className='contact-info'>
        <h3>Email</h3>
        <a href={`mailto:${email}`}>{email}</a>
      </div>
    </div>
  );
};

export default MailInfo;

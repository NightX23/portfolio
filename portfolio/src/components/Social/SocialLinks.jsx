import React from 'react';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';

function SocialLinks({ alignment = 'justify-center' }) {
  return (
    <span className={`flex gap-5 cursor-pointer ${alignment}`}>
      <a
        className='text-5xl'
        aria-label='linkedin'
        rel='noreferrer'
        target='_blank'
        href='https://www.linkedin.com/in/marlon-pena/'
      >
        <AiFillLinkedin />
      </a>
      <a
        className='text-5xl'
        aria-label='github'
        rel='noreferrer'
        target='_blank'
        href='https://github.com/NightX23'
      >
        <AiFillGithub />
      </a>
    </span>
  );
}

export default SocialLinks;

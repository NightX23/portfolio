import React from 'react';
import { AiOutlineLinkedin, AiFillGithub } from 'react-icons/ai';

function Footer() {
  return (
    <footer>
      <div className='text-center'>
        <div className=''>
          <h3 className=' text-white'>
            Copyright &copy; 2025. All right reserved
          </h3>
        </div>

        <div className='flex flex-col'>
          <span className='flex flex-row gap-5 cursor-pointer'>
            <a
              className='text-5xl'
              aria-label='linkedin'
              rel='noreferrer'
              target='_blank'
              href='https://www.linkedin.com/in/marlon-pena/'
            >
              {' '}
              <AiOutlineLinkedin />{' '}
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
        </div>
      </div>
    </footer>
  );
}

export default Footer;

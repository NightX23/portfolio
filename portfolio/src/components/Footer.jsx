import React from 'react';
import SocialLinks from './Social/SocialLinks';

function Footer() {
  return (
    <footer>
      <div className='text-center'>
        <div>
          <h3 className=' text-white'>
            Copyright &copy; 2025. All right reserved
          </h3>
        </div>
        <SocialLinks />
      </div>
    </footer>
  );
}

export default Footer;

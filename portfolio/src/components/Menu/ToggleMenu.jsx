import React from 'react';
import { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import Menu from './Menu';

function ToggleMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className='dropdown'>
      <AiOutlineMenu onClick={toggleDropdown}>
        {isOpen ? 'Close' : 'Open'} Menu
      </AiOutlineMenu>
      {isOpen && <Menu />}
    </div>
  );
}

export default ToggleMenu;

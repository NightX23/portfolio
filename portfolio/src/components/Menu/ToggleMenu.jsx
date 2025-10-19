import React from 'react';
import { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import Menu from './Menu';

function ToggleMenu({ menuOptions }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className='dropdown'>
      <AiOutlineMenu onClick={toggleDropdown}>
        {isOpen ? 'Close' : 'Open'} Menu
      </AiOutlineMenu>
      {isOpen && <Menu menuOptions={menuOptions} />}
    </div>
  );
}

export default ToggleMenu;

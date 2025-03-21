import React from 'react';

function Menu() {
  return (
    <ul className='menu-list'>
      <li>
        {' '}
        <a href='#home'>Home</a>
      </li>
      <li>
        {' '}
        <a href='#about'>About</a>
      </li>
      <li>
        {' '}
        <a href='#projects'>Projects</a>
      </li>
      <li>
        {' '}
        <a href='#contact'>Contact</a>
      </li>
    </ul>
  );
}

export default Menu;

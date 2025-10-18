import React from 'react';

function Menu({menuOptions}) {

  const { home, about, projects, contact } = menuOptions;
  return (
    <ul className='menu-list'>
      <li>
        {' '}
        <a href='#home'>{home}</a>
      </li>
      <li>
        {' '}
        <a href='#about'>{about}</a>
      </li>
      {/* <li>
        {' '}
        <a href='#projects'>{projects}</a>
      </li> */}
      <li>
        {' '}
        <a href='#contact'>{contact}</a>
      </li>
    </ul>
  );
}

export default Menu;

import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Menu from './components/Menu';
import Home from './components/Home';

function App() {
  return (
    <>
      <nav id='navbar'>
        <a className='brand' href='/'>
          Marlon.dev
        </a>
        <div className=''>
          <Menu />
        </div>
      </nav>
      <Home />
    </>
  );
}

export default App;

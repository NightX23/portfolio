import './App.css';
import Menu from './components/Menu/Menu';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';
import Contact from './components/Contact';
import ToggleMenu from './components/Menu/ToggleMenu';

function App() {
  return (
    <>
      <nav id='navbar'>
        <a className='brand' href='/'>
          Marlon.dev
        </a>
        <div>
          <Menu />
        </div>
        <ToggleMenu />
      </nav>
      <Home />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;

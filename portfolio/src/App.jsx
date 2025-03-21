import './App.css';
import Menu from './components/Menu';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';
import Contact from './components/Contact';

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
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;

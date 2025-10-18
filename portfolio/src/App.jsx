import './App.css';
import Menu from './components/Menu/Menu';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';
import Contact from './components/Contact';
import ToggleMenu from './components/Menu/ToggleMenu';
import { useFirebaseData } from './hooks/FirebaseDataHooks';

function App() {
  const { sectionsInfo, loading: _loading, error: _error } = useFirebaseData();
  const sectionsText = sectionsInfo.en;

  if (_loading) return <div className='loading'>Loading...</div>;
  
  return (
    <>
      <nav id='navbar'>
        <a className='brand' href='/'>
          Marlon.dev
        </a>
        <div>
          <Menu menuOptions={sectionsText.menu} />
        </div>
        <ToggleMenu />
      </nav>
      <Home content={sectionsText.main} />
      <About content={sectionsText.about} />
      <Contact content={sectionsText.contact} />
      <Footer />
    </>
  );
}

export default App;

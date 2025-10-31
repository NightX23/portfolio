import './App.css';
import Menu from './components/Menu/Menu';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ToggleMenu from './components/Menu/ToggleMenu';
import useFirebase from './hooks/FirebaseDataHooks';

function App() {
  const { items, loading: _loading } = useFirebase().getSectionsData;

  const sectionsText = items.en;

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
        <ToggleMenu menuOptions={sectionsText.menu} />
      </nav>
      <Home content={sectionsText.main} />
      <About content={sectionsText.about} />
      <Experience content={sectionsText.experience} />
      <Contact content={sectionsText.contact} />
      <Footer />
    </>
  );
}

export default App;

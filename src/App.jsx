import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Works from './components/Works.jsx';
import Services from './components/Services.jsx';
import Footer from './components/Footer.jsx';
import Scroll from './components/Scroll.tsx'
import Intro from './components/Intro.tsx';
import css from '../src/App.css';

function App() {
  return (
    <div>  
        <Hero/>
        <Intro/>
        <Services/>
        <Works/>
        <Scroll/>
    </div>
  );
}

export default App;

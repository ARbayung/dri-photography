import Hero from './components/Hero.jsx';
import Works from './components/Works.jsx';
import Services from './components/Services.jsx';
import Scroll from './components/Scroll.tsx'
import Intro from './components/Intro.tsx';
import Contact from './components/Contact.jsx';

function App() {
  return (
    <div>  
        <Hero/>
        <Intro/>
        <Services/>
        <Works/>
        <Scroll/>
        <Contact/>
    </div>
  );
}

export default App;

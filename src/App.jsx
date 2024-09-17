import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Works from './components/Works.jsx';
import Services from './components/Services.jsx';
import Banner from './components/Banner.jsx';
import Footer from './components/Footer.jsx';
import Scroll from './components/Scroll.tsx'
import Intro from './components/Intro.tsx';
import css from '../src/App.css';

function App() {
  return (
    <div>
      {/* <header className='landing-container'> */}
        <Hero/>
      {/* </header> */}
        <body>
        <Intro/>
        <Services/>
        <Works/>
        <Scroll/>
        <Banner/>
        </body>
        <Footer/>
    </div>
  );
}

export default App;

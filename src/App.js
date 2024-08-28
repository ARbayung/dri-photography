import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Works from './components/Works';
import Services from './components/Services';
import Banner from './components/Banner';

function App() {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Works/>
        <Services/>
        <Banner/>
    </div>
  );
}

export default App;

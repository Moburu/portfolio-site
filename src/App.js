import './App.css';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Landing from './Components/Landing/Landing';
import Navbar from './Components/Navbar/Navbar';
import Projects from './Components/Projects/Projects';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <Projects />
      <About />
      <Contact />
    </div>
  );
}

export default App;

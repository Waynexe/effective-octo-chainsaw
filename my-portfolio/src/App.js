//import logo from './logo.svg';
import backgroundVideo from './halo-loop.mp4';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Welcome from './components/Welcome/Welcome';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
/*import Contact from './components/Contact/Contact';
 */
function App() {
  return (
    <main>
        <div className='topbar'>
        <video autoPlay loop muted id='video'>
          <source src={backgroundVideo} type='video/mp4'/>
        </video>
        <Navbar />
        <Welcome />
        </div>
        <About />
        <Projects />
        <Skills />
    </main>
  );
}

export default App;

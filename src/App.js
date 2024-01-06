import './App.css';
import Home from './components/Home';
import About from './components/about/about';
import Explore from './components/about/explore';
import Lists from './components/about/lists';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Lists />
      <Explore />
    </div>
  );
}

export default App;

import './App.css';
import Header from './components/header/header';
import Hero from './components/hero/hero';
import About from './components/about/about';
import Projects from './components/projects/projects';

function App() {
  return (
    <div className="App box-border p-0 m-0 font-body">
      <Header/>
      <Hero/>
      <About/>
      <Projects/>
    </div>
  );
}

export default App;

import './App.css';
import Header from './components/header/header';
import Hero from './components/hero/hero';
import About from './components/about/about';

function App() {
  return (
    <div className="App box-border p-0 m-0 font-body">
      <Header/>
      <Hero/>
      <About/>
    </div>
  );
}

export default App;

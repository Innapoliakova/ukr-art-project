
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Artobjects from './components/Artobjects';
import Donate from './components/Donate';
import Object from './components/Object';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Artobjects>
        <Object />
        <Object />
        <Object />
      </Artobjects>
      <Donate />
      <Footer />
    </div>
  );
}

export default App;


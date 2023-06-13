import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Artobjects from './components/Artobjects';
import Donate from './components/Donate';

function App() {
  return (
    <div className="App">
     <Header/>
     <About/>
     <Artobjects></Artobjects>
     <Donate/>
     <Footer/>
    </div>
  );
}

export default App;


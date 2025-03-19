import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills'; // Import the Skills component

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <AboutMe />
      <Skills /> 
    </>
  );
}

export default App;

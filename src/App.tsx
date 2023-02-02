import React from 'react';
import './styles/_main.scss';
import Navbar from './Components/Navbar';
import Home from './pages/Home';

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Home />
    </>
  );
};

export default App;

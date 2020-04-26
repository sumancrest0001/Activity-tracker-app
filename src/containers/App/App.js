import React from 'react';
import Header from '../../components/Header/Header';
import Slogan from '../../components/Slogan/Slogan';
import Footer from '../../components/Footer/Footer';
import Dashboard from '../Dashboard/Dashboard';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Slogan />
      <Dashboard />
      <Footer />
    </div>
  );
}

export default App;

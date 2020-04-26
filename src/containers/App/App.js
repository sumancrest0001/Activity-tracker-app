import React from 'react';
import Header from '../../components/Header/Header';
import Slogan from '../../components/Slogan/Slogan';
import Footer from '../../components/Footer/Footer';
import Authentication from '../Authentication/Authentication';
import History from '../History/History';
import Dashboard from '../Dashboard/Dashboard';
import Stat from '../Stat/Stat';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <Header />
      <Slogan />
      <History />
       <Stat /> 
       <Dashboard /> 
      <Footer /> */}
      <Authentication />
    </div>
  );
}

export default App;

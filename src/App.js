import React from 'react';
import './styles/globals.css';
import Header from './components/Header'
import Left from './components/Left'
import Center from './components/Center'
import Right from './components/Right'

function App() {
  return (
    <div>
      <Header />
      <div className="section__main">
        <Left />
        <Center />
        <Right />
      </div>
    </div>
  );
}

export default App;

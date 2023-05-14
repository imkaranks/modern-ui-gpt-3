import React from 'react';
import './App.css';
import Header from './containers/Header';
import Sponsors from './containers/Sponsors';
import WhatGPT3 from './containers/WhatGPT3';
import Features from './containers/Features';
import Possibilities from './containers/Possibilities';

function App() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Sponsors />
        <WhatGPT3 />
        <Features />
        <Possibilities />
      </main>
    </>
  );
}

export default App;
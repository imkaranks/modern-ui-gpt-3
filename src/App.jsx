import React from 'react';
import './App.css';
import Header from './containers/Header';
import Sponsors from './containers/Sponsors';
import WhatGPT3 from './containers/WhatGPT3';
import Features from './containers/Features';

function App() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Sponsors />
        <WhatGPT3 />
        <Features />
      </main>
    </>
  );
}

export default App;
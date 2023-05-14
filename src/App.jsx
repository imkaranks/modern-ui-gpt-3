import React from 'react';
import './App.css';
import Header from './containers/Header';
import Sponsors from './containers/Sponsors';
import WhatGPT3 from './containers/WhatGPT3';

function App() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Sponsors />
        <WhatGPT3 />
      </main>
    </>
  );
}

export default App;
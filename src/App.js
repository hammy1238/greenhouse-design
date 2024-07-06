import React from 'react';
import Toolbar from './components/Toolbar';
import Canvas from './components/Canvas';
import PropertiesPanel from './components/PropertiesPanel';
import './App.css';

function App() {
  return (
    <div className="App">
      <Toolbar />
      <div className="main-content">
        <Canvas />
        <PropertiesPanel />
      </div>
    </div>
  );
}

export default App;

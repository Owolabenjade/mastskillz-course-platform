import React from 'react';
import './App.css';
import MastskillzWebsite from './components/MastskillzWebsite';
import { ModuleProvider } from './context/ModuleContext';

function App() {
  return (
    <div className="App">
      <ModuleProvider>
        <MastskillzWebsite />
      </ModuleProvider>
    </div>
  );
}

export default App;
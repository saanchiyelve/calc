import React, { useState } from 'react';
import './App.css';
import Calculator from './components/Calculator';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="App" data-theme={theme}>
      <div className="app-container">
        <header className="app-header">
          <h1>Calculator</h1>
          <button 
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </header>
        <Calculator />
      </div>
    </div>
  );
}

export default App; 
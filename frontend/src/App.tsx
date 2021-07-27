import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import './styles/App.css';

import PhonePage from './pages';
import FloatingButton from './components/FloatingButton';

function App() {
  return (
    <>
      <CssBaseline />
      <div className="App">
        <PhonePage />
        <FloatingButton />
      </div>
    </>
  );
}

export default App;

import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import './styles/App.css';

import PhonePage from './pages';

function App() {
  return (
    <>
      <CssBaseline />
      <div className="App">
        <PhonePage />
      </div>
    </>
  );
}

export default App;

import React from 'react'
import Router from '@routes'
import { Theme } from '@styles'
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Theme>
        <Router />
      </Theme>
    </BrowserRouter>
  );
}

export default App;

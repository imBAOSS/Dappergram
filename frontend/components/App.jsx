import React from 'react';
import { Link } from 'react-router';

const App = ({ children }) => (
  <div>
    <header>
      <Link to="/">
        <h1>Dappergram</h1>
      </Link>
    </header>
    {children}
  </div>
);

export default App;
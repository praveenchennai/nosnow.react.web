import React from 'react';
import Base from './components/layout/base'
import './App.css';
import Routes from 'components/routes'

const App = () => {
  return (
    <React.Fragment>
          <Base>
            <Routes />
          </Base>
    </React.Fragment>
  );
}

export default App;

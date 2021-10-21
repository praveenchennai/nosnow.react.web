import React, { useState, useEffect } from 'react';
import { makeStyles, createTheme, ThemeProvider } from '@mui/material/styles';
import customStyle from 'common/style/custom-style';
import './App.css';
import Routes from 'components/routes'
const THEME = createTheme(customStyle());

const App = () => {
  return (
    <React.Fragment>
      <ThemeProvider theme={THEME}>
          <Base>
            <Routes className={classes.routes}/>
          </Base>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;

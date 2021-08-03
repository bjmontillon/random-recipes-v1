import React from 'react';
import Container from '@material-ui/core/Container';
//import Grid from '@material-ui/core/Grid';
//import Paper from '@material-ui/core/Paper';

import { makeStyles } from '@material-ui/core/styles';

import Header from './Header/Header';
import Navbar from './NavBar/Navbar';
import ApiWrapper from './ApiWrapper/ApiWrapper';

import './App.css';

const useStyles = makeStyles({

  appContainer: {
    
  },
  sample: {
  border: '1px solid green',
  },

})

function App() {

  const classes = useStyles();

  return (
    
    

      <Container className={classes.appContainer} maxWidth='md'>
        <Header />
        <Navbar  />
        <ApiWrapper />
      </Container>
    
  );
}

export default App;

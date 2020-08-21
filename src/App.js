import React from 'react';
import Todo from './components/Todo'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core';
import Header from './components/Header/Header';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container direction='column'>
        <Grid item>
          <Header />
        </Grid>
        <Grid container>
          <Grid item xs={1} sm={1} />
          <Grid item xs={11} sm={10} >
            <Todo />
          </Grid>
          <Grid item xs={false} sm={1} />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;

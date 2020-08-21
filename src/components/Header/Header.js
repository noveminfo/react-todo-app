import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import ListAltIcon from '@material-ui/icons/ListAlt';
import { makeStyles, Button } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1,
    marginLeft: theme.spacing(1)
  },
  icon: {
    fontSize: 38,
    marginLeft: theme.spacing(2)
  },
  button: {
    marginRight: theme.spacing(4)
  }
}))

function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root} >
      <AppBar>
        <Toolbar>
          <ListAltIcon className={classes.icon} />
          <Typography variant="h4" className={classes.title}>Todo List</Typography>
          {['home', 'tool', 'about', 'login'].map((item, index) => (
            <Button
              key={index}
              className={classes.button}
              color="inherit"
            >
              {item}
            </Button>
          ))}
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Toolbar />
    </div>
  )
}

export default Header

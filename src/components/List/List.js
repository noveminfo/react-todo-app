import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Checkbox, ListItemIcon } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '80%',
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(4)
  },
  list__done: {
    textDecoration: 'line-through',
    color: 'gray'
  }
}));

function TodoList({ todos }) {
  const classes = useStyles();
  const [checked, setChecked] = useState([])

  const handleToggle = index => () => {
    const curIndex = checked.indexOf(index)
    const newChecked = [...checked]
    curIndex === -1 ? newChecked.push(index) : newChecked.splice(curIndex, 1)
    setChecked(newChecked)
  }

  return (
    <div className={classes.root}>
      <List>
        {todos.map((todo, index) => {
          return (
            <ListItem
              key={index}
            >
              <ListItemIcon>
                <Checkbox
                  checked={checked.indexOf(index) !== -1}
                  onClick={handleToggle(index)}
                />
              </ListItemIcon>
              {checked.indexOf(index) !== -1 ? (
                <ListItemText primary={todo} className={classes.list__done} />
               ) : ( 
                <ListItemText primary={todo} />
              )}
            </ListItem>
          )
        }

        )}
      </List>
    </div >
  )
}

export default TodoList

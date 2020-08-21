import React, { useState } from 'react'
import FormControl from '@material-ui/core/FormControl';
import { InputLabel, Input, makeStyles, Button } from '@material-ui/core';
import TodoList from './List/List';

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(4)
  },
  form: {
    width: '70%',
    maxWidth: 350
  },
  button: {
    margin: theme.spacing(1)
  }
}))

function Todo() {
  const classes = useStyles();
  const [todos, setTodo] = useState(['Reading', 'Shopping'])
  const [input, setInput] = useState('')

  const handleInput = e => {
    e.preventDefault();
    setTodo([...todos, input])
    setInput('')
  }

  return (
    <div>
      <FormControl className={classes.form}>
        <InputLabel>Type Your Todo</InputLabel>
        <Input value={input} onChange={e => setInput(e.target.value)} />
      </FormControl>
      <Button
        variant='contained'
        color='primary'
        type='submit'
        className={classes.button}
        onClick={handleInput}
        disabled={!input}
      >
        ADD
      </Button>
      <TodoList todos={todos} />
    </div>
  )
}

export default Todo

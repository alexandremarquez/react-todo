import React from 'react';
import {
  Typography,
  TextField,
  Button,
  List,
  ListItem,
  Checkbox,
  ListItemText,
  ListItemIcon,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(5),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    margin: theme.spacing(2),
  },
  button: {
    margin: theme.spacing(2),
  },
  list: {
    marginTop: theme.spacing(5),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    justifyContent: 'flex-start',
    width: '100%',
  },
}));

function Todo() {
  const classes = useStyles();
  const [editTask, setEditTask] = React.useState('');
  const [tasks, setTasks] = React.useState({});

  function handleClick(e) {
    e.preventDefault();
    const randomkey = Math.floor(Math.random() * Date.now());

    setTasks(prevState => ({
      ...prevState,
      [randomkey]: editTask,
    }));

    setEditTask('');
  }

  function handleChange(e) {
    e.preventDefault();
    setEditTask(e.target.value);
  }

  return (
    <div className={classes.root}>
      <Typography variant="h4">React Todo</Typography>
      <div className={classes.form}>
        <TextField
          id="outlined-secondary"
          label="Add new task"
          variant="outlined"
          color="secondary"
          margin="dense"
          value={editTask}
          onChange={handleChange}
        />
        <Button
          disabled={!editTask}
          size="small"
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={handleClick}
        >
          Add
        </Button>
      </div>
      <div className={classes.list}>
        <Typography variant="h6">Tasks</Typography>
        <List>
          {Object.keys(tasks).map(key => (
            <ListItem key={key}>
              <ListItemIcon>
                <Checkbox edge="start" tabIndex={-1} disableRipple />
              </ListItemIcon>
              <ListItemText primary={tasks[key]} />
            </ListItem>
          ))}
        </List>
      </div>
    </div>
  );
}

export default Todo;

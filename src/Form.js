import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw',
    height: '100vh',
    padding: theme.spacing(2),

    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '300px',
    },
    '& .MuiButtonBase-root': {
      margin: theme.spacing(2),
    },
  },
}));

const Form = () => {
  const classes = useStyles();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const pathname = window.location.pathname.split('/')
  let type = pathname.pop().toLowerCase()
  
  if (!type)
    type = pathname.pop().toLowerCase()
  
  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      {type === "signup" &&
      <TextField
          label="First Name"
          variant="filled"
          required
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
        />
      }
      {type === "signup" &&
      <TextField
          label="Last Name"
          variant="filled"
          required
          value={lastName}
          onChange={e => setLastName(e.target.value)}
        />
      }
      <TextField
        label="Email"
        variant="filled"
        type="email"
        required
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <TextField
        label="Password"
        variant="filled"
        type="password"
        required
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <div>
        <Button type="submit" variant="contained" color="primary">
          {type}
        </Button>
      </div>
    </form>
  );
};

export default Form
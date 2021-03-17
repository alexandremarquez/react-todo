import React from 'react';
import { CssBaseline, Container } from '@material-ui/core';
import Todo from './Todo';

function App() {
  return (
    <Container maxWidth="sm">
      <CssBaseline />
      <Todo />
    </Container>
  );
}

export default App;

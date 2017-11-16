import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import './index.css';
import { Container, Header } from 'semantic-ui-react';
import SearchPhone from './containers/SearchPhone';

const App = () => 
  (
    <Container textAlign='center'>
      <Header as='h1' color='grey'>Search Phone in Phonebook</Header>
      <SearchPhone />
    </Container>
  )
export default App;
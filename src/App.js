import React from 'react'; // eslint-disable-line no-unused-vars
import { Container, Header } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './index.css';
import TopMenu from './containers/TopMenu';
import SearchPhone from './containers/SearchPhone';

const App = (props) => {
  return (
  <Container textAlign='center'>
    <TopMenu history={props.history} />
    <Header as='h1' color='grey'>Search Phone in Phonebook</Header>
    <SearchPhone />
  </Container>
  );
};

export default App;

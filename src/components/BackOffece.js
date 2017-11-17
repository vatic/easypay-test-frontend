import React, { Component } from 'react';
import { Input, Container, Table, Grid, Icon, Menu, Button } from 'semantic-ui-react';
import InfoMessage from './InfoMessage';


export default class BackOffice extends Component {
  componentWillMount() {
    this.setState({ currentAddInputText: '' })
    this.props.getPhones();
  }

  componentWillReceiveProps(nextProps) {
    const { error, history, deleteToken } = nextProps.list;
    if (error !== null && !error.ok) {
      deleteToken().run();
      history.push('/login');
    }
  }

  renderPagination(length) {
    const numOfPages = Math.floor(length / 10) + 1;
    const tempAry = [...Array(numOfPages).keys()];
    const pageItems = tempAry.map((item, i) => (
      <Menu.Item as='a' key={`menu_item_${i}`}>{i + 1}</Menu.Item>
    ));
    return (
      <Menu floated='right' pagination>
        <Menu.Item as='a' icon>
          <Icon name='left chevron' />
        </Menu.Item>
        {pageItems}
        <Menu.Item as='a' icon>
          <Icon name='right chevron' />
        </Menu.Item>
      </Menu>
    );
  }

  renderRow() {
    const { result } = this.props.list;
    const { delPhone } = this.props;
    return result.map(p => (
      <Table.Row key={p.id}>
        <Table.Cell>{p.id}</Table.Cell>
        <Table.Cell>{p.phone}</Table.Cell>
        <Table.Cell>
          <Button size='mini' color='red' onClick={() => delPhone(p.phone)}>
            Delete
          </Button>
        </Table.Cell>
      </Table.Row>
    ));
  }

  renderMessage(key) {
    const { status, msg, errorMsg } = this.props[key];
    console.log(this.props[key]);
    const color = status ? 'green' : 'red';
    const text = status ? msg : errorMsg;
    if (text !== '') {
      return (
        <InfoMessage color={color} header={text} timeout={5000} />
      );
    }
    return null;
  }

  render() {
    const { length } = this.props.list.result;
    const { addPhone } = this.props;
    return (
      <Container>
        <Grid centered>
          <Grid.Row>
            <Grid.Column width={3}>
            </Grid.Column>
            <Grid.Column width={10}>
              <Table celled columns={4} textAlign='center'>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>Id</Table.HeaderCell>
                    <Table.HeaderCell>Phone</Table.HeaderCell>
                    <Table.HeaderCell>Actions</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>

                <Table.Body>
                  {this.renderRow()}
                </Table.Body>

                <Table.Footer>
                  <Table.Row>
                    <Table.HeaderCell colSpan='3'>
                      {this.renderPagination(length)}
                    </Table.HeaderCell>
                  </Table.Row>
                </Table.Footer>
              </Table>
            </Grid.Column>
            <Grid.Column width={3}>
              {this.renderMessage('del')}
            </Grid.Column>
          </Grid.Row>
          <Grid.Row centered textAlign='center'>
            <Grid.Column width={6}>
            </Grid.Column>
            <Grid.Column width={4}>
              <Input type='text' placeholder='123-456-7890' action onChange={(e, { value }) => this.setState({ currentAddInputText: value })}>
              <input />
              <Button type='submit' color='teal' onClick={() => addPhone(this.state.currentAddInputText)}>Add Phone</Button>
              </Input>
              {this.renderMessage('add')}
            </Grid.Column>
            <Grid.Column width={6}>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

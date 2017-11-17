import React, { Component } from 'react';
import { Container, Table, Grid, Icon, Menu, Button } from 'semantic-ui-react';

export default class BackOffice extends Component {
  componentWillMount() {
    this.props.getPhones();
  }

  componentWillReceiveProps(nextProps) {
    const { error, history, deleteToken } = nextProps;
    if (Object.keys(error).length > 0 &&!error.ok) {
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
    )
    
  }

  renderRow() {
    const { result } = this.props;
    return result.map(p => (
      <Table.Row key={p.id}>
        <Table.Cell>{p.id}</Table.Cell>
        <Table.Cell>{p.phone}</Table.Cell>
        <Table.Cell><Button color='red'>Delete</Button></Table.Cell>
      </Table.Row>
    ));
  }
  
  render() {
    const { length } = this.props.result;
    return (
      <Container>
        <Grid centered>
      <Grid.Row>
        <Grid.Column width={4}>
        </Grid.Column>
        <Grid.Column width={8}>
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
        </Grid.Column>
      </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

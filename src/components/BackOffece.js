import React, { Component } from 'react';
import { Container, Table, Icon, Label, Menu } from 'semantic-ui-react';

export default class BackOffice extends Component {
  componentWillMount() {
    this.props.getPhones();
  }

  renderRow() {
    return this.props.result.map(p => (
      <Table.Row key={p.id}>
        <Table.Cell>{p.id}</Table.Cell>
        <Table.Cell>{p.phone}</Table.Cell>
      </Table.Row>
    ));
  }


  render() {
    console.log('result', this.props.result);
    return (
      <Container>
        <Table celled>
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
                <Menu floated='right' pagination>
                  <Menu.Item as='a' icon>
                    <Icon name='left chevron' />
                  </Menu.Item>
                  <Menu.Item as='a'>1</Menu.Item>
                  <Menu.Item as='a'>2</Menu.Item>
                  <Menu.Item as='a'>3</Menu.Item>
                  <Menu.Item as='a'>4</Menu.Item>
                  <Menu.Item as='a' icon>
                    <Icon name='right chevron' />
                  </Menu.Item>
                </Menu>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        </Table>
      </Container>
    );
  }
}

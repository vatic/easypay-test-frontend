import React from 'react';
import { Header, Input, Container, Table, Grid, Icon, Menu, Button } from 'semantic-ui-react';
import InfoMessage from './InfoMessage';
import TopMenu from '../containers/TopMenu';


export default class BackOffice extends React.Component {
  componentWillMount() {
    this.setState({ currentAddInputText: '' });
    this.props.getPhones(0);
    this.props.getTotal();
  }

  componentWillReceiveProps(nextProps) {
    const { error } = nextProps.list;
    const { history, deleteToken } = nextProps;
    if (error !== null && !error.ok) {
      deleteToken().run();
      history.push('/login');
    }
  }

  renderPagination(length) {
    const numOfPages = length % 10 === 0 ? Math.floor(length / 10) : Math.floor(length / 10) + 1;
    const tempAry = [...Array(numOfPages).keys()];
    const { currentOffset, total } = this.props.list;
    const prev = (currentOffset - 10) > 0 ? (currentOffset - 10) : 0;
    const next = (currentOffset + 10) < total ? (currentOffset + 10) : currentOffset;
    const pageItems = tempAry.map((item, i) => (
      <Menu.Item
        as='a'
        onClick={(e, { children }) => this.props.getPhones((children - 1) * 10)}
        key={`menu_item_${i}`}>{i + 1}</Menu.Item>
    ));
    return (
      <Menu floated='right' pagination>
        <Menu.Item
          onClick={(e, { children }) => this.props.getPhones(prev)}
          disabled={currentOffset === 0}
          as='a' icon >
          <Icon name='left chevron' />
        </Menu.Item>
        {pageItems}
        <Menu.Item
          onClick={(e, { children }) => this.props.getPhones(next)}
          disabled={currentOffset === next}
          as='a' icon>
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
    const { total } = this.props.list;
    const { addPhone } = this.props;
    return (
      <Container>
        <TopMenu history={this.props.history} />
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
                    <Table.HeaderCell>
                      <Header as='h3' color='grey'>
                        Total phones: {total}
                      </Header>
                    </Table.HeaderCell>
                    <Table.HeaderCell colSpan='3'>
                      {this.renderPagination(total)}
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

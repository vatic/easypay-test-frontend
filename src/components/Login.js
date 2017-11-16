import React, { Component } from 'react';
import { Form, Button, Container, Grid, Header } from 'semantic-ui-react';

export default class Login extends Component {
  componentWillMount() {
    this.resetComponent();
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    if (typeof nextProps.accessToken === 'string' && nextProps.accessToken.length > 0) nextProps.history.push('/');
  }

  resetComponent = () => this.setState({ username: '', password: '' });

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  handleSubmit = () => {
    const { username, password } = this.state;
    this.props.loginAction(username, password)
  }

  render() {
    const { username, password } = this.state;
    console.log(this.props);
    return (
      <Container>
        <Grid verticalAlign='middle' textAlign='center' centered={true} columns={3}>
          <Grid.Column>
            <Header as='h2' color='grey'>Login to your account</Header>
            <Form onSubmit={this.handleSubmit}>
              <Form.Field>
                <Form.Input placeholder='Username' name='username' value={username} onChange={this.handleChange} />
              </Form.Field>
              <Form.Field>
                <Form.Input placeholder='Password' name='password' type='password' value={password} onChange={this.handleChange} />  
              </Form.Field>
              <Button type='submit'>Submit</Button>
            </Form>
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

import { connect } from 'react-redux';

import { login as loginAction } from '../actions/auth/login';
import Login from '../components/Login';


const mapStateToProps = (state) => {
  console.log(state.auth.login);
  const { login } = state.auth;
  return login;
};

export default connect(mapStateToProps, { loginAction })(Login);

import { connect } from 'react-redux';
import TopMenu from '../components/TopMenu';
import { logout } from '../actions/auth/auth';
import deleteToken from '../actions/auth/deleteToken';

const mapStateToProps = (state) => {
  return state.auth;
};

export default connect(mapStateToProps, { logout, deleteToken })(TopMenu);

import { connect } from 'react-redux';

import { getPhones } from '../actions/phones/backoffice';
import deleteToken from '../actions/auth/deleteToken';
import BackOffice from '../components/BackOffece';


const mapStateToProps = (state) => {
  const { list } = state.phones;
  return list;
};

export default connect(mapStateToProps, { getPhones, deleteToken })(BackOffice);

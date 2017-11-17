import { connect } from 'react-redux';

import { getPhones, delPhone, addPhone } from '../actions/phones/backoffice';
import deleteToken from '../actions/auth/deleteToken';
import BackOffice from '../components/BackOffece';

const mapStateToProps = (state) => {
  const { add, del, list } = state.phones;
  return {
    list,
    add,
    del,
  };
};

export default connect(mapStateToProps, {
  getPhones,
  delPhone,
  addPhone,
  deleteToken,
})(BackOffice);

import { connect } from 'react-redux';

import { getPhones } from '../actions/phones/backoffice';
import BackOffice from '../components/BackOffece';


const mapStateToProps = (state) => {
  const { list } = state.phones;
  return list;
};

export default connect(mapStateToProps, { getPhones })(BackOffice);

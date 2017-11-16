import { connect } from 'react-redux';

import checkPhone from '../actions/phones/check_phone';
import SearchPhone from '../components/SearchPhone';


const mapStateToProps = state => (
  { check: state.phones.check }
);

export default connect(mapStateToProps, { checkPhone })(SearchPhone);

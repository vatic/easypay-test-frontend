import { connect } from 'react-redux'

import checkPhone from '../actions/phones/check_phone';
import SearchPhone from '../components/SearchPhone';


const mapStateToProps = state => (
  state
  // { phoneToCheck: state.phones.checkPhone.phone }
)

export default connect(mapStateToProps, { checkPhone })(SearchPhone);

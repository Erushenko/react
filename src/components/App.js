import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actionCreators from '../actions/actionCreators';
import Calendar from './calendar/Calendar';

function mapStateToProps(state) {
  return {
    weekHours: state.weekHours,
    selectAllDay: state.selectAllDay
  }
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispachToProps)(Calendar);

export default App;

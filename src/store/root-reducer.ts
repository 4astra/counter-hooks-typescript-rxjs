import { combineReducers } from 'redux';
import { counterReducer } from '../features/counter/reducers'

export default combineReducers({
  counter: counterReducer
})

import * as counterEpic from '../features/counter/epics';
import { combineEpics } from 'redux-observable'

export default combineEpics(...Object.values(counterEpic))

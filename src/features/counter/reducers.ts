import { createReducer} from 'typesafe-actions';
import {doDecrement, doIncrement} from './actions';

const initState = {
  num: 0
}

export const counterReducer = createReducer(initState)
  .handleAction([doIncrement.success], (state, _) => ({...state, num: state.num + 1}))
  .handleAction([doDecrement.success], (state, _) => ({...state, num: state.num > 0 ? state.num - 1: 0}))

import {createAsyncAction} from 'typesafe-actions'
import { Counter } from 'MyModels';
export const REQUEST_INCREMENT = 'REQUEST_INCREMENT';
export const REQUEST_INCREMENT_SUCCESS = 'REQUEST_INCREMENT_SUCCESS';
export const REQUEST_INCREMENT_FAILURE = 'REQUEST_INCREMENT_FAILURE';
export const REQUEST_DECREMENT = 'REQUEST_DECREMENT'
export const REQUEST_DECREMENT_SUCCESS = 'REQUEST_DECREMENT_SUCCESS'
export const REQUEST_DECREMENT_FAILURE = 'REQUEST_DECREMENT_FAILURE'


export const doIncrement = createAsyncAction(
  REQUEST_INCREMENT,
  REQUEST_INCREMENT_SUCCESS,
  REQUEST_INCREMENT_FAILURE
)<undefined, Counter, string>()

export const doDecrement = createAsyncAction(
  REQUEST_DECREMENT,
  REQUEST_DECREMENT_SUCCESS,
  REQUEST_DECREMENT_FAILURE
)<undefined, Counter, string>()

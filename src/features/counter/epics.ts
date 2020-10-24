import { Epic } from 'redux-observable';
import { isActionOf, RootState, RootAction, Services} from 'typesafe-actions';
import { filter, map, tap, delay} from 'rxjs/operators';
import { doIncrement, doDecrement } from './actions'


export const doIncrementEpic: Epic<
  RootAction,
  RootAction,
  RootState,
  Services
> = (action$, _, { Logger }) => action$.pipe(
  filter(isActionOf(doIncrement.request)),
  tap((action) => Logger.i('Xin chao', action)),
  delay(300),
  map(() => doIncrement.success({ value: 1}))
)

export const doDecrementEpic: Epic<
  RootAction,
  RootAction,
  RootState,
  Services
> = (action$, _, { Logger }) => action$.pipe(
  filter(isActionOf(doDecrement.request)),
  delay(300),
  tap((action) => Logger.i('Xin chao', action)),
  map(() => doDecrement.success({ value: -1}))
)

import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import ReduxPromise from 'redux-promise';
import { logger } from 'redux-logger'
import jobReducer from '../redux/modules/job'

const reducers = combineReducers({
  jobs: jobReducer
})

const middleware = applyMiddleware(
  ReduxPromise,
  thunk,
  logger
)

export const store = createStore(
  reducers,
  composeWithDevTools(middleware)
)
import { showRequest, showSuccess, showFailure } from '../actions'
import { handleActions } from 'redux-actions'
import { combineReducers } from 'redux'

const isLoading = handleActions(
  {
    [showRequest]: () => true,
    [showSuccess]: () => false,
    [showFailure]: () => false
  },
  false
)

const result = handleActions(
  {
    [showRequest]: () => {},
    [showSuccess]: (state, action) => action.payload
  },
  {}
)

const error = handleActions(
  {
    [showRequest]: () => null,
    [showFailure]: (state, action) => action.payload
  },
  null
)

export default combineReducers({
  isLoading,
  result,
  error
})

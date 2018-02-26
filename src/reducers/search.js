import { searchRequest, searchSuccess, searchFailure } from '../actions'
import { handleActions } from 'redux-actions'
import { combineReducers } from 'redux'

const isLoading = handleActions(
  {
    [searchRequest]: () => true,
    [searchSuccess]: () => false,
    [searchFailure]: () => false
  },
  false
)

const isLoaded = handleActions(
  {
    [searchRequest]: () => false,
    [searchSuccess]: () => true,
    [searchFailure]: () => true
  },
  false
)

const results = handleActions(
  {
    [searchRequest]: () => [],
    [searchSuccess]: (state, action) => action.payload
  },
  []
)

const error = handleActions(
  {
    [searchRequest]: () => null,
    [searchFailure]: (state, action) => action.payload
  },
  null
)

export default combineReducers({
  isLoading,
  isLoaded,
  results,
  error
})

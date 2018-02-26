import { search } from '../api'
import { searchSuccess, searchFailure, searchRequest } from '../actions'

export default store => next => action => {
  if (action.type === searchRequest.toString()) {
    search(action.payload)
      .then(shows => store.dispatch(searchSuccess(shows)))
      .catch(error => store.dispatch(searchFailure(error)))
  }

  return next(action)
}

import { show } from '../api'
import { showRequest, showSuccess, showFailure } from '../actions'

export default store => next => action => {
  if (action.type === showRequest.toString()) {
    show(action.payload)
      .then(result => {
        if (result.status === 404) throw new Error(result.status)
        store.dispatch(showSuccess(result))
      })
      .catch(error => store.dispatch(showFailure(error)))
  }

  return next(action)
}

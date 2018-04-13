import { NEW_PICTURE } from '../actions/actions'

const initialState = "../loading.gif"

export default (state = initialState, action) => {
  switch (action.type) {
    case NEW_PICTURE :
        return action.payload


    default :
      return state
  }
}

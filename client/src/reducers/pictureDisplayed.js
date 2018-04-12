import { NEW_PICTURE } from '../actions/actions'

const initialState = "https://www.what-dog.net/Images/faces2/main008.jpg"

export default (state = initialState, action) => {
  switch (action.type) {
    case NEW_PICTURE :
        return action.payload


    default :
      return state
  }
}

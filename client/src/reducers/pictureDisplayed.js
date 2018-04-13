import { NEW_PICTURE } from '../actions/actions'

const initialState = "https://www.stonewallproductions.co.nz/images/425444/progress_bar_dog.gif"

export default (state = initialState, action) => {
  switch (action.type) {
    case NEW_PICTURE :
        return action.payload


    default :
      return state
  }
}

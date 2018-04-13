import { NEW_PICTURE } from '../actions/actions'

const initialState = "https://bit.ly/2EHdZDn"


export default (state = initialState, action) => {
  switch (action.type) {
    case NEW_PICTURE :
        return action.payload


    default :
      return state
  }
}

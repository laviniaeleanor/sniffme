// import LIKE from '../actions/actions'
//
const initialState = {"name": "John", "preferences": ["dog1", "dog2", "dog3", "dog4", "dog5"]}

export default (state = initialState, action) => {
  switch (action.type) {
    // case LIKE :
    //     return action.payload


    default :
      return state
  }
}

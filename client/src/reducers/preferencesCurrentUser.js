
import {LIKE} from '../actions/actions'


const initialState = {}

export default (state = initialState, action) => {
  switch (action.type) {
    case LIKE :
    const step1 = action.payload
    console.log(step1)

    const name = step1.split("/")

    const breed = name[4]
    console.log(breed)



    return [...state, breed]



    default:

      return state
  }
}








//<button onClick= { () => this.like(this.props.pictureDisplayed)}>LIKE</button>

import * as request from 'superagent'

const baseUrl = 'https://dog.ceo/api/breeds/image/random'

export const LIKE = 'LIKE'
export const NEW_PICTURE = 'NEW_PICTURE'
export const FIND_MATCH = 'FIND_MATCH'

export const newPicture = () => (dispatch) => {
  request
    .get(`${baseUrl}`)
    .then(response => dispatch({
      type: NEW_PICTURE,
      payload: response.body.message
    }))
    .catch(err => alert(err))
}

export const like = (breed) => {

    return {
     type: LIKE,
     payload: breed,
 }
}

import React, { PureComponent } from 'react'
// import PropTypes from ‘prop-types’
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const userBank = [{name: "John", preferences: ["dog1", "dog2", "dog3", "dog4", "dog5"]},
{name: "Simon", preferences: ["dog1", "dog2", "dog3"]},
{name: "Carla", preferences: ["dog1", "dog2", "dog3","dog1", "dog2", "dog3","dog1", "dog2", "dog3","dog1", "dog2", "dog3"]}]

class MatchedUser extends PureComponent {



 render() {

   return (
       <div className="PictureDisplayed">
           <Link to={ `/sniffme` }> <h1>Sniff me</h1> </Link>
           <h2>You matched with John!</h2>
           <h3>🐶 You liked {this.props.preferencesCurrentUser.length} dogs! 🐶</h3>
           <img src="https://media.giphy.com/media/bQw8H21KxyPrG/giphy.gif" alt="gif"/>
       </div>
   );
}
}

//
function mapStateToProps(state) {
 return {preferencesCurrentUser: state.preferencesCurrentUser}
}

export default connect(mapStateToProps)(MatchedUser)

// <h2> Your favorite breeds are: </h2>
// <tbody>
// { this.state.preferencesCurrentUser.map(dog => (<tr>
//   <td>
//       <h2>{dog}</h2>
//     </td>
// </tr>)) }
// </tbody>

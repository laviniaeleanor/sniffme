import React, { PureComponent } from 'react'
// import PropTypes from ‘prop-types’
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


class MatchedUser extends PureComponent {


 render() {

   return (
       <div className="PictureDisplayed">
           <Link to={ `/sniffme` }> <h1>Sniff me</h1> </Link>
           <h2>You matched with {this.props.matchedUser.name}!</h2>
           <h3>🐶 You liked {this.props.preferencesCurrentUser.length} dogs! 🐶</h3>
           <img src="https://media.giphy.com/media/bQw8H21KxyPrG/giphy.gif" />
       </div>
   );
}
}

function mapStateToProps(state) {
 return {matchedUser: state.matchedUser, preferencesCurrentUser: state.preferencesCurrentUser}
}

export default connect(mapStateToProps)(MatchedUser)

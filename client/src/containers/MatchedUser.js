import React, { PureComponent } from 'react'
// import PropTypes from ‘prop-types’
import { connect } from 'react-redux'


export default class MatchedUser extends PureComponent {

 render() {

   return (
       <div className="PictureDisplayed">
           <h1>Sniff me</h1>
           <h2>You matched with John!</h2>
       </div>
   );
}
}

//
// function mapStateToProps(state) {
//  return {pictureDisplayed: state.pictureDisplayed}
// }

// export default connect(mapStateToProps, {newPicture, like})(PictureDisplayed)

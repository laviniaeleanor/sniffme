import React, { PureComponent } from 'react'
// import PropTypes from ‘prop-types’
import { connect } from 'react-redux'
import {newPicture} from '../actions/actions'


export class PictureDisplayed extends PureComponent {

 componentWillMount() {
    this.props.newPicture()
  }

  newPicture = () => {
    this.props.newPicture()
  }

 render() {

   return (
       <div className="PictureDisplayed">
           <img src={this.props.pictureDisplayed} alt="dog" />
           <button onClick= { () => this.newPicture()}> Smells bad</button>
           <button onClick= { () => this.newPicture()}> Smells goooood!</button>
       </div>
   );
}
}

function mapStateToProps(state) {
 return {pictureDisplayed: state.pictureDisplayed}
}

export default connect(mapStateToProps, {newPicture})(PictureDisplayed)

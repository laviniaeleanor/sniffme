import React, { PureComponent } from 'react'
// import PropTypes from ‘prop-types’
import { connect } from 'react-redux'
import {newPicture, like} from '../actions/actions'


export class PictureDisplayed extends PureComponent {

 componentWillMount() {
    this.props.newPicture()
  }

  newPicture = () => {
    this.props.newPicture()
  }

  like = (breed) => {
      this.props.like(breed)
  }

 render() {

   return (
       <div className="PictureDisplayed">
           <h1>Sniff me</h1>
           <img src={this.props.pictureDisplayed} alt="dog" />
           <div class="btn-grp">
           <button className="smellsbad" onClick= { () => this.newPicture()}> Smells bad</button>
           <button className="smellsgood" onClick= {() => { this.like(this.props.pictureDisplayed); this.newPicture()}}> Smells goooood!</button>
        </div>       
       </div>
   );
}
}

function mapStateToProps(state) {
 return {pictureDisplayed: state.pictureDisplayed}
}

export default connect(mapStateToProps, {newPicture, like})(PictureDisplayed)

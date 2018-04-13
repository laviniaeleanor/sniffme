import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import {newPicture, like} from '../actions/actions'
import { Link } from 'react-router-dom'


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
   const step1 = this.props.pictureDisplayed
   const name = step1.split("/")
   const breed = name[4]

   return (
       <div className="PictureDisplayed">
           <h1>Sniff me</h1>
           <h2>{breed}</h2>

           <img src={this.props.pictureDisplayed} alt="dog" />
           <div className="btn-grp">
           <button className="smellsbad" onClick= { () => this.newPicture()}> Smells bad</button>
           <button className="smellsgood" onClick= {() => { this.like(this.props.pictureDisplayed); this.newPicture()}}> Smells goooood!</button>
           <button className="FindAMatch" ><Link to={ `/sniffme/matchuser` }> FindMatch! </Link></button>
        </div>
        <audio controls autoPlay className="audiofeature">
        <source src="http://burlingtonpetservices.com/media/Baha_Men_-_Who_Let_The_Dogs_Out.mp3" type="audio/mpeg"></source>
        </audio>
       </div>
   );
}
}

function mapStateToProps(state) {
 return {pictureDisplayed: state.pictureDisplayed}
}

export default connect(mapStateToProps, {newPicture, like})(PictureDisplayed)

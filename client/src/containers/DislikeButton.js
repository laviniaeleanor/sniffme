import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'



// import PropTypes from "prop-types"
// import { connect } from "react-redux"
// import {newPicture} from '../actions/actions'

export class DislikeButton extends PureComponent {

    newPicture() {
    this.props.newPicture()
  }

  //
  // onclickhandler = (e) => {
  //     handleSubmit(e)
  //     this.props.newPicture()
  // }
     // handleSubmit = (e) => {  // prevents the page from re-loading
     //         // e.preventDefault()
     //         this.props.newPicture()
     //       }


     render() {
       return (
           //<div>
               <button className= "DislikeButton" onClick={(e) => {e.preventDefault(); this.newPicture()}}>DislikeButton </button>

           //</div>
           )
       }
}



// function mapStateToProps(state) {  // mapping state from  store to props?
//
//    return {
//    LikeButton: state.LikeButton
//    }
// }


// export default connect(mapStateToProps)(LikeButton) // mapping to component


// constructor(props){
//   super(props)
//   this.onclickhandler = this.onclickhandler.bind(this)
//     }

//const mapStateToProps = (reduxState) => {

  //  return {
    //component: reduxState.component
    //}
//}

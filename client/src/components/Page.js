import React, { Component } from 'react'
// import PropTypes from 'prop-types'
// import { connect } from 'react-redux'
// import {Link} from 'react-router-dom'
import PictureDisplayed from '../containers/PictureDisplayed.js'
import LikeButton from '../containers/LikeButton'
import DislikeButton from '../containers/DislikeButton'


export default class Page extends Component {

  render() {
    return (
        <div className="Page">
            <h1>Sniff me</h1>
            <PictureDisplayed />
        </div>
    )
  }
}

// const mapStateToProps = function (state) {
// 	return {
//
// 	}
// }

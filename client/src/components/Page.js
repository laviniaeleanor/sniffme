import React, { Component } from 'react'
// import PropTypes from 'prop-types'
// import { connect } from 'react-redux'
// import {Link} from 'react-router-dom'
import PictureDisplayed from '../containers/PictureDisplayed.js'



export default class Page extends Component {

  render() {
    return (
        <div className="Page">
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

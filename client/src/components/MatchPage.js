import React, { Component } from 'react'
// import PropTypes from 'prop-types'
// import { connect } from 'react-redux'
// import {Link} from 'react-router-dom'
import MatchedUser from '../containers/MatchedUser.js'

export default class MatchPage extends Component {

  render() {
    return (
        <div className="Match_Page">
        <MatchedUser />
        </div>
    )
  }
}

// const mapStateToProps = function (state) {
// 	return {
//
// 	}
// }

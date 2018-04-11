import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const mapStateToProps = (reduxState) => {

    return {
    component: reduxState.component
    }
}


export default connect(mapStateToProps)(Component)

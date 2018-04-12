import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'



export class DislikeButton extends PureComponent {
  newPicture() {
    console.log('test')
  }

  render() {
    return (
      <div>
        <button type="button" onClick={() => this.newPicture()}>STINKY!</button>
      </div>
    );
  }
}

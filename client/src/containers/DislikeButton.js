import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'



class DislikeButton extends PureComponent {
  randomImage() {
    console.log('test')
  }

  render() {
    return (
      <div>
        <button type="button" onClick={() => this.randomImage()}>STINKY!</button>
      </div>
    );
  }
}

export default DislikeButton;

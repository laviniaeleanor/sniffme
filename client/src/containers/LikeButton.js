import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'



export class LikeButton extends PureComponent {
  newPicture() {
    console.log('test')
  }

  render() {
    return (
      <div>
        <button type="button" onClick={() => this.newPicture()}>SMELLS GOOOOOOOOD!</button>
      </div>
    );
  }
}

import React, { PureComponent } from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export class PictureDisplayed extends PureComponent {
  // static propTypes = {
  //
  // }

  render() {

    return (
        <div className="product thumbnail">
            <img src={this.props.pictureDisplayed} alt="dog" />
        </div>
    );
}
}

function mapStateToProps(state) {
  return {pictureDisplayed: state.pictureDisplayed}
}

export default connect(mapStateToProps)(PictureDisplayed)

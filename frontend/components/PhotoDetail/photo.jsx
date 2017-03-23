import React from 'react';
import classNames from 'classnames';

class Photo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: {
        blur: false,
        brighter: false,
        darker: false,
        contrast: false,
        fade: false,
        grayscale: false,
        invert: false,
        saturate: false,
        sepia: false,
        opacity: false
      }
    }
  }

  render() {

    return(
      <div className={classNames('photo', this.state.filter)}>
        <img src={`${this.props.url}`}/>
      </div>
    )
  }
}

export default Photo;

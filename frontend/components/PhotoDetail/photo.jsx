import React from 'react';
import classNames from 'classnames';

class Photo extends React.Component {
  constructor(props) {
    super(props);
    this.resetFilters = this.resetFilters.bind(this);
    this.blur = this.blur.bind(this);
    this.brighter = this.brighter.bind(this);
    this.darker = this.darker.bind(this);
    this.contrast = this.contrast.bind(this);
    this.fade = this.fade.bind(this);
    this.grayscale = this.grayscale.bind(this);
    this.invert = this.invert.bind(this);
    this.saturate = this.saturate.bind(this);
    this.sepia = this.sepia.bind(this);
    this.opacity = this.opacity.bind(this);
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

  resetFilters() {
    this.setState({
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
    }})
  }

  blur() {
    this.setState({filter: {blur: true}});
  }

  brighter() {
    this.setState({filter: {brighter: true}});
  }

  darker() {
    this.setState({filter: {darker: true}});
  }

  contrast() {
    this.setState({filter: {contrast: true}});
  }

  fade() {
    this.setState({filter: {fade: true}});
  }

  grayscale() {
    this.setState({filter: {grayscale: true}});
  }

  invert() {
    this.setState({filter: {invert: true}});
  }

  saturate() {
    this.setState({filter: {saturate: true}});
  }

  sepia() {
    this.setState({filter: {sepia: true}});
  }

  opacity() {
    this.setState({filter: {opacity: true}});
  }

  render() {

    return(
      <div className='photo'>
        <div className='filter-menu-container'>
          <div className='filter-menu-arrow'>
            <img src="https://s3.amazonaws.com/dappergram-dev/users/arrow.png"/>
          </div>
          <div className='filter-menu'>
            <button onClick={this.resetFilters}><p>Reset</p></button>
            <button onClick={this.blur}>Blur</button>
            <button onClick={this.brighter}>Brighter</button>
            <button onClick={this.darker}>Darker</button>
            <button onClick={this.contrast}>Contrast</button>
            <button onClick={this.fade}>Fade</button>
            <button onClick={this.grayscale}>Grayscale</button>
            <button onClick={this.invert}>Invert</button>
            <button onClick={this.saturate}>Saturate</button>
            <button onClick={this.sepia}>Sepia</button>
            <button onClick={this.opacity}>Opacity</button>
          </div>
        </div>
        <img src={`${this.props.url}`} className={classNames(this.state.filter)}/>
      </div>
    )
  }
}

export default Photo;

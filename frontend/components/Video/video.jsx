import React from 'react';

class Video extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      root: 'https://s3.amazonaws.com/dappergram-dev/users/video/'
    }
  }

  render(){
    return(
      <div className="fullscreen-bg">
        <video loop muted='true' autoPlay="true"
          poster={this.state.root + "poster.png"} className="fullscreen-bg-video">
          <source src={this.state.root + "gq-slo.webm"} type="video/webm"/>
          <source src={this.state.root + "gq-slo.webm"} type="video/mp4"/>
        </video>
      </div>
    )
  }
}

export default Video;

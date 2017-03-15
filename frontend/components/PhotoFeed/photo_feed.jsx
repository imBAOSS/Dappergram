import React from 'react';

class PhotoFeed extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <button onClick={this.props.logout}>Log out</button>
      </div>
    );
  }
}

export default PhotoFeed;

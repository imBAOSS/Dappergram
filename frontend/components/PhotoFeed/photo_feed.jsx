import React from 'react';

class PhotoFeed extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <button onClick={this.props.logout()} value='Log out'/>
      </div>
    );
  }
}

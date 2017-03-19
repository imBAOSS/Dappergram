import React from 'react';
import { Link, withRouter } from 'react-router';

class NavBar extends React.Component{
  constructor(props) {
    super(props);
    this.profilePage = this.profilePage.bind(this);
  }

  profilePage() {
    this.props.router.push(`/profile/${this.props.session.currentUser.id}`);
  }

  render() {

    return (
      <div className='nav-bar'>
        <div className='nav-elements'>
          <div className='left-nav-buttons'>
            <div className='home-icon-cont'>
              <Link to="/feed" className='home-icon'></Link>
            </div>

            <div className="dappergram">
              <h1>Dappergram</h1>
            </div>
          </div>

          <div className='profile-icon-cont'>
            <Link onClick={this.profilePage}
              className="profile-icon"></Link>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(NavBar);

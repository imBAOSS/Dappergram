import React from 'react';
import { Link, withRouter } from 'react-router';

class NavBar extends React.Component{
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout() {
    this.props.logout()
    .then( () => this.props.router.push('/login'));
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
            <Link onClick={ this.logout }
              className="profile-icon"></Link>
          </div>
        </div>
      </div>
    )
  }
}

export default NavBar;

import React from 'react';
import { Link, withRouter } from 'react-router';
import NavBarContainer from './NavBar/nav_bar_container';
import Footer from './Footer/footer';


const App = ({ children, router }) => {
    let navBar;
    let path = router.routes[1].path;
    if (path !== "/login" && path !== "/signup") {
      navBar = <NavBarContainer />
    }

    return (
      <div id='root'>
        {navBar}
        {children}
        <Footer />
      </div>
  );
};

export default withRouter(App);

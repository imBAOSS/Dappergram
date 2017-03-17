import React from 'react';
import { Link, withRouter } from 'react-router';



const App = ({ children, router }) => {
    console.log(router);
    return (<div id='root'>
      {children}
    </div>
  );
};

export default withRouter(App);

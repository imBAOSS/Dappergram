import React from 'react';
import { Link } from 'react-router';

const Footer = () => {
  return(
    <div className='footer-bar'>
      <div className='footer-links'>
        <div className='about'>
          <Link
            className='about-link'
            to='/about'>About</Link>
        </div>
        <div className='github-repo'>
          <a
            className='github-link'
            href='https://github.com/imBAOSS/Dappergram/'>Github</a>
        </div>
        <div className='portfolio-website'>
          <a
            className='website-link'
            href='http://www.imbaoss.com/'>Website</a>
        </div>
      </div>

      <div className='footer-icons'>
        <div className='github'>
          <a href="https://github.com/imbaoss">
            <i className="fa fa-github fa-lg"></i>
          </a>
        </div>
        <div className='facebook'>
          <a href="https://www.facebook.com/imbaoss">
            <i className="fa fa-facebook-official fa-lg"></i>
          </a>
        </div>
        <div className='instagram'>
          <a href="https://www.instagram.com/imbaoss/">
            <i className="fa fa-instagram fa-lg">
            </i>
          </a>
        </div>
        <div className='twitter'>
          <a href="https://twitter.com/imbaoss">
            <i className="fa fa-twitter fa-lg"></i>
          </a>
        </div>
        <div className='email'>
          <a href="mailto:baole6989@gmail.com">
            <i className="fa fa-envelope fa-lg"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;

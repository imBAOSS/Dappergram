import React from 'react';

const Footer = () => {
  return(
    <div className='footer-bar'>
      <div className='footer-links'>
        <div className='about'>
          About
        </div>
        <div className='github-repo'>
          Github
        </div>
        <div className='portfolio-website'>
          Website
        </div>
      </div>

      <div className='footer-icons'>
        <div className='github'>
          <a href="https://github.com/imbaoss">

          </a>
        </div>
        <div className='facebook'>
          <a href="https://www.facebook.com/imbaoss"></a>
        </div>
        <div className='instagram'>
          <a href="https://www.instagram.com/imbaoss/"></a>
        </div>
        <div className='twitter'>
          <a href="https://twitter.com/imbaoss"></a>
        </div>
        <div className='email'>
          <a href="mailto:baole6989@gmail.com">
            <i class="fa fa-envelope" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;

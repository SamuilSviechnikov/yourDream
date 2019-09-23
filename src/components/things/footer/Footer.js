import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <footer className="page-footer purple accent-2">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">About this shop</h5>
                <p className="grey-text text-lighten-4">We are glad to every person who decided to purchase our wonderful product from us.</p>
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="white-text">Things</h5>
                <ul>
                  <li><Link className='white-text' to='/'>Kigurumi</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container center">
            © 2019 Copyright Text
            </div>
          </div>
        </footer>
  )
}
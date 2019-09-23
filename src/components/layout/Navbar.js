import React from 'react';
import { Link } from 'react-router-dom';
import SideNavs from './SideNav';

const style = 
{
  padding: '10px 0px',
  background: '#fff',
  color: '#d500f9',
  borderRadius: '10px',
}
const Navbar = () => {

  return (
    <nav className="nav-wrapper purple accent-3" style={{marginBottom: '10px'}}>
      <div className="container">
        <SideNavs />
        <Link to='/' className="brand-logo">Your <span style={style}>dream</span></Link>
      </div>
    </nav>
  )
}

export default Navbar
import React from 'react';
import {Link} from 'gatsby';

const Sidebar = () => (
  <div className="sidebar">
    <nav style={{margin: 0}}>
      <Link to="/">Home</Link>
    </nav>
  </div>
);

export default Sidebar;

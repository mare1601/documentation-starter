import React from 'react';
import {Link} from 'gatsby';

const Sidebar = () => (
  <div className="sidebar">
  <h4>Main Links</h4>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/bug">File A Bug Report</Link>
    </nav>
    <h4>Documentation</h4>
    
  </div>
);

export default Sidebar;

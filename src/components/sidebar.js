import React from 'react';
import {Link} from 'gatsby';
import DocsNav from './docsNav'


const Sidebar = () => (
  <div className="sidebar" style={{
    background: 'var(--main-color)',
    padding: 30,
    width: 300,
    color: 'white',
    flex: '0 0 300px',
  }}>
  <div className="sidebarInner"
  style={{
    position: 'fixed',
  }}>
    <svg style={{
      marginBottom: 30,
    }}
    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160.5 60"><g data-name="Layer 2"><g fill="#fff" data-name="Layer 1"><path d="M23.62 28.95l-9.79-7.38A3.83 3.83 0 0 1 12 17.84v-5.47C12 11 12.6 10 14 10h.91c1.42 0 2.09 1 2.09 2.37V22h11V11.3C28 4.09 24.78 0 17.57 0h-6.3C4.07 0 0 4.09 0 11.3v9.2c0 4.14 1.33 6.5 4.89 9.11l10 7.38A4 4 0 0 1 17 40.71v7c0 1.41-.59 2.32-2 2.32h-1.07C12.52 50 12 49.08 12 47.68V36H0v12.75C0 56 4.07 60 11.28 60h6.46C24.95 60 28 56 28 48.75V38.06c0-4.31-.82-6.54-4.38-9.11zM148.48 1L142 28.78V1h-22.71L112 28.78V1h-11v56.16L93.92 1H78.09L71 56.11V1H54.09l-3.48 35.05L47.21 1H30v59h10V21.07L44.15 60h10.94L59 21.49V60h22l.83-9h7.29l.88 9h22V32.1l6.71 27.9H142V32.1l5.9 27.9h12.26l-7.29-30 7.63-29zM82.89 41l2.57-25.36L88.11 41zm40.37-11L130 4.85v52.41z"/></g></g></svg>
  <h4>Main Links</h4>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/bug">File A Bug Report</Link>
    </nav>
    <h4>Documentation</h4>
    <DocsNav/>
    </div>
  </div>
);

export default Sidebar;

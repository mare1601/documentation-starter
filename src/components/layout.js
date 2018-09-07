import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import {StaticQuery, graphql} from 'gatsby';

import Sidebar from './sidebar';

import './layout.css';
import './styles.css';
import './form.css';

const Layout = ({children, data}) => (
  <StaticQuery
    query={graphql`
      query SiteTitle {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content: 'Smakk Studios Documentation'
            },
            {name: 'keywords', content: 'developer, engineer, NYC'}
          ]}
        >
          <html lang="en" />
        </Helmet>
        <div
          className="layoutWrap"
          style={{
            minHeight: '100vh',
            display: 'flex'
          }}
        >
        <Sidebar siteTitle={data.site.siteMetadata.title} />
        <div className="contentWrap pad">
          {children}
          </div>
        </div>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;

import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import {StaticQuery, graphql} from 'gatsby';

import Sidebar from './Sidebar';

import './layout.css';
import './styles.css';

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
              content: 'Isaac Martin — Product Engineer NYC'
            },
            {name: 'keywords', content: 'developer, engineer, NYC'}
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Sidebar siteTitle={data.site.siteMetadata.title} />
        <div
          className="layoutWrap"
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0
          }}
        >
          {children}
        </div>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;

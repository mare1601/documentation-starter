import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Chrome from './Chrome'
import Header from './Header'
import './layout.css'

const TemplateWrapper = ({ children }) => (
  <Chrome header={<Header />}>
    <Helmet
      title="Welcome to the docs!"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    {children}
  </Chrome>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper

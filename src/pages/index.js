import React, { Component } from 'react'
import Layout from "../components/layout"
import Link from 'gatsby-link'
import styled from 'styled-components'


const CardContainer = styled.div`
  display: flex;
  margin: 32px 0;
  justify-content: space-around;
`

const Card = styled(Link)`
  display: inline-block;
  border-radius: 4px;
  padding: 20px 40px;
  width: 250px;
  background-color: #aaa;
  color: #fff !important;
  text-align: center;
`

class IndexPage extends Component {

  render() {
    return (
      <Layout>
        <div>
          <h1>Documentation</h1>
          <p>Welcome to your new documentation site!</p>
          <CardContainer>
            <Card to="/getting-started">
              Getting started
          </Card>
            <Card to="/about">
              About us
          </Card>
          </CardContainer>
        </div>
      </Layout>
    )
  }
}

export default IndexPage

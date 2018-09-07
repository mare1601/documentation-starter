import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'


export default () => (
  <StaticQuery
  query={query}
  render={ data => (
    <nav>
       {data.allMarkdownRemark.edges.map(({ node: doc }) => (
           <Link key={doc.frontmatter.title}
           to={doc.fields.slug}>{doc.frontmatter.title}</Link>
            ))}
    </nav>
  )}
  />
);

const query = graphql`
  query DocQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___title] }
      filter: { frontmatter: { templateKey: { eq: "doc" } } }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
          }
        }
      }
    }
  }
`
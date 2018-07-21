import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';

import Hero from '../components/hero/Hero';


import background from '../assets/bg.jpeg';

class TagRoute extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges;
    // console.log(posts);
    const postLinks = posts.map(post => (
      <li key={post.node.fields.slug}>
        <h3>{post.node.frontmatter.title}</h3>
        <small>{post.node.frontmatter.date}</small>
        <p className="excerpt">{post.node.excerpt}</p>
        <br />
        <Link to={post.node.fields.slug}>Keep reading...</Link>
      </li>
    ));
    const tag = this.props.pathContext.tag;
    const title = this.props.data.site.siteMetadata.title;
    const totalCount = this.props.data.allMarkdownRemark.totalCount;
    const tagHeader = `${totalCount} post${
      totalCount === 1 ? '' : 's'
    } tagged with “${tag}”`;

    return (
      <div className="techspike-tags">
        <Helmet title={`${tag} | ${title}`} />
        <Hero background={background} tripp={true}>
          <h1>{'techspike.tv Tags'}</h1>

          <Link className="all-tags-link" to="/tags/">
            <Button variant={'primary'}>Browse all tags</Button>
          </Link>
        </Hero>

        <div className="techspike-tag-content">
          <h2>{tagHeader}</h2>
          <div>
            <ul>{postLinks}</ul>
          </div>
        </div>

      </div>
    );
  }
}

export default TagRoute;

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          excerpt(pruneLength: 200)
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;

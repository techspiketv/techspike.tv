import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import moment from 'moment';

import Grid from 'material-ui/Grid';
import Content, { HTMLContent } from '../../components/Content';
import Hero from '../../components/hero/Hero';

import background from '../../assets/bg.jpeg';

const BlogIndexPage = ({ data }) => {
  const PageContent = Content;

  console.log(data);
  const localPosts = data.allMarkdownRemark.edges;
  const mediumPosts = data.allMediumPost.edges;

  return (
    <div>
      <Hero tripp={false} background={background}>
        <h1>
          techspike.tv <br /> Blog
        </h1>
      </Hero>
      medium posts
      <Grid className="techspike-blog-stories" container spacing={40}>
        {mediumPosts
          // .filter(post => post.node.frontmatter.templateKey === 'blog-post')
          .map(({ node: post }) => (
            <Grid item xs={6} md={12} key={post.id}>
              <Grid className="techspike-medium-story" container spacing={8}>
                <Grid item xs={12} md={12}>
                  <h3>{post.title}</h3>
                  <small>{moment(post.createdAt).format('LL')}</small>
                  {/* <pre>{JSON.stringify(post)}</pre> */}
                  <p>{post.virtuals.subtitle}</p>
                  <br />
                  <br />
                  <a
                    href={`http://medium.com/techspike/${post.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Keep Reading...
                  </a>
                </Grid>
              </Grid>
            </Grid>
          ))}
      </Grid>
      website posts
      <Grid className="techspike-blog-stories" container spacing={40}>
        {localPosts
          .filter(post => post.node.frontmatter.templateKey === 'blog-post')
          .map(({ node: post }) => (
            <Grid item xs={6} md={12} key={post.id}>
              <Grid className="techspike-blog-story" container spacing={8}>
                <Grid item xs={12} md={4}>
                  <Link to={post.fields.slug}>
                    <h3>{post.frontmatter.title}</h3>
                    <small>{post.frontmatter.date}</small>
                  </Link>
                </Grid>
                <Grid item xs={12} md={8}>
                  <p>{post.excerpt}</p>
                  <br />
                  <br />
                  <Link to={post.fields.slug}>Keep Reading...</Link>
                </Grid>
              </Grid>
            </Grid>
          ))}
      </Grid>
    </div>
  );
};

BlogIndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export default BlogIndexPage;

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMediumPost(sort: { fields: [createdAt], order: DESC }) {
      edges {
        node {
          id
          title
          createdAt
          virtuals {
            subtitle
            previewImage {
              imageId
            }
          }
          author {
            name
          }
        }
      }
    }
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;

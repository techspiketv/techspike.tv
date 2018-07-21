import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Hero from '../components/hero/Hero';

import bg from '../assets/bg.jpeg';

import Particles from 'react-particles-js';

import particles from '../assets/particles.json';

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <section>
        <Hero background={bg}>
          <h1>techspike.tv</h1>
          <p
            className="tagline"
            style={{
              fontSize: '1rem',
              fontWeight: '400',
              paddingBottom: '40px'
            }}
          >
            A spike is a product-testing method originating from Extreme
            Programming that uses the simplest possible program to explore
            potential solutions{' '}
            <a href="https://en.wikipedia.org/wiki/Spike_(software_development)">
              [1]
            </a>.
          </p>
        </Hero>

          <Particles
                params={{
                  particles: particles.particles,
                  interactivity: particles.interactivity
                }}
                style={{
                  backgroundImage:
                    'url("https://source.unsplash.com/random/1280x1024")',
                  backgroundColor: 'purple',
                  backgroundBlendMode: 'screen',
                  backgroundSize: 'cover'
                }}
              />

        <h1> This is an experiment... </h1>
        <h1> This is an experiment... </h1>
        <h1> This is an experiment... </h1>
        <h1> This is an experiment... </h1>
        <h1> This is an experiment... </h1>
        <h1> This is an experiment... </h1>
        <h1> This is an experiment... </h1>
        <h1> This is an experiment... </h1>
        <h1> This is an experiment... </h1>
        <h1> This is an experiment... </h1>
        <h1> This is an experiment... </h1>
        <h1> This is an experiment... </h1>
        <h1> This is an experiment... </h1>
        <h1> This is an experiment... </h1>
        <h1> This is an experiment... </h1>
        <h1> This is an experiment... </h1>
        <h1> This is an experiment... </h1>
        <h1> This is an experiment... </h1>
        <h1> This is an experiment... </h1>
        <h1> This is an experiment... </h1>
        <h1> This is an experiment... </h1>
        <h1> This is an experiment... </h1>
        <h1> This is an experiment... </h1>
        <h1> This is an experiment... </h1>
        <h1> This is an experiment... </h1>
        <h1> This is an experiment... </h1>
        <h1> This is an experiment... </h1>
        <h1> This is an experiment... </h1>
        <h1> This is an experiment... </h1>
        <h1> This is an experiment... </h1>
        <h1> This is an experiment... </h1>
        <h1> This is an experiment... </h1>
        <h1> This is an experiment... </h1>
        <h1> This is an experiment... </h1>
        <h1> This is an experiment... </h1>
        <h1> This is an experiment... </h1>
        <h1> This is an experiment... </h1>
        <h1> This is an experiment... </h1>
        <h1> This is an experiment... </h1>
        <h1> This is an experiment... </h1>
        <h1> This is an experiment... </h1>
        <h1> This is an experiment... </h1>
        <h1> This is an experiment... </h1>
        <h1> This is an experiment... </h1>
        <h1> This is an experiment... </h1>
        <h1> This is an experiment... </h1>
        <h1> This is an experiment... </h1>
        <h1> This is an experiment... </h1>
        <h1> This is an experiment... </h1>
        <h1> This is an experiment... </h1>
        <h1> This is an experiment... </h1>
        <h1> This is an experiment... </h1>
        <h1> This is an experiment... </h1>
        <h1> This is an experiment... </h1>
        <h1> This is an experiment... </h1>
        <h1> This is an experiment... </h1>
        <h1> This is an experiment... </h1>
        <h1> This is an experiment... </h1>
        <h1> This is an experiment... </h1>
        <h1> This is an experiment... </h1>
        <h1> This is an experiment... </h1>
        <h1> This is an experiment... </h1>
        <h1> This is an experiment... </h1>
        <h1> This is an experiment... </h1>
        <h1> This is an experiment... </h1>
        <h1> This is an experiment... </h1>
        <h1> This is an experiment... </h1>
        <h1> This is an experiment... </h1>
        <h1> This is an experiment... </h1>
        <h1> This is an experiment... </h1>
        <h1> This is an experiment... </h1>
        <h1> This is an experiment... </h1>
        <h1> This is an experiment... </h1>
        <h1> This is an experiment... </h1>
        <h1> This is an experiment... </h1>
        <h1> This is an experiment... </h1>
        <h1> This is an experiment... </h1>
        <h1> This is an experiment... </h1>
        <h1> This is an experiment... </h1>
        <h1> This is an experiment... </h1>
        <h1> This is an experiment... </h1>
        <h1> This is an experiment... </h1>
        <h1> This is an experiment... </h1>
        <h1> This is an experiment... </h1>
        <h1> This is an experiment... </h1>
        <h1> This is an experiment... </h1>
        <h1> This is an experiment... </h1>
        <h1> This is an experiment... </h1>
        <h1> This is an experiment... </h1>
        <h1> This is an experiment... </h1>
        <h1> This is an experiment... </h1>
        <h1> This is an experiment... </h1>
        <h1> This is an experiment... </h1>
        <h1> This is an experiment... </h1>
        <h1> This is an experiment... </h1>
        <h1> This is an experiment... </h1>
        <h1> This is an experiment... </h1>
        <h1> This is an experiment... </h1>
        <h1> This is an experiment... </h1>
        <h1> This is an experiment... </h1>
        <h1> This is an experiment... </h1>
        <h1> This is an experiment... </h1>
        <h1> This is an experiment... </h1>
        <h1> This is an experiment... </h1>
        <h1> This is an experiment... </h1>
        <h1> This is an experiment... </h1>
        <h1> This is an experiment... </h1>
        <h1> This is an experiment... </h1>
        

      </section>
    );
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export const pageQuery = graphql`
  query IndexQuery {
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

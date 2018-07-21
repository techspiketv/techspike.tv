import React from 'react';
import PropTypes from 'prop-types';
import Content, { HTMLContent } from '../components/Content';

import Particles from 'react-particles-js';
import particles from '../assets/particles.json';

import Hero from '../components/hero/Hero';

import background from '../assets/bg.jpeg';

export class AboutPageTemplate extends React.Component {
  render() {
    const { title, content, contentComponent } = this.props;
    const PageContent = contentComponent || Content;
    return (
      <div className="techspike-about">
        <Hero background={background} tripp={true}>
          <h1>
            <PageContent className="content" content={title} />
          </h1>
        </Hero>
        <div className="particles-container">
          <PageContent className="content" content={content} />
          <Particles
            params={{
              particles: particles.particles,
              interactivity: particles.interactivity
            }}
            style={{
              // backgroundImage:
              //   'url("https://source.unsplash.com/random/1280x1024")',
              backgroundColor: 'black',
              // backgroundBlendMode: 'screen',
              backgroundSize: 'cover'
            }}
          />
        </div>
      </div>
    );
  }
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func
};

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <AboutPageTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      content={post.html}
    />
  );
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;

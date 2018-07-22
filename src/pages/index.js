import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Hero from '../components/hero/Hero';

import bg from '../assets/bg.jpeg';


import HomePage from '../components/HomePage'

// import NewHomePage from '../components/NewHomePage'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    return (

      <HomePage data={data} />
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
          allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date] }) {
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

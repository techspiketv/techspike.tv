import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import 'font-awesome/css/font-awesome.min.css';
import '../styles/all.sass';

import Navbar from '../components/navbar/Navbar';

import { MuiThemeProvider } from 'material-ui/styles';
import theme from '../themes/default';

import { StickyContainer, Sticky } from 'react-sticky';

const TemplateWrapper = ({ children }) => (
  <StickyContainer>
    <MuiThemeProvider theme={theme}>
      <div>
        <Helmet title="techspike.tv" />
        <Sticky>
          {({
            style,
            isSticky,
            wasSticky,
            distanceFromTop,
            distanceFromBottom,
            calculatedHeight
          }) => (
            <Navbar
              style={style}
              isSticky={isSticky}
              distanceFromTop={distanceFromTop}
            />
          )}
        </Sticky>
        <div>{children()}</div>
      </div>
    </MuiThemeProvider>
  </StickyContainer>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;

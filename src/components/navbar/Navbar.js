import React from 'react';
import Link from 'gatsby-link';

import logo from '../../assets/logo.svg';

import AppBar from '../appbar'

export default class SmartNavbar extends React.Component {
  state = {
    open: false
  };
  render() {
    const { style, distanceFromTop } = this.props;
    let isSticky =
      distanceFromTop === undefined ? false : distanceFromTop !== 0;

    if (this.state.open) {
      isSticky = true;
    }

    return (
      <div
        style={{
          ...style,
          zIndex: 1000
        }}
      >

      <AppBar/>

{/*       
        <nav
          className={`navbar ${isSticky ? 'sticky' : 'not-sticky'}`}
          style={style}
          role="navigation"
          aria-label="main navigation"
        >
          <div className="navbar-brand">
            <Link to="/">
              <img
                src={logo}
                alt="techspike.tv"
                style={{ width: '150px', paddingTop: '6px' }}
              />
            </Link>

            <a
              role="button"
              className="navbar-burger"
              aria-label="menu"
              aria-expanded="false"
              onClick={() => {
                this.setState({
                  open: !this.state.open
                });
              }}
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </a>
          </div>
          <div className={`navbar-menu ${this.state.open ? 'is-active' : ''}`}>
            <div className="navbar-end">
              <Link className="navbar-item" to="/roadmap">
                Product
              </Link>
              <Link className="navbar-item" to="/team">
                Team
              </Link>
              <a
                className="navbar-item"
                target="_blank"
                rel="noopener noreferrer"
                href={'/whitepaper.pdf'}
              >
                Whitepaper
              </a>
            </div>
          </div>
        </nav> */}
      </div>
    );
  }
}

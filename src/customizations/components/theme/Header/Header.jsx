/**
 * Header component.
 * @module components/theme/Header/Header
 */

import React, { Component } from 'react';
import { Container, Segment } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import searchSVG from './search.svg';
import menubarSVG from './menu-bar.svg';
import closebarSVG from './close-bar.svg';
{
  /* <script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script> */
}

import {
  Anontools,
  LanguageSelector,
  Logo,
  Navigation,
  SearchWidget,
} from '@plone/volto/components';

/**
 * Header component class.
 * @class Header
 * @extends Component
 */
class Header extends Component {
  /**
   * Property types.
   * @property {Object} propTypes Property types.
   * @static
   */
  static propTypes = {
    token: PropTypes.string,
    pathname: PropTypes.string.isRequired,
  };

  /**
   * Default properties.
   * @property {Object} defaultProps Default properties.
   * @static
   */
  static defaultProps = {
    token: null,
  };

  /**
   * Render method.
   * @method render
   * @returns {string} Markup for the component.
   */
  render() {
    return (
      <Segment basic className="header-wrapper" role="banner">
        <Container>
          <div className="header-row1">
            <nav>
              <ul>
                <li className="search">
                  <a href="#">
                    <img
                      className="sm-icon"
                      src={searchSVG}
                      alt="search icon"
                    />
                  </a>
                </li>
                <li className="logo">Twinty-twinty</li>
                <div className="items">
                  <li>
                    <a className="active-site page-link" href="#">
                      Home
                    </a>
                    <a className="page-link" href="#">
                      About
                    </a>
                    <a className="page-link" href="#">
                      Blog
                    </a>
                    <a className="page-link" href="#">
                      Contact
                    </a>
                  </li>
                </div>
                <li>
                  {' '}
                  <a href="#">
                    <img
                      className="sm-icon"
                      src={menubarSVG}
                      alt="menu-bar icon"
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      className="sm-icon"
                      src={closebarSVG}
                      alt="close icon"
                    />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </Container>
      </Segment>
    );
  }
}

export default connect((state) => ({
  token: state.userSession.token,
}))(Header);

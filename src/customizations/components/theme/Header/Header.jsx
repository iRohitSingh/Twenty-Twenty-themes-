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
import facebookSVG from './facebook.svg';
import twitterSVG from './twitter.svg';
import instagramSVG from './instagram.svg';
import messageSVG from './message.svg';
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
import cx from 'classnames';

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
  // const menubarhandler = ()=>{

  // }

  /**
   * Default properties.
   * @property {Object} defaultProps Default properties.
   * @static
   */
  static defaultProps = {
    token: null,
  };

  state = {
    showMenu: false,
    showSearch: false,
  };

  showMenuHandler = () => this.setState({ showMenu: !this.state.showMenu });
  showSearchHandler = () =>
    this.setState({ showSearch: !this.state.showSearch });
  /**
   * Render method.
   * @method render
   * @returns {string} Markup for the component.
   */
  render() {
    return (
      <Segment basic className="header-wrapper twenty" role="banner">
        <div
          className={cx({
            'show-menu': this.state.showMenu,
            'hide-menu': !this.state.showMenu,
          })}
        >
          <div>
            <button className="close-bar-menu" onClick={this.showMenuHandler}>
              <img src={closebarSVG} alt="close icon" />
            </button>
          </div>
          <div className="parent">
            <div>
              <li className="nav">
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
            <div className="row">
              <div className="icon">
                <a href="#">
                  <img className="sm" src={facebookSVG} alt="facebook icon" />
                </a>
                <a href="#">
                  <img className="sm" src={twitterSVG} alt="twitter icon" />
                </a>
                <a href="#">
                  <img className="sm" src={instagramSVG} alt="instagram icon" />
                </a>
                <a href="#">
                  <img className="sm" src={messageSVG} alt="e-mail icon" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div
          className={cx({
            'show-search': this.state.showSearch,
            'hide-search': !this.state.showSearch,
          })}
        >
          <div className="searchText">
            <div className="input-search">
              {' '}
              <input type="text" placeholder="search" />
            </div>
            <div className="close-bar">
              <button onClick={this.showSearchHandler}>
                <img className="close-bar" src={closebarSVG} alt="close icon" />
              </button>
            </div>
          </div>
        </div>
        <Container>
          <div className="header-row1">
            <div>
              {!this.state.showSearch && (
                <button className="btn3" onClick={this.showSearchHandler}>
                  <img className="sm-icon" src={searchSVG} alt="search icon" />
                </button>
              )}
            </div>
            <div>
              <div className="logo">Twenty Twenty</div>
            </div>
            <div>
              {!this.state.showMenu && (
                <button className="btn1" onClick={this.showMenuHandler}>
                  <img
                    className="menu-bar"
                    src={menubarSVG}
                    alt="menu-bar icon"
                  />
                </button>
              )}
            </div>
          </div>
        </Container>
      </Segment>
    );
  }
}

export default connect((state) => ({
  token: state.userSession.token,
}))(Header);

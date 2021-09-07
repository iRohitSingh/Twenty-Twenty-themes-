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

import {
  Anontools,
  LanguageSelector,
  Logo,
  Navigation,
  SearchWidget,
} from '@plone/volto/components';
import cx from 'classnames';

class Header extends Component {
  static propTypes = {
    token: PropTypes.string,
    pathname: PropTypes.string.isRequired,
  };

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

  render() {
    return (
      <Segment basic className="header-wrapper twenty" role="banner">
        {this.state.showMenu && <div className="overlay"></div>}
        <div
          className={cx({
            'show-menu': this.state.showMenu,
            'hide-menu': !this.state.showMenu,
          })}
        >
          <div className="header-nav">
            <div className="close-menu">
              <button className="close-bar-menu" onClick={this.showMenuHandler}>
                <img
                  className="img-close-bar-menu"
                  src={closebarSVG}
                  alt="close icon"
                />
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
                    <img
                      className="sm"
                      src={instagramSVG}
                      alt="instagram icon"
                    />
                  </a>
                  <a href="#">
                    <img className="sm" src={messageSVG} alt="e-mail icon" />
                  </a>
                </div>
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
              <input type="text" placeholder="search..." />
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
            <div className="search-container">
              {!this.state.showSearch && (
                <button
                  className="search-bar-icon"
                  onClick={this.showSearchHandler}
                >
                  <img className="sm-icon" src={searchSVG} alt="search icon" />
                </button>
              )}
            </div>
            <div>
              <div className="logo-header">Twenty Twenty</div>
            </div>
            <div className="right-side">
              <div className="right-side-nav">
                {' '}
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
              <div>
                <button
                  className="menu-bar-icon"
                  onClick={this.showMenuHandler}
                >
                  <img
                    className="menu-bar"
                    src={menubarSVG}
                    alt="menu-bar icon"
                  />
                </button>
              </div>

              <div className="search-container-2">
                {' '}
                <button
                  className="search-bar-icon"
                  onClick={this.showSearchHandler}
                >
                  <img className="sm-icon" src={searchSVG} alt="search icon" />
                </button>
              </div>
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

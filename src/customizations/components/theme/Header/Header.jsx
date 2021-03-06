/**
 * Header component.
 * @module components/theme/Header/Header
 */

import React, { Component } from 'react';
import { Container, Segment } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

//import searchSVG from './search.svg';
import searchSVG from '../../../../icons/search.svg';
import closebarSVG from '../../../../icons/close-bar.svg';
import menubarSVG from '../../../../icons/menu-bar.svg';
import facebookSvg from '../../../../icons/facebook.svg';
import twitterSVG from '../../../../icons/twitter.svg';
import instagramSVG from '../../../../icons/instagram.svg';
import messageSVG from '../../../../icons/message.svg';

import {
  Anontools,
  LanguageSelector,
  Logo,
  Navigation,
  SearchWidget,
  Icon,
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
                <Icon
                  name={closebarSVG}
                  size="20px"
                  color="#000"
                  className="img-close-bar-menu"
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
              <div className="row-svg-header">
                <div className="icon">
                  <a href="#">
                    <Icon
                      name={facebookSvg}
                      size="24px"
                      color="#fff"
                      className="sm"
                    />
                  </a>
                  <a href="#">
                    <Icon
                      name={twitterSVG}
                      size="24px"
                      color="#fff"
                      className="sm"
                    />
                  </a>
                  <a href="#">
                    <Icon
                      name={instagramSVG}
                      size="24px"
                      color="#fff"
                      className="sm"
                    />
                  </a>
                  <a href="#">
                    <Icon
                      name={messageSVG}
                      size="24px"
                      color="#fff"
                      className="sm"
                    />
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
                <Icon
                  name={closebarSVG}
                  size="25px"
                  color="#000"
                  className="close-bar"
                />
              </button>
            </div>
          </div>
        </div>
        <div className="header-container">
          <div className="header-row1">
            <div className="search-container">
              {!this.state.showSearch && (
                <button
                  className="search-bar-icon"
                  onClick={this.showSearchHandler}
                >
                  <Icon
                    name={searchSVG}
                    size="23px"
                    color="#000"
                    className="search-icon"
                  />
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
                  <Icon
                    name={menubarSVG}
                    size="7px"
                    color="#000"
                    className="menu-bar"
                  />
                </button>
              </div>

              <div className="search-container-2">
                {' '}
                <button
                  className="search-bar-icon"
                  onClick={this.showSearchHandler}
                >
                  <Icon
                    name={searchSVG}
                    size="23px"
                    color="#000"
                    className="search-icon"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </Segment>
    );
  }
}

export default connect((state) => ({
  token: state.userSession.token,
}))(Header);

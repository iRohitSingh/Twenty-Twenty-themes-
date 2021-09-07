/**
 * Footer component.
 * @module components/theme/Footer/Footer
 */

import React from 'react';
import { Container, List, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { FormattedMessage, defineMessages, injectIntl } from 'react-intl';
import facebookSVG from './facebook.svg';
import twitterSVG from './twitter.svg';
import instagramSVG from './instagram.svg';
import messageSVG from './message.svg';

const messages = defineMessages({
  copyright: {
    id: 'Copyright',
    defaultMessage: 'Copyright',
  },
});
const topscrollhandler = () => {
  window.scrollTo(0, 0);
};

/**
 * Component to display the footer.
 * @function Footer
 * @param {Object} intl Intl object
 * @returns {string} Markup of the component
 */
const Footer = ({ intl }) => (
  <Segment className="footer-segment">
    <Container className="footer-container">
      <Segment basic className="footer-segment2">
        <div className="footer-row1">
          <div className="icon">
            <a href="#">
              <img className="sm-icon" src={facebookSVG} alt="facebook icon" />
            </a>
            <a href="#">
              <img className="sm-icon" src={twitterSVG} alt="twitter icon" />
            </a>
            <a href="#">
              <img
                className="sm-icon"
                src={instagramSVG}
                alt="instagram icon"
              />
            </a>
            <a href="#">
              <img className="sm-icon" src={messageSVG} alt="e-mail icon" />
            </a>
          </div>
        </div>
        <section className="footer-widgets">
          <div className="footer1">
            <h2 className="footer-h2">About This Site</h2>
            <div>
              <p>
                This may be a good place to introduce yourself and your site or
                include some credits.
              </p>
            </div>
          </div>
          <div className="footer2">
            <h2 className="footer-h2">Find Us</h2>
            <div>
              <p className="">
                <strong className="strong-footer">Address</strong>
                <br />
                123 Main Street
                <br />
                New York, NY 10001
              </p>
              <p className="">
                <strong className="strong-footer">Hours</strong>
                <br />
                Monday–Friday: 9:00AM–5:00PM
                <br />
                Saturday & Sunday: 11:00AM–3:00PM
              </p>
            </div>
          </div>
        </section>
      </Segment>
      <div className="footer-row3">
        <div className="year">
          <p className="year-21">
            © 2021{' '}
            <a href="#" className="year-twenty">
              Twenty Twenty
            </a>
          </p>
          {/* <p className="year">Twenty Twenty</p> */}
          <p className="footer-low">Powered by kitconcept</p>
        </div>
        <button className="top-btn" onClick={topscrollhandler}>
          To the top ↑
        </button>
      </div>
      <div className="footer-row4">
        <p className="year-21">
          © 2021{' '}
          <a href="#" className="year-twenty">
            Twenty Twenty
          </a>
        </p>

        <button className="top-btn2" onClick={topscrollhandler}>
          Up↑
        </button>
      </div>
    </Container>
  </Segment>
);

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
Footer.propTypes = {
  /**
   * i18n object
   */
};

export default injectIntl(Footer);

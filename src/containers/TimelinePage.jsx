import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { asyncConnect } from 'redux-connect';
import { Datepicker, Chips } from 'koiki-ui';
import FlagIconFactory from 'react-flag-icon-css';

import styles from '../css/timeline-page.less';

const FlagIcon = FlagIconFactory(React);
const TimeLinePage = props => console.log(props) ||
<div>
  <div>
    <div id="wrapper" className="wrapper">
      <div className={styles.logo}>
        <img
          src="images/logo.png"
          alt="Working Timeline Visualization System"
        />
      </div>
      <div className={styles.queries}>
        <Datepicker
          placeholder="Select dates"
          className={styles.datepicker}
        />
        <Chips
          className={styles.chips}
          suggests={[{
            id: 1000000,
            name: 'sideroad'
          }]}
          chips={[
            {
              id: 'frontend-group',
              name: 'FrontEnd Group'
            }
          ]}
        />
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th colSpan="2">Location</th>
              <th colSpan="2" />
            </tr>
          </thead>
          <tbody>
            <tr className="item">
              <td>
                <FlagIcon code="jp" size="2x" />
              </td>
              <td className="item-city">Tokyo</td>
              <td>
                <svg id="waterMark" className="waterMark away" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160">
                  <title>waterMark</title>
                  <circle cx="81.27" cy="51.72" r="47.37" />
                  <path
                    d="M9.44,155H151.5c-1.29-23.18-9.23-46.35-35-60.94-24.89,
                    17.17-48.5,16.31-71.25,0C21.67,105.21,11.8,131,9.44,155Z"
                  />
                </svg>
              </td>
              <td>
                <p className="item-name">Nozomi Nabuchi</p>
                <p className="item-tags">Tags,Tags,Tags</p>
              </td>
            </tr>
            <tr className="item">
              <td>
                <FlagIcon code="cn" size="2x" />
              </td>
              <td className="item-city">Shanghai</td>
              <td>
                <svg id="waterMark" className="waterMark available" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160">
                  <title>waterMark</title>
                  <circle cx="81.27" cy="51.72" r="47.37" />
                  <path
                    d="M9.44,155H151.5c-1.29-23.18-9.23-46.35-35-60.94-24.89,
                    17.17-48.5,16.31-71.25,0C21.67,105.21,11.8,131,9.44,155Z"
                  />
                </svg>
              </td>
              <td>
                <p className="item-name">Nanbun Chin</p>
                <p className="item-tags">Tags,Tags,Tags</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>;

TimeLinePage.propTypes = {
};

TimeLinePage.contextTypes = {
  lang: PropTypes.string.isRequired,
  fetcher: PropTypes.object.isRequired,
  i18n: PropTypes.object.isRequired
};

const connected = connect(
  state => ({
    ...state
  }),
  () => ({})
)(TimeLinePage);

const asynced = asyncConnect([{
  promise: ({ helpers: { fetcher } }) => {
    const promises = [];
    console.log(fetcher);
    // promises.push(fetcher.attendence.load());
    return Promise.all(promises);
  }
}])(connected);

export default asynced;

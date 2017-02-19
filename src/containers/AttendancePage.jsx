import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { asyncConnect } from 'redux-connect';
import { Datepicker, Chips } from 'koiki-ui';

import styles from '../css/attendance-page.less';

const AttendancePage = props => console.log(props) ||
<div>
  <div>
    <div id="wrapper" className="wrapper">
      <div className="logo">
        <img
          src="images/logo.png"
          alt="Attendance mamnagement system"
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
    </div>
  </div>
</div>;

AttendancePage.propTypes = {
};

AttendancePage.contextTypes = {
  lang: PropTypes.string.isRequired,
  fetcher: PropTypes.object.isRequired,
  i18n: PropTypes.object.isRequired
};

const connected = connect(
  state => ({
    ...state
  }),
  () => ({})
)(AttendancePage);

const asynced = asyncConnect([{
  promise: ({ helpers: { fetcher } }) => {
    const promises = [];
    console.log(fetcher);
    // promises.push(fetcher.attendence.load());
    return Promise.all(promises);
  }
}])(connected);

export default asynced;

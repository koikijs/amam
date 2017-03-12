import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { asyncConnect } from 'redux-connect';
import { Datepicker, Chips, Timeline } from 'koiki-ui';
import PersonsList from '../components/PersonsList';

import styles from '../css/timeline-page.less';

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
      <div className={styles.container}>
        <div className={styles.leftnav}>
          <PersonsList
            items={props.person.items}
          />
        </div>
        <div className={styles.rightnav}>
          <Timeline
            offsetMinutes={510}
            start="2017-02-18T15:00:00.000Z"
            end="2017-02-25T14:59:59.999Z"
            items={[
              {
                id: '111',
                periods: [
                  {
                    id: '111-111',
                    start: '2017-02-19T00:00:00.000Z',
                    end: '2017-02-19T08:30:00.000Z',
                    className: 'flight'
                  }, {
                    id: '111-222',
                    start: '2017-02-20T00:00:00.000Z',
                    end: '2017-02-20T08:30:00.000Z',
                    className: ''
                  }
                ]
              }
            ]}
          />
        </div>
      </div>
    </div>
  </div>
</div>;

TimeLinePage.propTypes = {
  person: PropTypes.object.isRequired
};

TimeLinePage.defaultProps = {
  person: {}
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
    promises.push(fetcher.person.gets());
    return Promise.all(promises);
  }
}])(connected);

export default asynced;

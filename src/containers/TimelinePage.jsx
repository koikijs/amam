import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { asyncConnect } from 'redux-connect';
import { push } from 'react-router-redux';
import { Datepicker, Chips, Timeline } from 'koiki-ui';
import PersonsList from '../components/PersonsList';

import styles from '../css/timeline-page.less';

const TimeLinePage = (props, context) =>
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
            suggests={props.tags}
            chips={props.selected}
            onChange={
              (evt) => {
                context.fetcher.tag.search({
                  q: evt.target.value
                });
              }
            }
            onSelect={
              tag => props.push({
                pathname: location.pathname,
                query: {
                  ...props.location.query,
                  tags: (props.location.query.tags || '').split(',').concat([tag.id]).join(',')
                }
              })
            }
            onDelete={
              tag => props.push({
                pathname: location.pathname,
                query: {
                  ...props.location.query,
                  tags: (props.location.query.tags || '').split(',').filter(item => !tag.id === item).join(',')
                }
              })
            }
          />
        </div>
        <div className={styles.container}>
          <div className={styles.leftnav}>
            <PersonsList
              items={props.persons}
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
  persons: PropTypes.array.isRequired,
  tags: PropTypes.array.isRequired,
  selected: PropTypes.array.isRequired,
  location: PropTypes.object.isRequired,
  push: PropTypes.func.isRequired,
};

TimeLinePage.contextTypes = {
  lang: PropTypes.string.isRequired,
  fetcher: PropTypes.object.isRequired,
  i18n: PropTypes.object.isRequired,
};

const connected = connect(
  (state, ownProps) => ({
    persons: state.person.items,
    tags: state.tag.items,
    selected: state.tag.selected,
    location: ownProps.location,
  }),
  { push }
)(TimeLinePage);

const asynced = asyncConnect([{
  promise: ({ helpers: { fetcher }, location }) => {
    const promises = [];
    promises.push(fetcher.person.gets());
    promises.push(fetcher.tag.gets({
      id: location.query.tags
    }));
    return Promise.all(promises);
  }
}])(connected);

export default asynced;

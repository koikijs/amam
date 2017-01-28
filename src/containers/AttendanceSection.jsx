import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { asyncConnect } from 'redux-connect';

const AttendanceSection = props => console.log(props) ||
<section className="item">
  {/*href="?name={props.attendance.n_staff}&status=3&date=2016-06-07&from=09:00&to=10:15&mode=edit"*/}
  <a
    href="{'name=' + props.attendance.n_staff + 'status='}"
    className="edit-info"
  >
    <svg
      id="waterMark"
      className="waterMark"
      data-name="waterMark"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 160 160"
    >
      <title>waterMark</title>
      <circle cx="81.27" cy="51.72" r="47.37" />
      <path
        d="M9.44,155H151.5c-1.29-23.18-9.23-46.35-35-60.94-24.89,
           17.17-48.5,16.31-71.25,0C21.67,105.21,11.8,131,9.44,155Z"
      />
    </svg>
    <div className="name">
      <p>
        {props.attendance.n_staff}
      </p>
      <p className="department">
        {props.attendance.n_team}
      </p>
    </div>
  </a>
</section>;

AttendanceSection.propTypes = {
  attendance: PropTypes.object.isRequired
};

AttendanceSection.contextTypes = {
  lang: PropTypes.string.isRequired,
  fetcher: PropTypes.object.isRequired,
  i18n: PropTypes.object.isRequired
};

const connected = connect(
  state => ({
    ...state
  }),
  () => ({})
)(AttendanceSection);

const asynced = asyncConnect([{
  promise: ({ helpers: { fetcher } }) => {
    const promises = [];
    console.log(fetcher);
    // promises.push(fetcher.attendence.load());
    return Promise.all(promises);
  }
}])(connected);

export default asynced;

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

const styles = require('../css/edit.less');

class AttendancePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { secondsElapsed: 0 };
  }

  render() {
    return (
      <section id="entry-modal" className={`${styles.modal} ${styles.active}`}>
        <div className={styles.modal_inner}>
          <h2>
            Attendance Information
          </h2>
          <form
            className="entry-form"
            method="get"
            action="#"
          >
            <p>
              please choose status
            </p>
            <div className="stat-icon-list">
              <input
                type="radio"
                name="icon"
                id="select1"
                defaultValue={1}
                defaultChecked
              />
              <label htmlFor="select1">
                <img
                  className="stat-icon"
                  src="images/icons/icon-morning-off.png"
                  alt="train-delay"
                />
              </label>
              <input
                type="radio"
                name="icon"
                id="select2"
                defaultValue={2}
                defaultChecked
              />
              <label htmlFor="select2">
                <img
                  className="stat-icon"
                  src="images/icons/icon-afternoon-off.png"
                  alt="train-delay"
                />
              </label>
              <input
                type="radio"
                name="icon"
                id="select3"
                defaultValue={3}
                defaultChecked
              />
              <label htmlFor="select3">
                <img
                  className="stat-icon"
                  src="images/icons/icon-paid-leave.png"
                  alt="train-delay"
                />
              </label>
              <input
                type="radio"
                name="icon"
                id="select4"
                defaultValue={4}
                defaultChecked
              />
              <label htmlFor="select4">
                <img
                  className="stat-icon"
                  src="images/icons/icon-late.png"
                  alt="train-delay"
                />
              </label>
              <input
                type="radio"
                name="icon"
                id="select5"
                defaultValue={5}
                defaultChecked
              />
              <label htmlFor="select5">
                <img
                  className="stat-icon"
                  src="images/icons/icon-business-trip.png"
                  alt="train-delay"
                />
              </label>
              <input
                type="radio"
                name="icon"
                id="select6"
                defaultValue={6}
                defaultChecked
              />
            </div>
            <div className="input-name" />
            <div className="date" />
            <div className="time" />
            <div className="reason" />
            <table className="table-form">
              <tbody>
                <tr>
                  <th>NAME</th>
                  <td>
                    <input
                      type="text"
                      id="input-name"
                      name="name"
                      placeholder="target name"
                    />
                  </td>
                  {/* /.input-name */}
                </tr>
                <tr>
                  <th>DATE</th>
                  <td>
                    <input
                      id="input-date"
                      type="date"
                      name="date"
                      autoComplete="on"
                      required
                    />
                  </td>
                  {/* /.date */}
                </tr>
                <tr>
                  <th>TIME</th>
                  <td>
                    <input
                      id="input-time-from"
                      type="time"
                      name="start"
                      autoComplete="on"
                      defaultValue="09:00"
                      required
                    />
                    <span className="seperator">-</span>
                    <input
                      id="input-time-to"
                      type="time"
                      name="end"
                      autoComplete="on"
                      defaultValue="09:15"
                      required
                    />
                  </td>
                  {/* /.time */}
                </tr>
                <tr>
                  <th>REASON</th>
                  <td>
                    <input
                      type="text"
                      name="reason"
                      placeholder="reason"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="submitbutton">
              <input
                id="input-send"
                type="submit"
                defaultValue="SEND"
              />
            </div>
            {/* /.submitbutton */}
          </form>
        </div>
        <a href="" className="close">
          <div className="btn">
            <span>close</span>
          </div>
        </a>
      </section>
    );
  }
}

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

export default connected;

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { asyncConnect } from 'redux-connect';

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
      <div className="add-button" />
      <div className="gridmaster">
        <form
          id="search-area"
          method="get"
          action="index.html"
        >
          <input
            type="text"
            name="condition"
            id="search-box"
            placeholder="Please Input Team, Name, Date"
          />
        </form>
        <span className="filter-conditon">2015/12/21</span>
        <span className="filter-conditon">
          Development Group
        </span>
      </div>
      {/* /.gridmaster */}
      <div className="clear" />
      <div className="gridmaster">
        <div className="grid">
          <p className="title">
            Paid leave off
          </p>
          <hr className="fancy-line" />
          <section className="item option">
            <a
              href="?name=TakahiroFujii&status=3&date=2016-06-07&from=09:00&to=10:15&mode=edit"
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
                  Takahiro Fujii
                </p>
                <p className="department">
                  Development Group
                </p>
              </div>
            </a>
          </section>
          <section className="item">
            <a
              href="?name=TakahiroFujii&status=3&date=2016-06-07&from=09:00&to=10:15&mode=edit"
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
                  Takahiro Fujii
                </p>
                <p className="department">
                  Development Group
                </p>
              </div>
            </a>
          </section>
          <section className="item">
            <a
              href="?name=TakahiroFujii&status=3&date=2016-06-07&from=09:00&to=10:15&mode=edit"
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
                  Takahiro Fujii
                </p>
                <p className="department">
                  Development Group
                </p>
              </div>
            </a>
          </section>
          <section className="item">
            <a
              href="?name=TakahiroFujii&status=3&date=2016-06-07&from=09:00&to=10:15&mode=edit"
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
                  Takahiro Fujii
                </p>
                <p className="department">
                  Development Group
                </p>
              </div>
            </a>
          </section>
          <section className="item">
            <a
              href="?name=TakahiroFujii&status=3&date=2016-06-07&from=09:00&to=10:15&mode=edit"
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
                  Takahiro Fujii
                </p>
                <p className="department">
                  Development Group
                </p>
              </div>
            </a>
          </section>
          <section className="item">
            <a
              href="?name=TakahiroFujii&status=3&date=2016-06-07&from=09:00&to=10:15&mode=edit"
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
                  Takahiro Fujii
                </p>
                <p className="department">
                  Development Group
                </p>
              </div>
            </a>
          </section>
          <section className="item">
            <a
              href="?name=TakahiroFujii&status=3&date=2016-06-07&from=09:00&to=10:15&mode=edit"
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
                  Takahiro Fujii
                </p>
                <p className="department">
                  Development Group
                </p>
              </div>
            </a>
          </section>
          <section className="item">
            <a
              href="?name=TakahiroFujii&status=3&date=2016-06-07&from=09:00&to=10:15&mode=edit"
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
                  Takahiro Fujii
                </p>
                <p className="department">
                  Development Group
                </p>
              </div>
            </a>
          </section>
          <section className="item">
            <a
              href="?name=TakahiroFujii&status=3&date=2016-06-07&from=09:00&to=10:15&mode=edit"
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
                  Takahiro Fujii
                </p>
                <p className="department">
                  Development Group
                </p>
              </div>
            </a>
          </section>
          {/* <div class="btn">
            <a href="">+ ADD INFORMATION</a>
          </div> */}
        </div>
        <div className="grid">
          <p className="title">Late</p>
          <hr className="fancy-line" />
          <div className="bar" />
          <section className="item">
            <a href="">
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
                  Takahiro Fujii
                </p>
                <p className="department">
                  Development Group
                </p>
              </div>
            </a>
          </section>
          <section className="item">
            <a href="">
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
                  Takahiro Fujii
                </p>
                <p className="department">
                  Development Group
                </p>
              </div>
            </a>
          </section>
          <section className="item">
            <a href="">
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
                  Takahiro Fujii
                </p>
                <p className="department">
                  Development Group
                </p>
              </div>
            </a>
          </section>
          <section className="item">
            <a href="">
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
                  Takahiro Fujii
                </p>
                <p className="department">
                  Development Group
                </p>
              </div>
            </a>
          </section>
          <section className="item">
            <a href="">
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
                  Takahiro Fujii
                </p>
                <p className="department">
                  Development Group
                </p>
              </div>
            </a>
          </section>
          <section className="item">
            <a href="">
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
                  Takahiro Fujii
                </p>
                <p className="department">
                  Development Group
                </p>
              </div>
            </a>
          </section>
          <div className="balloon">
            Half-Day off
          </div>
          <section className="item">
            <a href="">
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
                  Takahiro Fujii
                </p>
                <p className="department">
                  Development Group
                </p>
              </div>
            </a>
          </section>
          <section className="item">
            <a href="">
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
                  Takahiro Fujii
                </p>
                <p className="department">
                  Development Group
                </p>
              </div>
            </a>
          </section>
          <section className="item">
            <a href="">
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
                  Takahiro Fujii
                </p>
                <p className="department">
                  Development Group
                </p>
              </div>
            </a>
          </section>
          {/* <div class="btn">
            <a href="">+ ADD INFORMATION</a>
          </div> */}
        </div>
        <div className="grid">
          <p className="title">
            Business Event
          </p>
          <hr className="fancy-line" />
          <section className="item">
            <a href="">
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
                  Takahiro Fujii
                </p>
                <p className="department">
                  Development Group
                </p>
              </div>
            </a>
          </section>
          <section className="item">
            <a href="">
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
                  Takahiro Fujii
                </p>
                <p className="department">
                  Development Group
                </p>
              </div>
            </a>
          </section>
          <div className="rounded">
            <span className="reason">
              Overseas Conference
            </span>
          </div>
          <section className="item">
            <a href="">
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
                  Takahiro Fujii
                </p>
                <p className="department">
                  Development Group
                </p>
              </div>
            </a>
          </section>
          {/* <div class="btn">
            <a href="">+ ADD INFORMATION</a>
          </div> */}
        </div>
      </div>
      {/* /.gridmaster */}
    </div>
    {/* /.wrapper */}
    <section id="entry-modal" className="modal">
      <div className="modal-inner">
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

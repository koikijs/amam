import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { asyncConnect } from 'redux-connect';

const AttendancePage = props => console.log(props) ||
  <div>
    <div id="wrapper" className="wrapper">
      <div className="logo">
        <img
          src="images/logo.png"
          alt="Attendance mamnagement system"
        />
      </div>
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
          <section className="item new">
            <a
              href="?name=TakahiroFujii&status=3&date=2016-06-07&from=09:00&to=10:15&mode=edit"
              className="edit-info"
            >
              <img
                className="thumbnail"
                src="images/thumbnail1.png"
                alt="thumbnail"
              />
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
              <img
                className="thumbnail"
                src="images/thumbnail1.png"
                alt="thumbnail"
              />
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
              <img
                className="thumbnail"
                src="images/thumbnail1.png"
                alt="thumbnail"
              />
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
              <img
                className="thumbnail"
                src="images/thumbnail1.png"
                alt="thumbnail"
              />
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
              <img
                className="thumbnail"
                src="images/thumbnail1.png"
                alt="thumbnail"
              />
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
              <img
                className="thumbnail"
                src="images/thumbnail1.png"
                alt="thumbnail"
              />
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
              <img
                className="thumbnail"
                src="images/thumbnail1.png"
                alt="thumbnail"
              />
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
              <img
                className="thumbnail"
                src="images/thumbnail1.png"
                alt="thumbnail"
              />
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
              <img
                className="thumbnail"
                src="images/thumbnail1.png"
                alt="thumbnail"
              />
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
          <div className="btn">
            <a href="">
              + ADD INFORMATION
            </a>
          </div>
        </div>
        <div className="grid">
          <p className="title">Late</p>
          <hr className="fancy-line" />
          <div className="bar" />
          <section className="item">
            <a href="">
              <img
                className="thumbnail"
                src="images/thumbnail1.png"
                alt="thumbnail"
              />
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
              <img
                className="thumbnail"
                src="images/thumbnail1.png"
                alt="thumbnail"
              />
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
              <img
                className="thumbnail"
                src="images/thumbnail1.png"
                alt="thumbnail"
              />
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
              <img
                className="thumbnail"
                src="images/thumbnail1.png"
                alt="thumbnail"
              />
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
              <img
                className="thumbnail"
                src="images/thumbnail1.png"
                alt="thumbnail"
              />
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
              <img
                className="thumbnail"
                src="images/thumbnail1.png"
                alt="thumbnail"
              />
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
              <img
                className="thumbnail"
                src="images/thumbnail1.png"
                alt="thumbnail"
              />
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
              <img
                className="thumbnail"
                src="images/thumbnail1.png"
                alt="thumbnail"
              />
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
              <img
                className="thumbnail"
                src="images/thumbnail1.png"
                alt="thumbnail"
              />
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
          <div className="btn">
            <a href="">
              + ADD INFORMATION
            </a>
          </div>
        </div>
        <div className="grid">
          <p className="title">
            Business Event
          </p>
          <hr className="fancy-line" />
          <section className="item">
            <a href="">
              <img
                className="thumbnail"
                src="images/thumbnail1.png"
                alt="thumbnail"
              />
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
              <img
                className="thumbnail"
                src="images/thumbnail1.png"
                alt="thumbnail"
              />
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
              <img
                className="thumbnail"
                src="images/thumbnail1.png"
                alt="thumbnail"
              />
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
          <div className="btn">
            <a href="">
              + ADD INFORMATION
            </a>
          </div>
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

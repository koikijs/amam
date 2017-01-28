import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { asyncConnect } from 'redux-connect';
import AttendanceSection from './AttendanceSection';

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

          {props.attendances.map((attendance) => {
            return (
              <AttendanceSection attendance={attendance} />
            );
          })
          }

          {/* <div class="btn">
            <a href="">+ ADD INFORMATION</a>
          </div> */}
        </div>
        <div className="grid">
          <p className="title">Late</p>
          <hr className="fancy-line" />
          <div className="bar" />

          {props.attendances.map((attendance) => {
            return (
              <AttendanceSection attendance={attendance} />
            );
          })
          }

          <div className="balloon">
            Half-Day off
          </div>

          {props.attendances.map((attendance) => {
            return (
              <AttendanceSection attendance={attendance} />
            );
          })
          }

          {/* <div class="btn">
            <a href="">+ ADD INFORMATION</a>
          </div> */}
        </div>
        <div className="grid">
          <p className="title">
            Business Event
          </p>
          <hr className="fancy-line" />

          {props.attendances.map((attendance) => {
            return (
              <AttendanceSection attendance={attendance} />
            );
          })
          }

          <div className="rounded">
            <span className="reason">
              Overseas Conference
            </span>
          </div>

          {props.attendances.map((attendance) => {
            return (
              <AttendanceSection attendance={attendance} />
            );
          })
          }

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
  attendances: PropTypes.object.isRequired
};

AttendancePage.contextTypes = {
  lang: PropTypes.string.isRequired,
  fetcher: PropTypes.object.isRequired,
  i18n: PropTypes.object.isRequired
};

const connected = connect(
  state => ({
    attendances : [
    {
         "no_prior": 40,
         "cd_team": 1,
         "n_team": "MGR",
         "n_staff": "hidego.kawainu",
         "id_staff": "100003032",
         "r_remarks": null,
         "n_staff_ent": "hidego.kawainu",
         "dt_att_ent": "2016-11-18T14:29:05.000Z",
         "dt_att_upd": null,
         "s_att": 43275,
         "cd_att_type": 5,
         "cd_att_reasnaga": 6,
         "c_boss_flg": "1",
         "c_ldr_flg": "0",
         "d_att": "2016-12-26",
         "t_start": null,
         "t_end": null,
         "n_att_type": "",
         "n_att_reasnaga": "",
         "start_to_end": ""
       },
       {
         "no_prior": 50,
         "cd_team": 1,
         "n_team": "MGR",
         "n_staff": "ydog.catnaga",
         "id_staff": "100002646",
         "r_remarks": null,
         "n_staff_ent": "ydog.catnaga",
         "dt_att_ent": "2016-11-25T09:27:01.000Z",
         "dt_att_upd": null,
         "s_att": 43376,
         "cd_att_type": 5,
         "cd_att_reasnaga": 6,
         "c_boss_flg": "1",
         "c_ldr_flg": "0",
         "d_att": "2016-12-26",
         "t_start": null,
         "t_end": null,
         "n_att_type": "",
         "n_att_reasnaga": "",
         "start_to_end": ""
       },
       {
         "no_prior": 50,
         "cd_team": 1,
         "n_team": "MGR",
         "n_staff": "ydog.catnaga",
         "id_staff": "100002646",
         "r_remarks": null,
         "n_staff_ent": "ydog.catnaga",
         "dt_att_ent": "2016-11-25T09:27:26.000Z",
         "dt_att_upd": null,
         "s_att": 43377,
         "cd_att_type": 5,
         "cd_att_reasnaga": 6,
         "c_boss_flg": "1",
         "c_ldr_flg": "0",
         "d_att": "2016-12-27",
         "t_start": null,
         "t_end": null,
         "n_att_type": "",
         "n_att_reasnaga": "",
         "start_to_end": ""
       },
       {
         "no_prior": 41,
         "cd_team": 1,
         "n_team": "MGR",
         "n_staff": "min.aun",
         "id_staff": "100001892",
         "r_remarks": null,
         "n_staff_ent": "min.aun",
         "dt_att_ent": "2016-10-31T10:01:51.000Z",
         "dt_att_upd": null,
         "s_att": 42891,
         "cd_att_type": 5,
         "cd_att_reasnaga": 5,
         "c_boss_flg": "0",
         "c_ldr_flg": "0",
         "d_att": "2016-12-28",
         "t_start": null,
         "t_end": null,
         "n_att_type": "",
         "n_att_reasnaga": "",
         "start_to_end": ""
       },
       {
         "no_prior": 50,
         "cd_team": 1,
         "n_team": "MGR",
         "n_staff": "ydog.catnaga",
         "id_staff": "100002646",
         "r_remarks": null,
         "n_staff_ent": "ydog.catnaga",
         "dt_att_ent": "2016-11-25T09:27:54.000Z",
         "dt_att_upd": null,
         "s_att": 43378,
         "cd_att_type": 5,
         "cd_att_reasnaga": 6,
         "c_boss_flg": "1",
         "c_ldr_flg": "0",
         "d_att": "2016-12-28",
         "t_start": null,
         "t_end": null,
         "n_att_type": "",
         "n_att_reasnaga": "",
         "start_to_end": ""
       },
       {
         "no_prior": 90,
         "cd_team": 3,
         "n_team": "GOOD-Search",
         "n_staff": "lab-shaoqiang.zhou",
         "id_staff": "100606116",
         "r_remarks": "中国",
         "n_staff_ent": "lab-shaoqiang.zhou",
         "dt_att_ent": "2016-08-25T10:01:19.000Z",
         "dt_att_upd": null,
         "s_att": 41761,
         "cd_att_type": 5,
         "cd_att_reasnaga": 6,
         "c_boss_flg": "0",
         "c_ldr_flg": "1",
         "d_att": "2016-12-26",
         "t_start": null,
         "t_end": null,
         "n_att_type": "",
         "n_att_reasnaga": "",
         "start_to_end": ""
       },
       {
         "no_prior": 90,
         "cd_team": 3,
         "n_team": "GOOD-Search",
         "n_staff": "lab-shaoqiang.zhou",
         "id_staff": "100606116",
         "r_remarks": "中国",
         "n_staff_ent": "lab-shaoqiang.zhou",
         "dt_att_ent": "2016-08-25T10:01:44.000Z",
         "dt_att_upd": null,
         "s_att": 41762,
         "cd_att_type": 5,
         "cd_att_reasnaga": 6,
         "c_boss_flg": "0",
         "c_ldr_flg": "1",
         "d_att": "2016-12-27",
         "t_start": null,
         "t_end": null,
         "n_att_type": "",
         "n_att_reasnaga": "",
         "start_to_end": ""
       },
       {
         "no_prior": 90,
         "cd_team": 3,
         "n_team": "GOOD-Search",
         "n_staff": "lab-shaoqiang.zhou",
         "id_staff": "100606116",
         "r_remarks": "中国",
         "n_staff_ent": "lab-shaoqiang.zhou",
         "dt_att_ent": "2016-08-25T10:02:13.000Z",
         "dt_att_upd": null,
         "s_att": 41763,
         "cd_att_type": 5,
         "cd_att_reasnaga": 6,
         "c_boss_flg": "0",
         "c_ldr_flg": "1",
         "d_att": "2016-12-28",
         "t_start": null,
         "t_end": null,
         "n_att_type": "",
         "n_att_reasnaga": "",
         "start_to_end": ""
       },
       {
         "no_prior": 70,
         "cd_team": 11,
         "n_team": "PDM",
         "n_staff": "goniel.buckne",
         "id_staff": "100011608",
         "r_remarks": null,
         "n_staff_ent": "goniel.buckne",
         "dt_att_ent": "2016-11-09T09:24:39.000Z",
         "dt_att_upd": null,
         "s_att": 43062,
         "cd_att_type": 5,
         "cd_att_reasnaga": 6,
         "c_boss_flg": "0",
         "c_ldr_flg": "0",
         "d_att": "2016-12-26",
         "t_start": null,
         "t_end": null,
         "n_att_type": "",
         "n_att_reasnaga": "",
         "start_to_end": ""
       },
       {
         "no_prior": 70,
         "cd_team": 11,
         "n_team": "PDM",
         "n_staff": "goniel.buckne",
         "id_staff": "100011608",
         "r_remarks": null,
         "n_staff_ent": "goniel.buckne",
         "dt_att_ent": "2016-11-09T09:24:58.000Z",
         "dt_att_upd": null,
         "s_att": 43063,
         "cd_att_type": 5,
         "cd_att_reasnaga": 6,
         "c_boss_flg": "0",
         "c_ldr_flg": "0",
         "d_att": "2016-12-27",
         "t_start": null,
         "t_end": null,
         "n_att_type": "",
         "n_att_reasnaga": "",
         "start_to_end": ""
       },
       {
         "no_prior": 70,
         "cd_team": 11,
         "n_team": "PDM",
         "n_staff": "goniel.buckne",
         "id_staff": "100011608",
         "r_remarks": null,
         "n_staff_ent": "goniel.buckne",
         "dt_att_ent": "2016-11-09T09:25:22.000Z",
         "dt_att_upd": null,
         "s_att": 43064,
         "cd_att_type": 5,
         "cd_att_reasnaga": 6,
         "c_boss_flg": "0",
         "c_ldr_flg": "0",
         "d_att": "2016-12-28",
         "t_start": null,
         "t_end": null,
         "n_att_type": "",
         "n_att_reasnaga": "",
         "start_to_end": ""
       },
       {
         "no_prior": 70,
         "cd_team": 20,
         "n_team": "GET",
         "n_staff": "yushou.tsuchihahe",
         "id_staff": "100004211",
         "r_remarks": null,
         "n_staff_ent": "yushou.tsuchihahe",
         "dt_att_ent": "2016-10-18T15:56:34.000Z",
         "dt_att_upd": null,
         "s_att": 42683,
         "cd_att_type": 5,
         "cd_att_reasnaga": 6,
         "c_boss_flg": "1",
         "c_ldr_flg": "1",
         "d_att": "2016-12-26",
         "t_start": null,
         "t_end": null,
         "n_att_type": "",
         "n_att_reasnaga": "",
         "start_to_end": ""
       },
       {
         "no_prior": 70,
         "cd_team": 20,
         "n_team": "GET",
         "n_staff": "yushou.tsuchihahe",
         "id_staff": "100004211",
         "r_remarks": null,
         "n_staff_ent": "yushou.tsuchihahe",
         "dt_att_ent": "2016-10-18T15:56:52.000Z",
         "dt_att_upd": null,
         "s_att": 42684,
         "cd_att_type": 5,
         "cd_att_reasnaga": 6,
         "c_boss_flg": "1",
         "c_ldr_flg": "1",
         "d_att": "2016-12-27",
         "t_start": null,
         "t_end": null,
         "n_att_type": "",
         "n_att_reasnaga": "",
         "start_to_end": ""
       },
       {
         "no_prior": 99,
         "cd_team": 20,
         "n_team": "GET",
         "n_staff": "lab-fnaga.fnaga",
         "id_staff": "100610174",
         "r_remarks": "健康診断",
         "n_staff_ent": "lab-fnaga.fnaga",
         "dt_att_ent": "2016-11-14T09:27:10.000Z",
         "dt_att_upd": null,
         "s_att": 43155,
         "cd_att_type": 5,
         "cd_att_reasnaga": 3,
         "c_boss_flg": "0",
         "c_ldr_flg": "1",
         "d_att": "2016-12-27",
         "t_start": null,
         "t_end": null,
         "n_att_type": "",
         "n_att_reasnaga": "",
         "start_to_end": ""
       },
       {
         "no_prior": 70,
         "cd_team": 20,
         "n_team": "GET",
         "n_staff": "yushou.tsuchihahe",
         "id_staff": "100004211",
         "r_remarks": null,
         "n_staff_ent": "yushou.tsuchihahe",
         "dt_att_ent": "2016-10-18T15:57:10.000Z",
         "dt_att_upd": null,
         "s_att": 42685,
         "cd_att_type": 5,
         "cd_att_reasnaga": 6,
         "c_boss_flg": "1",
         "c_ldr_flg": "1",
         "d_att": "2016-12-28",
         "t_start": null,
         "t_end": null,
         "n_att_type": "",
         "n_att_reasnaga": "",
         "start_to_end": ""
       }
    ]
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

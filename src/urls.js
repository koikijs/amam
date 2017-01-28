import { normalize } from 'koiki';
import config from './config';

const base = normalize(`${config.api.host}:${config.api.port}`);

export default {
  attendanceType: {
    load: {
      url: `${base}/attendanceTypes`
    }
  },
  attendanceReason: {
    load: {
      url: `${base}/attendanceReasons`
    }
  }
};

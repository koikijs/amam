import { normalize } from 'koiki';
import config from './config';

const base = normalize(`${config.api.host}:${config.api.port}`);

export default {
  person: {
    gets: {
      url: `${base}/persons`,
      method: 'GET'
    },
  },
  tag: {
    gets: {
      url: `${base}/tags`,
      method: 'GET'
    },
    search: {
      url: `${base}/tags`,
      method: 'GET'
    }
  },
  hobby: {
    load: {
      url: `${base}/apis/koiki/hobbies`
    }
  }
};

import fetchMock from 'fetch-mock';
import resources from './resources';

Object.keys(resources).forEach((uri) => {
  fetchMock.mock(new RegExp(uri), (url, options) => new Promise((resolve) => {
    setTimeout(() => resolve({
      body: resources[uri][options ? options.method : 'GET'].response,
      status: resources[uri][options ? options.method : 'GET'].status || 200
    }), 100);
  }));
});

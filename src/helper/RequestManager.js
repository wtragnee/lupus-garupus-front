import rp from 'request-promise';
import retry from 'bluebird-retry';
import _ from 'lodash';

class RequestManager {
  constructor(options = {}) {
    this._host = options.host || global.config.host;
    this._retryOptions = options.retry || global.config.retry;
    this._requestOptions = options.request || global.config.request;
  }

  _request(params) {
    return rp(
      _.assignIn(params, this._requestOptions, {
        uri: `${this._host}${params.uri}`
      })
    );
  }

  _requestWithRetry(params) {
    return retry(() => this._request(params), this._retryOptions);
  }

  get(params) {
    return this._requestWithRetry(
      _.assignIn(params, {
        method: 'GET'
      })
    );
  }

  post(params) {
    return this._requestWithRetry(
      _.assignIn(params, {
        method: 'POST'
      })
    );
  }

  put(params) {
    return this._requestWithRetry(
      _.assignIn(params, {
        method: 'PUT'
      })
    );
  }

  delete(params) {
    return this._requestWithRetry(
      _.assignIn(params, {
        method: 'DELETE'
      })
    );
  }
}

export default RequestManager;

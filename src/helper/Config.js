import _ from 'lodash';

class Config {
  constructor() {
    // eslint-disable-next-line global-require, import/no-unresolved
    const defaultConfig = require('../config/default.json');
    switch (process.env.NODE_ENV) {
      case 'development':
        // eslint-disable-next-line global-require, import/no-unresolved
        return _.merge(defaultConfig, require('../config/docker.json'));
      default:
        return defaultConfig;
    }
  }
}

export default Config;

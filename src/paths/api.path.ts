import { basePath } from './base.path';

export const ApiPath = {
  geo: `${basePath.api}/geo/1.0/`,
  get direct() {
    return `${this.geo}/direct`;
  },
  get zip() {
    return `${this.geo}/zip`;
  },
  get reverse() {
    return `${this.geo}/reverse`;
  },
  weather: `${basePath.api}/data/2.5/weather`,
  airPollution: `${basePath.api}data/2.5/air_pollution`,
};

export default ApiPath;

import http from '../index';

export const list = () => http.get('/competitions/2019/teams')
  .then(({ data }) => data);

import http from '../index';
import { squadFormatter } from './formatters';

export const teamFixture = id => http.get(`teams/${id}/matches?limit=10`)
  .then(({ data }) => data);

export const teamSquad = id => http.get(`teams/${id}`)
  .then(({ data }) => squadFormatter(data));

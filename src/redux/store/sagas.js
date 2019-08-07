import { fork, all } from 'redux-saga/effects';
import * as teamsWatchers from '../modules/teams';
import * as teamWatchers from '../modules/teamInfo';

export default function* rootSaga() {
  yield all([
    fork(teamsWatchers.watchGetTeams),
    fork(teamWatchers.watchGetTeamDetails),
  ]);
}

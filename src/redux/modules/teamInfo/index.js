import {
  call, put, takeEvery,
} from 'redux-saga/effects';
import { teamFixture, teamSquad } from '../../../services/http/teamInfo';

const init = {
  actualTeamId: '',
  isLoading: false,
  isLoadingFailed: false,
  players: {
    Goalkeepers: [],
    Defenders: [],
    Midfielders: [],
    Attackers: [],
  },
  teamFixtures: [],
};

// <<<CONSTS>>>
const TEAM_DETAILS_REQUEST = 'TEAM_DETAILS_REQUEST';
const TEAM_DETAILS_SUCCESS = 'TEAM_DETAILS_SUCCESS';
const TEAM_DETAILS_FAILED = 'TEAM_DETAILS_FAILED';

// <<<REDUCER>>>
export default function reducer(state = init, action) {
  switch (action.type) {
    case TEAM_DETAILS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case TEAM_DETAILS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        players: action.payload[0],
        teamFixtures: action.payload[1].matches,
      };
    case TEAM_DETAILS_FAILED:
      return {
        ...state,
        isLoading: false,
        isLoadingFailed: true,
      };
    default:
      return state;
  }
}

// <<<WORKERS>>>
function* getTeamDetails(action) {
  const id = action.payload;
  try {
    const squad = yield call(teamSquad, id);
    const fixture = yield call(teamFixture, id);
    yield put({ type: TEAM_DETAILS_SUCCESS, payload: [squad, fixture] });
  } catch (error) {
    yield put({ type: TEAM_DETAILS_FAILED, error });
  }
}

// <<<ACTIONS>>>
export const fetchTeamDetails = id => ({ type: TEAM_DETAILS_REQUEST, payload: id });

// <<<WATCHERS>>>
export function* watchGetTeamDetails() {
  yield takeEvery(TEAM_DETAILS_REQUEST, getTeamDetails);
}

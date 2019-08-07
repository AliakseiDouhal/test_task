import {
  call, put, takeEvery,
} from 'redux-saga/effects';
import { list } from '../../../services/http/teams';

const init = {
  isLoading: false,
  list: [],
};

// <<<CONSTS>>>
const TEAMS_REQUEST = 'TEAMS_REQUEST';
const TEAMS_SUCCESS = 'TEAMS_SUCCESS';
const TEAMS_FAILED = 'TEAMS_FAILED';

// <<<REDUCER>>>
export default function reducer(state = init, action) {
  switch (action.type) {
    case TEAMS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case TEAMS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        list: action.payload.teams,
      };
    case TEAMS_FAILED:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
}

// <<<WORKERS>>>
function* getTeams() {
  try {
    const data = yield call(list);
    yield put({ type: TEAMS_SUCCESS, payload: data });
  } catch (error) {
    yield put({ type: TEAMS_FAILED, error });
  }
}

// <<<ACTIONS>>>
export const fetchTeams = () => ({ type: TEAMS_REQUEST });

// <<<WATCHERS>>>
export function* watchGetTeams() {
  yield takeEvery(TEAMS_REQUEST, getTeams);
}

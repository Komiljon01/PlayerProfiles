import {
  filtersFetched,
  filtersFetching,
  filtersFetchingError,
} from "../slices/filters-slice";
import {
  playersFetched,
  playersFetching,
  playersFetchingError,
} from "../slices/players-slice";

// ACTIONS
export const fetchPlayers = (request) => (dispatch) => {
  dispatch(playersFetching());

  request("http://localhost:3000/players")
    .then((data) => dispatch(playersFetched(data)))
    .catch(() => dispatch(playersFetchingError()));
};

export const fetchFilters = (request) => (dispatch) => {
  dispatch(filtersFetching());

  request("http://localhost:3000/filters")
    .then((data) => dispatch(filtersFetched(data)))
    .catch(() => dispatch(filtersFetchingError()));
};

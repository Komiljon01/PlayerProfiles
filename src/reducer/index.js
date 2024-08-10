// REDUCER
const initalState = {
  players: [],
  playersLoadingStatus: "success",
  filters: [],
  filtersLoadingStatus: "success",
  activeFilter: "All",
  filteredPlayers: [],
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    // PLAYERS
    case "PLAYERS_FETCHING":
      return { ...state, playersLoadingStatus: "loading" };
    case "PLAYERS_FETCHED":
      return {
        ...state,
        players: action.payload,
        filteredPlayers:
          state.activeFilter === "All"
            ? state.players
            : state.players.filter(
                (player) => player.continent === state.activeFilter
              ),
        playersLoadingStatus: "success",
      };
    case "PLAYERS_FETCHING_ERROR":
      return { ...state, playersLoadingStatus: "error" };
    case "PLAYER_CREATED":
      const newPlayer = [...state.players, action.payload];
      return {
        ...state,
        players: newPlayer,
        filteredPlayers:
          state.activeFilter === "All"
            ? newPlayer
            : newPlayer.filter(
                (player) => player.continent === state.activeFilter
              ),
      };
    case "PLAYER_DELETED":
      const deletedPlayer = state.players.filter(
        (player) => player.id !== action.payload
      );
      return {
        ...state,
        players: deletedPlayer,
        filteredPlayers:
          state.activeFilter === "All"
            ? deletedPlayer
            : deletedPlayer.filter(
                (player) => player.continent === state.activeFilter
              ),
      };

    // FILTERS
    case "FILTERS_FETCHING":
      return { ...state, filtersLoadingStatus: "loading" };
    case "FILTERS_FETCHED":
      return {
        ...state,
        filters: action.payload,
        filtersLoadingStatus: "success",
      };
    case "FILTERS_FETCHING_ERROR":
      return { ...state, filtersLoadingStatus: "error" };
    case "ACTIVE_FILTER_CHANGED":
      return {
        ...state,
        activeFilter: action.payload,
        filteredPlayers:
          action.payload === "All"
            ? state.players
            : state.players.filter(
                (player) => player.continent === action.payload
              ),
      };

    default:
      return state;
  }
};

export default reducer;

const initalState = {
  players: [],
  playersLoadingStatus: "success",
};

const players = (state = initalState, action) => {
  switch (action.type) {
    case "PLAYERS_FETCHING":
      return { ...state, playersLoadingStatus: "loading" };
    case "PLAYERS_FETCHED":
      return {
        ...state,
        players: action.payload,
        playersLoadingStatus: "success",
      };
    case "PLAYERS_FETCHING_ERROR":
      return { ...state, playersLoadingStatus: "error" };
    case "PLAYER_CREATED":
      const newPlayer = [...state.players, action.payload];
      return {
        ...state,
        players: newPlayer,
      };
    case "PLAYER_DELETED":
      const deletedPlayer = state.players.filter(
        (player) => player.id !== action.payload
      );
      return {
        ...state,
        players: deletedPlayer,
      };

    default:
      return state;
  }
};

export default players;

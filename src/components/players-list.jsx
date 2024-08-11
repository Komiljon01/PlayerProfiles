import { useDispatch, useSelector } from "react-redux";
import { useHttp } from "../hooks/use-http";
import { useCallback, useEffect } from "react";
import { fetchPlayers } from "../actions";
import { playerDeleted } from "../slices/players-slice";
import Spinner from "./spinner";
import Error from "./error";
import Empty from "./empty";
import PlayersListItem from "./players-list-item";
import { createSelector } from "@reduxjs/toolkit";

function PlayersList() {
  const filteredPlayersSelector = createSelector(
    (state) => state.players.players,
    (state) => state.filters.activeFilter,
    (players, filter) => {
      if (filter === "All") {
        return players;
      } else {
        return players.filter((player) => player.continent === filter);
      }
    }
  );

  const filteredPlayers = useSelector(filteredPlayersSelector);
  const playersLoadingStatus = useSelector(
    (state) => state.playersLoadingStatus
  );
  const dispatch = useDispatch();
  const { request } = useHttp();

  useEffect(() => dispatch(fetchPlayers(request)), []);

  const onDelete = useCallback(
    (id) => {
      request(`http://localhost:3000/players/${id}`, "DELETE")
        .then(() => dispatch(playerDeleted(id)))
        .catch((e) => console.log(e));
    },
    [request]
  );

  if (playersLoadingStatus === "loading") {
    return <Spinner classNames={"w-8 h-8 block mx-auto text-white/70"} />;
  } else if (playersLoadingStatus === "error") {
    return <Error />;
  }

  const renderPlayers = () => {
    if (!filteredPlayers.length) {
      return <Empty />;
    }

    return filteredPlayers.map(({ id, ...props }) => (
      <PlayersListItem key={id} {...props} onDelete={() => onDelete(id)} />
    ));
  };

  return <div className="flex flex-col space-y-4">{renderPlayers()}</div>;
}

export default PlayersList;

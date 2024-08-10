import { useDispatch, useSelector } from "react-redux";
import { useHttp } from "../hooks/use-http";
import { useCallback, useEffect } from "react";
import {
  playerDeleted,
  playersFetched,
  playersFetching,
  playersFetchingError,
} from "../actions";
import Spinner from "./spinner";
import Error from "./error";
import Empty from "./empty";
import PlayersListItem from "./players-list-item";

function PlayersList() {
  const { filteredPlayers, playersLoadingStatus } = useSelector((state) => state);
  const dispatch = useDispatch();
  const { request } = useHttp();

  useEffect(() => {
    dispatch(playersFetching());

    request("http://localhost:3000/players")
      .then((data) => dispatch(playersFetched(data)))
      .catch(() => dispatch(playersFetchingError()));
  }, []);

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

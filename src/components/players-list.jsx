import { useDispatch, useSelector } from "react-redux";
import { useHttp } from "../hooks/use-http";
import { useEffect } from "react";
import {
  playersFetched,
  playersFetching,
  playersFetchingError,
} from "../actions";
import Spinner from "./spinner";
import Error from "./error";
import Empty from "./empty";
import PlayersListItem from "./players-list-item";

function PlayersList() {
  const { players, playersLoadingStatus } = useSelector((state) => state);
  const dispatch = useDispatch();
  const { request } = useHttp();

  useEffect(() => {
    dispatch(playersFetching());

    request("http://localhost:3000/players")
      .then((data) => dispatch(playersFetched(data)))
      .catch(() => dispatch(playersFetchingError()));
  }, []);

  if (playersLoadingStatus === "loading") {
    return <Spinner classNames={"w-8 h-8 block mx-auto text-white/70"} />;
  } else if (playersLoadingStatus === "error") {
    return <Error />;
  }

  const renderPlayers = () => {
    if (!players.length) {
      return <Empty />;
    }

    return players.map(({ id, ...props }) => (
      <PlayersListItem key={id} {...props} />
    ));
  };

  return <div className="flex flex-col space-y-4">{renderPlayers()}</div>;
}

export default PlayersList;

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { activeFilterChanged, fetchFilters } from "../slices/filters-slice";
import Spinner from "./spinner";

function PlayersFilter() {
  const { filters, filtersLoadingStatus, activeFilter } = useSelector(
    (state) => state.filters
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFilters());
  }, []);

  if (filtersLoadingStatus === "loading") {
    return <Spinner classNames={"w-8 h-8 block mx-auto text-white/70"} />;
  } else if (filtersLoadingStatus === "error") {
    return <span className="text-red-500">Something went wrong!</span>;
  }

  const renderFilters = () => {
    if (!filters.length)
      return <span className="text-red-500">Filters Not Found!</span>;

    return filters.map(({ id, label, classes }) => (
      <button
        key={id}
        className={`py-2 px-4 bg-gradient-to-r text-white hover:opacity-90 transition-all ${classes} ${
          activeFilter === label && "text-black/80 font-bold"
        }`}
        onClick={() => dispatch(activeFilterChanged(label))}
      >
        {label}
      </button>
    ));
  };

  return (
    <div className="px-4 py-6 bg-white rounded-md shadow-lg bg-gradient-to-b from-cyan-500 to-transparent bg-opacity-10 mt-4">
      <h1 className="text-xl font-bold">Filter players by continent</h1>

      <div className="flex mt-2">{renderFilters()}</div>
    </div>
  );
}

export default PlayersFilter;

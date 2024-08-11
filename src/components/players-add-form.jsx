import { useDispatch, useSelector } from "react-redux";
import uuid4 from "uuid4";
import { useHttp } from "../hooks/use-http";
import { playerCreated, playersFetchingError } from "../slices/players-slice";

function PlayersAddForm() {
  const { request } = useHttp();
  const { filters, filtersLoadingStatus } = useSelector(
    (state) => state.filters
  );
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const continent = e.target.continent.value;
    const country = e.target.country.value;
    const data = { id: uuid4(), name, continent, country };

    request("http://localhost:3000/players", "POST", JSON.stringify(data))
      .then(() => dispatch(playerCreated(data)))
      .catch(() => dispatch(playersFetchingError()))
      .finally(() => e.target.reset());
  };

  const renderFilters = () => {
    if (filtersLoadingStatus === "loading") {
      return <option>Loading...</option>;
    } else if (filtersLoadingStatus === "error") {
      return <option>Something went wrong!</option>;
    }

    if (filters && filters.length > 0) {
      return filters.map(({ id, label }) => {
        if (id === "all") return;

        return (
          <option key={id} value={label}>
            {label}
          </option>
        );
      });
    }
  };

  return (
    <div className="px-4 py-6 bg-white rounded-md shadow-lg bg-gradient-to-t from-cyan-500 to-transparent bg-opacity-10">
      <form onSubmit={onSubmit}>
        <div className="flex flex-col space-y-3">
          <div>
            <label htmlFor="name" className="text-2xl">
              New Football Player
            </label>
            <input
              type="text"
              className="d-block w-full py-2 px-4 rounded-md mt-1 border-none outline-none"
              name="name"
              id="name"
              placeholder="Mohamed Salah"
              required
            />
          </div>

          <div>
            <label htmlFor="country" className="text-2xl">
              Country
            </label>
            <input
              type="text"
              className="d-block w-full py-2 px-4 rounded-md mt-1 border-none outline-none"
              name="country"
              id="country"
              placeholder="Egypt"
              required
            />
          </div>

          <div>
            <label htmlFor="continent" className="text-2xl">
              Select player continent
            </label>
            <select
              className="d-block w-full py-2 px-4 rounded-md mt-1 border-none outline-none"
              name="continent"
              id="continent"
              required
            >
              {renderFilters()}
            </select>
          </div>

          <button
            type="submit"
            className="w-fit ml-auto px-4 py-2 rounded-md bg-gradient-to-r from-blue-500 to-blue-950 text-white transition-all hover:opacity-90 font-medium "
          >
            Add player
          </button>
        </div>
      </form>
    </div>
  );
}

export default PlayersAddForm;

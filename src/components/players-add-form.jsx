function PlayersAddForm() {
  return (
    <div className="px-4 py-6 bg-white rounded-md shadow-lg bg-gradient-to-t from-cyan-500 to-transparent bg-opacity-10">
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
            <option value="Europe">Europe</option>
            <option value="Asia">Asia</option>
            <option value="Africa">Africa</option>
            <option value="America">America</option>
          </select>
        </div>

        <button className="w-fit ml-auto px-4 py-2 rounded-md bg-gradient-to-r from-blue-500 to-blue-950 text-white transition-all hover:opacity-90 font-medium ">
          Add player
        </button>
      </div>
    </div>
  );
}

export default PlayersAddForm;

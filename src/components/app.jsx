import PlayersAddForm from "./players-add-form";
import PlayersFilter from "./players-filter";
import PlayersList from "./players-list";

const App = () => {
  return (
    <div className="w-full min-h-screen relative app">
      <div className="absolute inset-0 bg-black/80 blur-3xl z-10" />

      <div className="container max-w-6xl mx-auto h-full z-50 relative py-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg-gap-1 px-6">
        <PlayersList className="row-start-2 col-start-1 col-end-3 lg:row-start-1 lg:col-start-1 lg:col-end-2" />
        <div className="row-start-1 col-start-1 col-end-3 lg:row-start-1 lg:col-start-2 lg:col-end-3">
          <PlayersAddForm />
          <PlayersFilter />
        </div>
      </div>
    </div>
  );
};

export default App;

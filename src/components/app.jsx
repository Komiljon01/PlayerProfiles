import PlayersAddForm from "./players-add-form";
import PlayersFilter from "./players-filter";
import PlayersList from "./players-list";

const App = () => {
  return (
    <div className="w-full min-h-screen relative app">
      <div className="absolute inset-0 bg-black/80 blur-3xl z-10" />

      <div className="container max-w-6xl mx-auto h-full z-50 relative py-12 grid grid-cols-2 gap-4">
        <PlayersList />
        <div>
          <PlayersAddForm />
          <PlayersFilter />
        </div>
      </div>
    </div>
  );
};

export default App;

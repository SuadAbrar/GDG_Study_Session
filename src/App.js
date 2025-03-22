import React from "react";
import "./App.css";
import GroupList from "./component/GroupList";
import UserCard from "./component/UserCard";
import Counter from "./component/Counter";
import TaskManagement from "./component/TaskManagement";
import LiveSearch from "./component/LiveSearch";
import CharacterCounter from "./component/CharacterCounter";
import FetchMovie from "./component/FetchMovie";
import MovieWatchlist from "./component/MovieWatchlist";

function App() {
  return (
    <div className="App">
      <GroupList />
      <h2>User Card</h2>
      <UserCard
        name="Selam Daniel"
        email="selam.daniel@example.com"
        age={30}
        backgroundColor="#ecc3c3"
      />
      <UserCard name="Abebe Biru" email="abebe.biru@example.com" age={34} />
      <Counter />
      <TaskManagement />
      <LiveSearch />
      <CharacterCounter />
      <FetchMovie />
      <MovieWatchlist />
    </div>
  );
}
export default App;

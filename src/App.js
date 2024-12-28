import React from "react";
import GroupList from "./GroupList";
import UserCard from "./UserCard";

function App() {
  return (
    <div>
      <h2>Welcome to the Group List</h2>
      <GroupList />
      <h2>User Card</h2>
      <UserCard
        name="Selam Daniel"
        email="selam.daniel@example.com"
        age={30}
        backgroundColor="#ecc3c3"
      />
      <UserCard name="Abebe Biru" email="abebe.biru@example.com" age={34} />
    </div>
  );
}
export default App;

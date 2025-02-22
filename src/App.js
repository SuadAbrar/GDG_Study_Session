import React from "react";
import GroupList from "./component/GroupList";
import UserCard from "./component/UserCard";
import Counter from "./component/Counter";
import TaskManagement from "./component/TaskManagement";

function App() {
  return (
    <div>
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
    </div>
  );
}
export default App;

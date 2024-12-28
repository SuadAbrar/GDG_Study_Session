import React from "react";

const GroupList = () => {
  const groupMembers = ["Abebe", "Daniel", "Rediet", "Biruk"];
  return (
    <div>
      <h2>Group Members</h2>
      <ul>
        {/* <li>{groupMembers[0]}</li>
        <li>{groupMembers[1]}</li>
        <li>{groupMembers[2]}</li>
        <li>{groupMembers[3]}</li> */}
        {groupMembers.map((member, index) => (
          <li key={index}>{member}</li>
        ))}
      </ul>
    </div>
  );
};

export default GroupList;

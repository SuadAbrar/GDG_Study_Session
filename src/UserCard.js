import React from "react";
import "./UserCard.css";

function UserCard({ name, email, age, backgroundColor }) {
  const Style = {
    backgroundColor: backgroundColor || "#fff",
  };
  return (
    <div className="user-card" style={Style}>
      <h2>{name}</h2>
      <p>Email: {email}</p>
      <p>Age: {age}</p>
    </div>
  );
}
export default UserCard;

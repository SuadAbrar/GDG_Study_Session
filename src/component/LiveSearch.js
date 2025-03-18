import { useState, useEffect, useMemo, useCallback } from "react";

const LiveSearch = () => {
  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const filteredUsers = useMemo(
    () =>
      users.filter((user) =>
        user.name.toLowerCase().includes(query.toLowerCase())
      ),
    [query, users]
  );

  const handleSearch = useCallback((e) => {
    setQuery(e.target.value);
  }, []);

  return (
    <div>
      <h2>LiveSearch</h2>
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Search Users"
      />
      <ul>
        {filteredUsers.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default LiveSearch;

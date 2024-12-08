// Commit
import { useEffect, useState } from "react";
import data from "../../static.json";

const { users } = data;

export default function UsersList() {
  const [selectedUser, setSelectedUser] = useState(null);

  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch("http://localhost:3002/users");

        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }

        const data = await response.json();
        setUsers(data.users);
        console.log(data.name);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      {isLoading ? (
        <p>Loading users... </p>
      ) : error ? (
        <p>Error : {error}</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li
              key={user.id}
              className={`${user === selectedUser ? "selected" : null}`}
            >
              <button
                className={`btn ${user === selectedUser ? "select" : null}`}
                onClick={() => handleUserClick(user)}
              >
                {user.name}
              </button>
            </li>
          ))}
        </ul>
      )}

      {selectedUser && (
        <div>
          <h2>{selectedUser.name}</h2>
          <p>{selectedUser.notes}</p>
        </div>
      )}
    </div>
  );
}

import { useState } from "react";
import data from "../../static.json";

const { users } = data;

export default function UsersList() {
  const [selectedUser, setSelectedUser] = useState(null);

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
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

      {selectedUser && (
        <div>
          <h2>{selectedUser.name}</h2>
          <p>{selectedUser.notes}</p>
        </div>
      )}
    </div>
  );
}

import { useState } from "react";
import data from "../../static.json";

const { users } = data;

export default function UsersList() {
  const [userIndex, setUserIndex] = useState(1);
  const selectedUser = users[userIndex];

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <ul className="users-list">
        {users.map((user, i) => (
          <li key={user.id}>
            <button
              className={userIndex === i ? "selected" : null}
              onClick={() => setUserIndex(i)}
            >
              {user.name}
            </button>
          </li>
        ))}
      </ul>

      <div>
        {selectedUser && (
          <>
            <h1>{selectedUser.name} </h1>
            <p>{selectedUser.title}</p>
            <p>{selectedUser.notes}</p>
          </>
        )}
      </div>
    </div>
  );
}

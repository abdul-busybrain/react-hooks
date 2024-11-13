import data from "../../static.json";

const { users } = data;

export default function UsersList() {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

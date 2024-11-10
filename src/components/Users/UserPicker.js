import data from "../../static.json";

const { users } = data;

export default function UserPicker() {
  return (
    <select>
      <option>Users</option>
      {users.map((user) => (
        <option key={user.id}>{user.name}</option>
      ))}
    </select>
  );
}

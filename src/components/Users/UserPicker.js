import { useEffect, useState } from "react";
import data from "../../static.json";
import { ClipLoader } from "react-spinners";

const { users } = data;

export default function UserPicker() {
  const [users, setUsers] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:3002/users`)
      .then((resp) => resp.json())
      .then((data) => setUsers(data));
  }, []);

  if (users === null)
    return <ClipLoader color="#36d7b7" loading={true} size={30} />;

  return (
    <select>
      <option>Users</option>
      {users.map((u) => (
        <option key={u.id}>{u.name}</option>
      ))}
    </select>
  );
}

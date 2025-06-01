import { Button } from "@/components/ui/button";
import Search from "./search";
import { useCallback, useState } from "react";

const shuffle = (array: string[]) => {
  return array
    .map((a) => ({ sort: Math.random(), value: a }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value);
};

const filterUsers = ["arkar", "karkar", "lin", "john", "man"];
const UseCallback = () => {
  const [users, setUsers] = useState(filterUsers);

  const searchUser = useCallback((search: string) => {
    const filtered = filterUsers.filter((user) => user.includes(search));
    setUsers(filtered);
  }, []);
  return (
    <div className="w-full h-dvh flex justify-center items-center">
      <div>
        <div className="flex items-center space-x-4">
          <Button onClick={() => setUsers(shuffle(filterUsers))}>
            Shuffle
          </Button>
          <Search searchUser={searchUser} />
        </div>
        <ul>
          {users.map((user, i) => (
            <li key={i}>{user}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UseCallback;

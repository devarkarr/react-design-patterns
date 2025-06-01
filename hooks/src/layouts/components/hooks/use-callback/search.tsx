import { Input } from "@/components/ui/input";
import { memo } from "react";

interface SearchProps {
  searchUser: (search: string) => void;
}
const Search = memo(({ searchUser }: SearchProps) => {
  console.log("search");
  return (
    <Input
      onChange={(e) => searchUser(e.target.value)}
      placeholder="Search users..."
    />
  );
});

export default Search;

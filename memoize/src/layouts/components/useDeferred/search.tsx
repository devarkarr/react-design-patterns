import { Suspense, use, useDeferredValue, useState } from "react";
import { fetchData } from "./data";

export default function Search() {
  const [search, setSearch] = useState("");
  const deferredSearch = useDeferredValue(search);

  return (
    <>
      <label>
        Search albums:
        <input value={search} onChange={(e) => setSearch(e.target.value)} />
      </label>
      <Suspense fallback={<h2>Loading...</h2>}>
        <SearchResults search={deferredSearch} />
      </Suspense>
    </>
  );
}

interface SearchResultsProps {
  search: string | undefined;
}

const SearchResults = ({ search }: SearchResultsProps) => {
  if (search === "") {
    return null;
  }
  const albums = use(fetchData(`/search?q=${search}`));
  if (albums?.length === 0) {
    return (
      <p>
        No matches for <i>"{search}"</i>
      </p>
    );
  }
  return (
    <ul>
      {albums.map((album) => (
        <li key={album.id}>
          {album.title} ({album.year})
        </li>
      ))}
    </ul>
  );
};

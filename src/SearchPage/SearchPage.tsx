import { useState } from "react";


import ResultsBox from "./ResultsBox.tsx"
import SearchBar from "./SearchBar.tsx";


export default function SearchPage() {
  const [query, setQuery] = useState("");
  return (
    <>
      <SearchBar query={query} onQueryChange={setQuery} />
      <ResultsBox query={query} visibility={query.startsWith(";b")}/>
    </>
  );
}

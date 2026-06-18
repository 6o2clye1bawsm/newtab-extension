import { useState } from "react";

import styles from "./index.module.css"; 
import moduleStyles from "./App.module.css";

import BookmarksBox from "./components/ResultsBox.tsx"
import SearchBar from "./components/SearchBar.tsx";

function SearchPage() {
  const [query, setQuery] = useState("");
  return (
    <>
      <SearchBar query={query} onQueryChange={setQuery} />
      <BookmarksBox query={query} visibility={query.startsWith(";b")}/>
    </>
  );
}

export default function App() {
  return (
    <div className={styles.root}>
      <div className={moduleStyles.controlsWrap}>
        <SearchPage />
{/*         <SearchBar />
        <BookmarksBox visibility={query.startsWith(";b")}/> */}
      </div>
    </div>
  );
}

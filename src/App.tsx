import { useState } from "react";
import styles from "./index.module.css"; 
import moduleStyles from "./App.module.css";
import BookmarksBox from "./BookmarksBox.tsx"

export default function App() {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    window.location.href = `https://google.com/search?q=${encodeURIComponent(query)}`;
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };


  const roundingClass = query.startsWith(';b')
    ? moduleStyles.unrounded
    : moduleStyles.rounded;

  return (
    <div className={styles.root}>
      <div className={moduleStyles.controlsWrap}>
        <div className={`${moduleStyles.searchBar} ${roundingClass}`}>
          <input
            autoFocus
            className={moduleStyles.input}
            placeholder="输入要搜索的内容"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button onClick={handleSearch} className={moduleStyles.button}>
            搜索
          </button>
        </div>
        <BookmarksBox visibility={query.startsWith(";b")}/>
      </div>
    </div>
  );
}

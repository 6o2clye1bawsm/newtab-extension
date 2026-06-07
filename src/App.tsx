import { useState } from "react";
import styles from "./index.module.css"; 
import moduleStyles from "./App.module.css";

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

  // Determine visibility modifier class
  const visibilityClass = query.startsWith(';b') 
    ? moduleStyles.visible 
    : moduleStyles.hidden;

  return (
    <div className={styles.root}>
      <div className={moduleStyles.controlsWrap}>
        <div className={moduleStyles.searchBar}>
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
        <div className={`${moduleStyles.bookmarks} ${visibilityClass}`} />
      </div>
    </div>
  );
}

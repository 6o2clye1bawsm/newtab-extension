import { useState } from "react";
import styles from "./index.module.css"; 
import moduleStyles from "./App.module.css";

export default function App() {
  const [query, setQuery] = useState("");

  const search = () => {
    window.location.href =
      "https://www.google.com/search?q=" +
      encodeURIComponent(query);
  };

  return (
    <div className={styles.root}>
      <div className={moduleStyles.searchBar}>
        <input
          autoFocus
          className={moduleStyles.input}
          placeholder="输入要搜索的内容"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => {
              if (e.key === "Enter") {
                search();
            }}
          }
        />
        <button
        onClick={search}
        className={moduleStyles.button}
        >
          搜索
        </button>
      </div>
      <div></div>
      <div></div>
    </div>
  );
}

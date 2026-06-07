import { useState } from "react";
import styles from "./index.module.css"; 
import moduleStyles from "./App.module.css";
import clsx from "clsx";

export default function App() {
  const [query, setQuery] = useState("");

  const search = () => {
    window.location.href =
      "https://www.google.com/search?q=" +
      encodeURIComponent(query);
  };

  return (
    <div className={styles.root}>
      <div style={{height: 'calc(5% + 7rem)'}}></div>
      <div className={moduleStyles.controlsWrap}>
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
        <div className={clsx(moduleStyles.bookmarks, query.startsWith(';b') ? moduleStyles.visible : moduleStyles.hidden)}>
            
        </div>
      </div>
      <div></div>
    </div>
  );
}

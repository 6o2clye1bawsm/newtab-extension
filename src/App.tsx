import styles from "./index.module.css"; 
import moduleStyles from "./App.module.css";

import SearchPage from "./SearchPage/SearchPage.tsx"
import Canvas from "./Canvas/Canvas.tsx";

export default function App() {
  return (
    <div className={styles.root}>
      <div className={moduleStyles.controlsWrap}>
        <SearchPage />
      </div>
      <Canvas />
    </div>
  );
}

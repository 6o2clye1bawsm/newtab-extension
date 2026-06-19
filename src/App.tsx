import styles from './index.module.css';
import moduleStyles from './App.module.css';

import SearchPage from './SearchPage/SearchPage.tsx';
import Canvas from './Canvas/Canvas.tsx';

export default function App() {
  return (
    <div className={styles.root}>
      <div className={moduleStyles.controlsWrap}>
        <SearchPage />
      </div>
      <Canvas
        draw={(ctx) => {
          ctx.fillStyle = 'red';
          ctx.fillRect(10, 10, 50, 50);

          ctx.fillStyle = 'rgba(50, 241, 226, 0.5)';
          ctx.fillText('hello', 30, 30, 20);
          ctx.fillRect(30, 30, 50, 50);
        }}
      />
    </div>
  );
}

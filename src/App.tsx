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
        height={1500}
        width={2500}
        style={{ width: '250px', height: '150px', imageRendering: 'pixelated' }}
        draw={(ctx) => {
          const { width, height } = ctx.canvas;
          ctx.clearRect(0, 0, width, height);

          ctx.strokeStyle = 'red';
          ctx.fillStyle = 'red';
          ctx.moveTo(120, 100);
          ctx.lineTo(400, 150);
          ctx.lineTo(350, 430);
          ctx.lineTo(70, 380);
          ctx.closePath();
          ctx.fill();
        }}
      />
    </div>
  );
}

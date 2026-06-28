import { useEffect, useRef } from 'react';

import canvasStyles from './Canvas.module.css';

interface CanvasProps extends React.CanvasHTMLAttributes<HTMLCanvasElement> {
  draw: (ctx: CanvasRenderingContext2D) => void;
  width?: number;
  height?: number;
}

export default function Canvas({ draw, width, height, style }: CanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    draw(ctx);
  }, [draw]);

  return (
    <canvas
      width={width}
      height={height}
      ref={canvasRef}
      className={canvasStyles.canvas}
      style={style}
    ></canvas>
  );
}

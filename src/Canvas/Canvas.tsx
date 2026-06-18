import { useEffect, useRef } from "react";

import canvasStyles from "./Canvas.module.css"

interface CanvasProps {
    draw: (ctx: CanvasRenderingContext2D) => void;
    width?: number;
    height?: number;
}

export default function Canvas({draw, width=300, height=150}: CanvasProps)
{
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        
        draw(ctx);
    }, [draw]);

    return (
        <canvas
        ref={canvasRef}
        width={width}
        height={height}
        className={canvasStyles.canvas}>
        </canvas>
    );
}

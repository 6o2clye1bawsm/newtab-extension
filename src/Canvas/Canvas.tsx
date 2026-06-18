import canvasStyles from "./Canvas.module.css"

export default function Canvas() {
    
    return (
        <canvas width={150} height={150} className={canvasStyles.canvas}></canvas>
    );
}

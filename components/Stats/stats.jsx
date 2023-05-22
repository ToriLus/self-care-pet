"use client";
import { useEffect, useRef } from "react";

export default function Stats() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    ctx.fillStyle = "red";
    ctx.fillRect(0, 25, 250, 20);

    ctx.fillStyle = "blue";
    ctx.fillRect(0, 50, 100, 20);
  }, []);

  return <canvas id="status-bar" ref={canvasRef} />;
}

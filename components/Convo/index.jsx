"use client";
import { useRef, useEffect } from "react";

export default function Canvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    // Load the image
    const image = new Image();
    image.src = "/gible.png";

    // Draw the image on the canvas once it's loaded
    image.onload = () => {
      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;

      // Calculate the desired size of the image inside the canvas
      const desiredWidth = canvasWidth * 0.8;
      const desiredHeight = (desiredWidth / image.width) * image.height;

      // Draw the image on the canvas with the desired dimensions
      context.drawImage(image, 0, 0, desiredWidth, desiredHeight);
    };

    image.onerror = () => {
      console.error("Failed to load the image.");
    };
  }, []);

  return <canvas ref={canvasRef} height={"600px"} width={"600px"} />;
}

"use client";
import { useEffect, useRef, useState } from "react";
import { ChromePicker } from "react-color";

export default function Canvas() {
  const canvasRef = useRef(null);

  const [color, setColor] = useState("#000");

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    // Load the image
    const image = new Image();
    image.src = "/separate_layers/rp_torso.png";
    const secondImage = new Image();
    secondImage.src = "/separate_layers/rp_tail.png";

    // Draw the image on the canvas once it's loaded
    image.onload = () => {
      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;

      // Calculate the desired size of the image inside the canvas
      const desiredWidth = canvasWidth * 0.8;
      const desiredHeight = (desiredWidth / image.width) * image.height;

      // Draw the image on the canvas with the desired dimensions
      context.drawImage(secondImage, 0, 0, desiredWidth, desiredHeight);
      context.drawImage(image, 0, 0, desiredWidth, desiredHeight);
    };

    image.onerror = () => {
      console.error("Failed to load the image.");
    };
  }, []);

  return (
    <div>
      <ChromePicker color={color} onChange={(e) => setColor(e.hex)} />
      <canvas ref={canvasRef} height={"600px"} width={"600px"} />
    </div>
  );
}

"use client";
import { useEffect, useRef, useState } from "react";
import { ChromePicker } from "react-color";

export default function Canvas() {
  const canvasRef = useRef(null);

  const [color, setColor] = useState("#000");

  const imagesArray = [
    "/separate_layers/rp_torso.png",
    "/separate_layers/head_color.png",
    "/separate_layers/head_outline.png",
    "/separate_layers/ears_down_brown.png",
    "/separate_layers/ears_down_outline.png",
    "/separate_layers/ears_down_shadow.png",
    "/separate_layers/rp_eyes.png",
    "/separate_layers/rp_tail.png",
    "/separate_layers/rp_tail.png",
    "/separate_layers/rp_tail.png",
    "/separate_layers/rp_tail.png",

    ,
    ,
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    // Load the image

    imagesArray.map((source) => {
      const image = new Image();
      image.src = source;

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
    });
  });

  return (
    <div className="customDiv">
      <canvas
        className="colorCanvas"
        ref={canvasRef}
        height={"300px"}
        width={"300px"}
      />
      <ul className="buttonContainer">
        {imagesArray.map((source) => {
          return (
            <li key={source} className="buttons-parts">
              <button
                className="partClass"
                style={{ backgroundImage: `url(${source})` }}
              ></button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

"use client";
import { useEffect, useRef, useState } from "react";
import { ChromePicker } from "react-color";

export default function Canvas() {
  const canvasRef = useRef(null);

  const [color, setColor] = useState("#000");

  const imagesArray = [
    "/vectorised/tail_base.svg",

    "/vectorised/tail_stripes.svg",

    "/vectorised/left_foot.svg",
    "/vectorised/right_foot.svg",
    "/vectorised/ears_half_white.svg",
    "/vectorised/ears_half_brown.svg",

    "/separate_layers/ears_half_outline.png",
    "/separate_layers/ears_half_shadow.png",

    "/separate_layers/left_foot_outline.png",
    "/separate_layers/left_foot_shadow.png",

    "/separate_layers/right_foot_outline.png",
    "/separate_layers/right_foot_shadow.png",
    "/separate_layers/tail_outline.png",
    "/separate_layers/tail_shadow.png",
    //right hand

    "/vectorised/right_hand.svg",
    "/vectorised/right_paw.svg",
    "/separate_layers/right_hand_shadow.png",
    "/separate_layers/right_hand_outline.png",
    //left hand

    "/vectorised/left_hand.svg",
    "/vectorised/left_paw.svg",

    "/separate_layers/left_hand_shadow.png",
    "/separate_layers/left_hand_outline.png",
    //torso
    "/vectorised/torso_col.svg",
    "/vectorised/torso_white.svg",
    "/separate_layers/torso_shadow.png",
    "/separate_layers/torso_outline.png",

    //head and mouth
    "/vectorised/head_col.svg",
    "/vectorised/head_white.svg",
    "/separate_layers/head_outline.png",
    "/separate_layers/head_shadow.png",
    "/separate_layers/mouth.png",
    "/separate_layers/nose.png",
    "/separate_layers/eyes.png",
  ];

  useEffect(() => {
    // Load the image

    imagesArray.map((source) => {
      const image = new Image();
      image.src = source;
    });
  });

  return (
    <div className="image-container">
      {imagesArray.map((source) => {
        return <img src={source} className="animalParts" />;
      })}
    </div>
  );
}

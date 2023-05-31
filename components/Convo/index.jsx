"use client";
import { useEffect, useRef, useState } from "react";
import { ChromePicker, BlockPicker, SketchPicker } from "react-color";
import { ReactSVG } from "react-svg";

export default function Canvas() {
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

  const classArray = [
    'class="earsHalfBrown"',
    'class="earsHalfWhite"',
    'class="headCol"',
    'class="headWhite"',
    'class="leftFoot"',
    'class="leftHand"',
    'class="leftPaw"',
    'class="rightFoot"',
    'class="rightHand"',
    'class="rightPaw"',
    'class="tailBase"',
    'class="tailStripes"',
    'class="torsoCol"',
    'class="torsoWhite"',
  ];
  useEffect(() => {
    // Load the image

    imagesArray.map((source) => {
      const image = new Image();
      image.src = source;
    });
  });

  function changeColor() {
    return "";
  }

  return (
    <>
      <div className="animalContainer">
        {imagesArray.map((source) => {
          if (source.endsWith(".svg")) {
            return (
              <ReactSVG key={source} src={source} className="animalParts" />
            );
          } else {
            return <img key={source} src={source} className="animalParts" />;
          }
        })}
      </div>
      <div className="buttonContainer">
        {imagesArray.map((source) => {
          if (source.endsWith(".svg")) {
            return (
              <button key={source} className="animalButton">
                <img
                  alt="body part of the animal"
                  key={source}
                  src={source}
                  className="animalButtonPicture"
                />
              </button>
            );
          } else return;
        })}
      </div>
      <SketchPicker
        className="colorPicker"
        color={color}
        onChange={(e) => setColor(e.hex)}
      />
    </>
  );
}

/*

class="earsHalfBrown"
class="earsHalfWhite" 
class="headCol"
class="headWhite"
class="leftFoot"
class="leftHand"
class="leftPaw"
class="rightFoot"
class="rightHand"
class="rightPaw"
class="tailBase"
class="tailStripes"
class="torsoCol"
class="torsoWhite"

*/

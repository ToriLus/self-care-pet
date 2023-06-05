"use client";
import { useEffect, useRef, useState } from "react";
import { CompactPicker } from "react-color";
import { ReactSVG } from "react-svg";

import useLocalStorageState from "use-local-storage-state";

export default function Canvas() {
  const [color, setColor] = useState("#000");
  const imagesArray = [
    "/vectorised/tail_base.svg",

    "/vectorised/tail_stripes.svg",

    "/vectorised/ears_half_white.svg",
    "/vectorised/ears_half_brown.svg",

    "/separate_layers/ears_half_shadow.png",

    "/separate_layers/tail_shadow.png",
    //right hand

    "/vectorised/right_hand.svg",
    "/vectorised/right_paw.svg",
    "/separate_layers/right_hand_shadow.png",

    //left hand

    "/vectorised/left_hand.svg",
    "/vectorised/left_paw.svg",

    "/separate_layers/left_hand_shadow.png",

    //torso
    "/vectorised/torso_col.svg",
    "/vectorised/torso_white.svg",
    "/separate_layers/torso_shadow.png",

    //head and mouth
    "/vectorised/head_col.svg",
    "/vectorised/head_white.svg",

    "/separate_layers/head_shadow.png",
    "/separate_layers/mouth.png",
    "/separate_layers/nose.png",
    "/separate_layers/eyes.png",
    "/vectorised/left_foot.svg",
    "/vectorised/right_foot.svg",
    "vectorised/outline3.svg",
    "/separate_layers/left_foot_shadow.png",
    "/separate_layers/right_foot_shadow.png",
  ];

  const classArray = [
    { class: ".earsHalfBrown", showing: "inner ear" },
    { class: ".earsHalfWhite", showing: "outer ear" },
    { class: ".headCol", showing: "head" },
    { class: ".headWhite", showing: "head marks" },
    { class: ".leftFoot", showing: "left foot" },
    { class: ".leftHand", showing: "left hand" },
    { class: ".leftPaw", showing: "left paw" },
    { class: ".rightFoot", showing: "right foot" },
    { class: ".rightHand", showing: "right hand" },
    { class: ".rightPaw", showing: "right paw" },
    { class: ".tailBase", showing: "tail base" },
    { class: ".tailStripes", showing: "tail stripes" },
    { class: ".torsoCol", showing: "torso" },
    { class: ".torsoWhite", showing: "belly" },
  ];
  useEffect(() => {
    imagesArray.map((source) => {
      const image = new Image();
      image.src = source;
    });
  });

  const colorPickerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);
  const [parameter, setParameter] = useState(".torsoWhite");
  const [pandaColors, setPandaColors] = useLocalStorageState("panda-colors", {
    defaultValue: {},
  });

  const toggleVisibility = (parameter) => {
    setIsVisible(!isVisible);
    setParameter(parameter);
  };

  localStorage.getItem("panda-colors");

  return (
    <div className="generalContainer">
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
        {classArray.map((source) => {
          return (
            <button
              key={source.class}
              className="animalButton"
              onClick={() => toggleVisibility(source.class)}
            >
              {source.showing}
            </button>
          );
        })}
      </div>
      <div className="pickerContainer">
        <CompactPicker
          ref={colorPickerRef}
          onChange={(e) => {
            const newColor = e.hex;
            setColor(e.hex);
            const svgElements = document.querySelectorAll(parameter);
            console.log(newColor, color);
            svgElements.forEach((svgElement) => {
              svgElement.style.fill = newColor;
              const colors = pandaColors;
              colors[svgElement.className.baseVal] = newColor;
              setPandaColors(colors);
              console.log(svgElement.className.baseVal, newColor);

              console.log(pandaColors);
            });
          }}
        />
      </div>
    </div>
  );
}

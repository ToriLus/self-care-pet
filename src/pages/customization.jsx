"use client";
import { useEffect, useRef, useState } from "react";
import { CompactPicker } from "react-color";
import { ReactSVG } from "react-svg";

import ImageCustom from "../../components/ImageCustom";
import useLocalStorageState from "react-use-localstorage";

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

  const colorPickerRef = useRef(null);

  const [parameter, setParameter] = useState(".torsoWhite");

  const [pandaColors, setPandaColors] = useLocalStorageState("panda-colors", {
    defaultValue: {},
  });

  const jsonPandaColors = JSON.parse(localStorage.getItem("panda-colors"));

  const toggleVisibility = (parameter) => {
    setParameter(parameter);
  };

  return (
    <div className="generalContainer">
      <ImageCustom />
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
          onload={Object.keys(jsonPandaColors).forEach((key) => {
            const savedElements = document.querySelectorAll(`.${key}`);
            savedElements.forEach((element) => {
              element.style.fill = jsonPandaColors[key];
              console.log(
                "this is key",
                jsonPandaColors[key],
                "oh my god:",
                element.style
              );
            });

            console.log(key, parameter);
          })}
          onChange={(e) => {
            const newColor = e.hex;
            setColor(e.hex);
            const svgElements = document.querySelectorAll(parameter);

            svgElements.forEach((svgElement) => {
              svgElement.style.fill = newColor;
              const colors = { ...pandaColors };
              colors[svgElement.className.baseVal] = newColor;
              setPandaColors(colors);
            });
          }}
        />
      </div>
    </div>
  );
}

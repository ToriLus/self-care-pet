"use client";
import { useEffect, useRef, useState } from "react";
import { CompactPicker } from "react-color";
import { ReactSVG } from "react-svg";

import useLocalStorageState from "use-local-storage-state";

export default function ImageCustom() {
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

  return (
    <div className="animalContainer">
      {imagesArray.map((source) => {
        if (source.endsWith(".svg")) {
          return <ReactSVG key={source} src={source} className="animalParts" />;
        } else {
          return <img key={source} src={source} className="animalParts" />;
        }
      })}
    </div>
  );
}

"use client";
import Image from "next/image";
import { useState } from "react";
import React, { useRef } from "react";
import styled, { keyframes, css } from "styled-components";

export default function PetImage() {
  //for shaking the image
  const moveImageAnimation = keyframes`
  0% { transform: translate(1px, 1px) rotate(0deg); }
  10% { transform: translate(-1px, -3px) rotate(-2deg); }
  20% { transform: translate(-3px, 30px) rotate(2deg); }
  30% { transform: translate(3px, 20px) rotate(1deg); }
  40% { transform: translate(1px, -10px) rotate(2deg); }
  50% { transform: translate(-1px, 20px) rotate(-2deg); }
  60% { transform: translate(-3px, 10px) rotate(1deg); }
  70% { transform: translate(3px, 10px) rotate(-2deg); }
  80% { transform: translate(-1px, -10px) rotate(2deg); }
  90% { transform: translate(1px, 20px) rotate(1deg); }
  100% { transform: translate(1px, -20px) rotate(-2deg); }
  }
`;
  //use state for the source
  const [src, setSrc] = useState("/gible.png");

  const AnimatedImage = styled.img`
    ${({ isAnimating }) =>
      isAnimating &&
      css`
        animation: ${moveImageAnimation} 5s ease;
      `}
  `;

  const [isAnimating, setIsAnimating] = useState(false);
  // const imageRef = useRef(null);

  const imageClick = () => {
    setIsAnimating(true);

    setTimeout(() => {
      setIsAnimating(false);
    }, 5000);

    if (src == "/gible.png") {
      setSrc("/shiny-gible.png");
    } else {
      setSrc("/gible.png");
    }
  };

  return (
    <>
      <AnimatedImage
        //ref={imageRef}
        src={src}
        width={250}
        height={250}
        alt="pic"
        onClick={imageClick}
        isAnimating={isAnimating}
      />
    </>
  );
}

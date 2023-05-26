"use client";
import { useState } from "react";
import Image from "next/image";

export default function Button(text, actionImage) {
  const inside = text.text;
  const src = `/${text.actionImage}.png`;
  const [isImageVisible, setIsImageVisible] = useState(false);

  const handleButtonClick = () => {
    setIsImageVisible(true);

    setTimeout(() => {
      setIsImageVisible(false);
    }, 3000);
    console.log(inside, actionImage, text);
  };

  return (
    <>
      {isImageVisible && (
        <div className="alert-container">
          <Image
            className="eating-image"
            src={src}
            width={50}
            height={50}
            alt="pic"
          />
        </div>
      )}
      <button onClick={handleButtonClick}>
        {" "}
        <Image height={50} width={50} src={src} alt={`${inside}`} />
      </button>
    </>
  );
}

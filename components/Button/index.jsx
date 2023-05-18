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
      <button onClick={handleButtonClick}>{inside}</button>
      {isImageVisible && (
        <div className="alert-container">
          <Image src={src} width={50} height={50} alt="pic" />
        </div>
      )}
    </>
  );
}

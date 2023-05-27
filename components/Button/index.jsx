"use client";
import { useState } from "react";
import Image from "next/image";

export default function Button(text, actionImage) {
  const src = `/${text.actionImage}.png`;
  const [eatText, setEatText] = useState("text");
  const textContainer = {
    food: [
      "That's so tasty. What are you having for dinner?",
      "Did you remember to eat today?",
      "That's delicious! You should also get a snack!",
      "Oh gods! is this a carrot again? If I'm eating healthy, you need to do it, too.",
      "Bon Apetit!",
      "Did you know that brain works better when fed?",
      "something something something",
      "Smart text",
      "very smart text",
      "yet another",
      "hit me baby one more time",
    ],
    drink: [
      "That's so tasty. What are you having for dinner?",
      "Did you remember to eat today?",
      "That's delicious! You should also get a snack!",
      "Oh gods! is this a carrot again? If I'm eating healthy, you need to do it, too.",
      "Bon Apetit!",
      "Did you know that brain works better when fed?",
      "something something something",
      "Smart text",
      "very smart text",
      "yet another",
      "hit me baby one more time",
    ],
  };

  let x = Math.round(Math.random() * 10);

  console.log(src, x);
  const handleButtonClick = () => {
    setIsImageVisible(true);

    setTimeout(() => {
      setIsImageVisible(false);
    }, 3000);

    if (src == "/food.png") {
      setEatText(textContainer.food[x]);
    } else {
      setEatText(textContainer.drink[x]);
    }
  };

  const inside = text.text;

  const [isImageVisible, setIsImageVisible] = useState(false);

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
          <h2 className="poping-text">{`${eatText}`}</h2>
        </div>
      )}
      <button onClick={handleButtonClick}>
        <Image
          height={20}
          width={50}
          className={"food-butt-img"}
          src={src}
          alt={`${inside}`}
        />
      </button>
    </>
  );
}

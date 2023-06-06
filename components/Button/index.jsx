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
      "Let's dig in!",
      "What a scrumptious meal. What did you have for breakfast?",
      "Aren't you hungry, too?",
      "Did you know that pandas eat up to 40kg a day? That's slightly more then humans.",
      "Grab a snack!",
    ],
    drink: [
      "Drinking water increases your energy! Go grab a glass!",
      "Flush out your toxins, too!",
      "Drinking only coffee is not sustainable, yanno?",
      "It's summer. Grab something to drink.",
      "Bon Apetit!",
      "Did you know that brain works better when hydrated properly?",
      "You take care of my kidneys, but take care of yours, too.",
      "water is the true adult drink",
      "Thank you! You also grab a drink.",
      "Yet another",
      "One more for both of us!",
    ],
  };

  let x = Math.round(Math.random() * 10);

  const handleButtonClick = () => {
    setIsImageVisible(true);

    setTimeout(() => {
      setIsImageVisible(false);
    }, 4000);

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
      <div className="foodButtonContainer">
        <button onClick={handleButtonClick} className="foodButton">
          <Image
            height={20}
            width={50}
            className={"food-butt-img"}
            src={src}
            alt={`${inside}`}
          />
        </button>
      </div>
    </>
  );
}

"use client";
import { useEffect, useRef, useState } from "react";
import styled, { keyframes, css } from "styled-components";

export default function Stats(text, alien) {
  const [food, setFood] = useState(100);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFood((prevNums) => prevNums - 1);
    }, 360000);

    return () => {
      clearInterval(intervalId); // Cleanup the interval on component unmount
    };
  }, []);

  const [drink, setDrink] = useState(100);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDrink((prevNums) => prevNums - 1);
    }, 360000);

    return () => {
      clearInterval(intervalId); // Cleanup the interval on component unmount
    };
  }, []);

  const FoodStats = styled.div`
    width: ${food}%;
    background-color: #ffca42;
    font-size: small;
    border-radius: 25px;
    text-align: right;
    padding: 4px;
  `;

  const DrinkStats = styled.div`
    width: ${drink}%;
    background-color: #00d1ff;
    font-size: small;
    border-radius: 25px;
    text-align: right;
    padding: 4px;
  `;

  return (
    <>
      <div className="stats-container">
        <FoodStats>{`${food}%`}</FoodStats>
      </div>

      <div className="stats-container">
        <DrinkStats> {`${drink}%`}</DrinkStats>
      </div>
    </>
  );
}

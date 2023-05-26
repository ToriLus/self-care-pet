"use client";
import { useEffect, useRef, useState } from "react";
import styled, { keyframes, css } from "styled-components";

export default function Stats(text, alien) {
  const Container = styled.div`
    width: 100%; /* Full width */
    background-color: #ddd; /* Grey background */
    margin: 2%;
    border-radius: 25px;
  `;

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
      <Container>
        <FoodStats>{`   ${drink}%`}</FoodStats>
      </Container>

      <Container>
        <DrinkStats> {`   ${food}%`}</DrinkStats>
      </Container>
    </>
  );
}

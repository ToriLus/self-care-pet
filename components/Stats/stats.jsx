"use client";
import { useEffect, useRef, useState } from "react";
import styled, { keyframes, css } from "styled-components";

export default function Stats(text, alien) {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const extraDate = date.getDate();
  const mili = date.getTime();

  const x = "50%";

  console.log("First date");
  var first_date = new Date();
  var sec_date = new Date("2023-05-22T16:11:04.868Z");
  console.log(first_date);
  console.log("Second date");

  console.log(sec_date);
  var dif = Math.abs(sec_date - first_date);
  const d = dif / (1000 * 3600);
  console.log("Subtracting days");
  console.log("d = " + d);
  const rip = 100 - d;

  console.log(text, date, year, month, typeof date, extraDate, rip);

  const Container = styled.div`
    width: 100%; /* Full width */
    background-color: #ddd; /* Grey background */
    margin: 2%;
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
    background-color: #04aa6d;
    font-size: small;
  `;

  const DrinkStats = styled.div`
    width: ${drink}%;
    background-color: #04aa6d;
    font-size: small;
  `;

  return (
    <>
      <Container>
        <FoodStats> Food status</FoodStats>
      </Container>

      <Container>
        <DrinkStats> Hydration status</DrinkStats>
      </Container>
    </>
  );
}

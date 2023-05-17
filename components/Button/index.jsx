"use client";
export default function Button(text) {
  const inside = text.text;
  const click = () => {
    console.log(inside, text);
  };
  return <button onClick={click}>{inside}</button>;
}

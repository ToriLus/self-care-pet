import { useEffect } from "react";

export default function HandleButton() {
  useEffect(() => {
    const jsonPandaColors = JSON.parse(localStorage.getItem("panda-colors"));
    Object.keys(jsonPandaColors).forEach((key) => {
      const savedElements = document.querySelectorAll(`.${key}`);
      savedElements.forEach((element) => {
        element.style.fill = jsonPandaColors[key];
        console.log(
          "this is key",
          jsonPandaColors[key],
          "oh my god:",
          element.style
        );
      });
    });
  });
}

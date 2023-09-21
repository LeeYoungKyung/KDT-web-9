import { useState } from "react";

export default function Color() {
  const [color, setColor] = useState("black");

  const setRedColor = () => {
    setColor("red");
  };

  const setBlueColor = () => {
    setColor("blue");
  };

  const getText = () => {
    switch (color) {
      case "red":
        return "빨간색";
      case "blue":
        return "파란색";
      default:
        return "검정색";
    }
  };

  return (
    <div>
      <p style={{ color }}>{getText()}</p>
      <button onClick={setRedColor}>빨간색</button>
      <button onClick={setBlueColor}>파란색</button>
    </div>
  );
}

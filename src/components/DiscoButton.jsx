import { useState } from "react";

export const DiscoButton = () => {
  const colors = ["red", "green", "blue", "yellow", "purple", "orange"];
  const [color, setColor] = useState(colors);
  const [count, setCount] = useState(0);

  return (
    <div className="disco-button-container">
      <button
        style={{ backgroundColor: color }}
        className="disco-button"
        onClick={() => {
          setColor(colors[Math.floor(Math.random() * colors.length)]);
          setCount(count + 1);
        }}
      >
        {count} Like
      </button>
    </div>
  );
};

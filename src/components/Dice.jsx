import { useState } from "react";

export const Dice = () => {
  const randomDiceNumber = Math.floor(Math.random() * 6) + 1;
  const [dice, setDice] = useState(randomDiceNumber);

  const randomDice = () => {
    setDice(0);
    setTimeout(() => {
      setDice(randomDiceNumber);
    }, 1000);
  };

  return (
    <div onClick={randomDice}>
      <img
        className="dice"
        src={`/src/assets/images/dice${dice}.png`}
        alt="Dice"
      />
    </div>
  );
};

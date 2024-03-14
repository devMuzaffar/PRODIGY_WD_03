import { useContext, useState } from "react";
import "./SelectMode.css";
import { OpponentContext } from "../../context/OpponentContext";

const SelectMode = () => {
  const [isSelected, setIsSelected] = useState(false);
  const { setIsOpponent } = useContext(OpponentContext);

  const playAsPlayer = () => {
    setIsOpponent("player");
    setIsSelected(true);
  };

  const playAsEnemy = () => {
    setIsOpponent("enemy");
    setIsSelected(true);
  };

  return (
    <div className="selectMode" style={{ display: isSelected && "none" }}>
      <div className="selectTitle">
        <h2>Select Mode You Want To Play Against?</h2>
      </div>
      <div className="buttons">
        <button onClick={playAsPlayer}>Player 🤼</button>
        <button onClick={playAsEnemy}>Enemy 💻</button>
      </div>
    </div>
  );
};

export default SelectMode;

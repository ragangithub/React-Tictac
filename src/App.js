import "./App.css";
import { useState, useRef } from "react";

function App() {
  let [x, setX] = useState(true);
  let [board, setBoard] = useState(true);
  let [winner, setWinner] = useState();
  let turn = x ? "x" : "circle";
  const wins = useRef();
  const boardref = useRef();
  const combinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [0, 4, 8],
  ];

  function handleClick(e) {
    e.target.classList.add(`${x ? "x" : "circle"}`);
    if (checkWin(turn)) {
      setWinner(true);
    }
    if (checkDraw()) {
      setWinner(true);

      wins.current.innerText = "draw";
    }
    setX(!x);
    setBoard(!board);
  }
  function checkWin() {
    const buttons = [...boardref.current.children];

    return combinations.some((combination) => {
      return combination.every((item) => {
        return buttons[item].classList.contains(turn);
      });
    });
  }
  function checkDraw() {
    const buttons = [...document.querySelectorAll(".buttons")];
    return buttons.every((item) => {
      return item.classList.contains("x") || item.classList.contains("circle");
    });
  }

  return (
    <>
      <div ref={boardref} className={`board ${board ? "x" : "circle"}`}>
        <div className="buttons" onClick={handleClick}></div>
        <div className="buttons" onClick={handleClick}></div>
        <div className="buttons" onClick={handleClick}></div>
        <div className="buttons" onClick={handleClick}></div>
        <div className="buttons" onClick={handleClick}></div>
        <div className="buttons" onClick={handleClick}></div>
        <div className="buttons" onClick={handleClick}></div>
        <div className="buttons" onClick={handleClick}></div>
        <div className="buttons" onClick={handleClick}></div>
      </div>

      <div className={`winner ${winner ? "show" : "hide"}`}>
        <div ref={wins} className="wins">
          {x ? "circle" : "x"}'s winner
        </div>

        <div className="restart">Restart</div>
      </div>
    </>
  );
}

export default App;

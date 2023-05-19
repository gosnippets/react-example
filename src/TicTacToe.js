import { useState } from 'react';

const lines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2],
];

function TicTacToe() {
  const [user, setUser] = useState("X");
  const [winner, setWinner] = useState();
  const [userA, setUserA] = useState([]);
  const [userB, setUserB] = useState([]);

  const [btnDisabled, setBtnDisabled] = useState([]);
  const [btnValue, setBtnValue] = useState(['/', '/', '/', '/', '/', '/', '/', '/', '/']);


  const handleButton = (id) => {
    setBtnDisabled([...btnDisabled, id])
    btnValue[id - 1] = user
    setBtnValue(btnValue)
    console.log(id)

    if (user === "X") {
      setUserA([...userA, id - 1])
      setUser("O")
      if (checkWinner([...userA, id - 1])) {
        setWinner("Cross Is Winner")
        dissableAll();
      }
    } else {
      setUserB([...userB, id - 1])
      setUser("X")
      if (checkWinner([...userB, id - 1])) {
        setWinner("O is Winner")
        dissableAll();
      }
    }

  }

  const dissableAll = () => {
    setBtnDisabled([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  }

  const checkWinner = (user) => {
    for (let list of lines) {
      if(user.includes(list[0]) && user.includes(list[1]) && user.includes(list[2])){
        return true;
      }
    }
    return false;
  }

  const startGame = () => {
    setUser("X");
    setWinner([]);
    setUserA([]);
    setUserB([]);
    setBtnDisabled([]);
    setBtnValue(['/', '/', '/', '/', '/', '/', '/', '/', '/']);
  }

  return (<>
    <div><span data-testid="winner">{winner}</span></div>

    <div><button data-testid="start" onClick={startGame}>Start a new game</button></div>
    <div>
      <button data-testid="button-1" onClick={(e) => handleButton(1)} disabled={btnDisabled.includes(1)}>{btnValue[0]}</button>
      <button data-testid="button-2" onClick={(e) => handleButton(2)} disabled={btnDisabled.includes(2)}>{btnValue[1]}</button>
      <button data-testid="button-3" onClick={(e) => handleButton(3)} disabled={btnDisabled.includes(3)}>{btnValue[2]}</button>
    </div>
    <div>
      <button data-testid="button-4" onClick={(e) => handleButton(4)} disabled={btnDisabled.includes(4)}>{btnValue[3]}</button>
      <button data-testid="button-5" onClick={(e) => handleButton(5)} disabled={btnDisabled.includes(5)}>{btnValue[4]}</button>
      <button data-testid="button-6" onClick={(e) => handleButton(6)} disabled={btnDisabled.includes(6)}>{btnValue[5]}</button>
    </div>
    <div>
      <button data-testid="button-7" onClick={(e) => handleButton(7)} disabled={btnDisabled.includes(7)}>{btnValue[6]}</button>
      <button data-testid="button-8" onClick={(e) => handleButton(8)} disabled={btnDisabled.includes(8)}>{btnValue[7]}</button>
      <button data-testid="button-9" onClick={(e) => handleButton(9)} disabled={btnDisabled.includes(9)}>{btnValue[8]}</button>
    </div>
  </>
  )
}

export default TicTacToe;
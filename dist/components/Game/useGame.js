import {useState, useCallback, useEffect} from "../../../snowpack/pkg/react.js";
import {checkWinner, isMovePossible, getWorstMove} from "./helpers.js";
const initialBoard = Array.from(Array(9)).map(() => null);
const initialPlayer = "x";
export const useGame = () => {
  const [isAIOn, setAIOn] = useState(true);
  const [board, setBoard] = useState(initialBoard);
  const [activePlayer, setActivePlayer] = useState(initialPlayer);
  const [winner, setWinner] = useState(null);
  const toggleAI = useCallback(() => {
    setAIOn((prev) => !prev);
  }, [setAIOn]);
  const togglePlayer = useCallback((player) => {
    setActivePlayer(player === "x" ? "o" : "x");
  }, [setActivePlayer]);
  const setBoardItem = useCallback((value, index, onSet) => {
    setBoard((prev) => {
      const newState = Array.from(prev);
      newState[index] = value;
      onSet && onSet(newState);
      return newState;
    });
  }, [setBoard]);
  const makeAMove = useCallback((player, index) => {
    if (!winner && isMovePossible(board, index)) {
      setBoardItem(player, index, (board2) => {
        if (checkWinner(board2)) {
          setWinner(activePlayer);
        } else if (!board2.filter((item) => !item).length) {
          setWinner("draw");
        } else {
          togglePlayer(activePlayer);
        }
      });
    }
  }, [setBoardItem, setWinner, activePlayer, winner, board]);
  const startNewGame = useCallback(() => {
    setBoard(initialBoard);
    setActivePlayer(initialPlayer);
    setWinner(null);
  }, [setBoard, setActivePlayer]);
  useEffect(() => {
    if (isAIOn && activePlayer === "o") {
      makeAMove("o", getWorstMove(board, "o"));
    }
  }, [makeAMove, isAIOn, activePlayer, board]);
  return {
    board,
    activePlayer,
    winner,
    makeAMove,
    startNewGame,
    isAIOn,
    toggleAI
  };
};

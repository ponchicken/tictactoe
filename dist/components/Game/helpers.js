const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [2, 4, 6],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8]
];
export const checkWinner = (board) => {
  return winningCombinations.some((combination, i) => {
    return combination.every((index) => {
      return board[index] && board[index] === board[combination[0]];
    });
  });
};
export const isMovePossible = (board, index) => {
  return !board[index];
};
export const getWorstMove = (board, player) => {
  const availableMoves = board.map((_, i) => i).filter((i) => !board[i]);
  while (availableMoves.length) {
    const newBoard = Array.from(board);
    const randomAvailableMoveIndex = Math.floor(Math.random() * availableMoves.length);
    const randomAvailableMove = availableMoves[randomAvailableMoveIndex];
    newBoard[randomAvailableMove] = player;
    if (availableMoves.length === 1) {
      return availableMoves[0];
    } else if (!checkWinner(newBoard)) {
      return randomAvailableMove;
    } else {
      availableMoves.splice(randomAvailableMoveIndex, 1);
    }
  }
  return availableMoves[0];
};

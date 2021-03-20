import { useState, useCallback, useEffect } from 'react'
import { checkWinner, isMovePossible, getWorstMove } from './helpers'
import { Board, Player } from './types'

const initialBoard: Board = Array.from(Array(9)).map(() => null)
const initialPlayer: Player = 'x'

export const useGame = () => {
  const [isAIOn, setAIOn] = useState(true)
  const [board, setBoard] = useState<Board>(initialBoard)
  const [activePlayer, setActivePlayer] = useState<Player>(initialPlayer)
  const [winner, setWinner] = useState<Player | 'draw' | null>(null)

  const toggleAI = useCallback(() => {
    setAIOn(prev => !prev)
  }, [setAIOn])

  const togglePlayer = useCallback((player: Player) => {
    setActivePlayer(player === 'x' ? 'o' : 'x')
  }, [setActivePlayer])

  const setBoardItem = useCallback((
    value,
    index: number,
    onSet: (newState: Board) => void
  ) => {
    setBoard(prev => {
      const newState = Array.from(prev)
      newState[index] = value
      onSet && onSet(newState)
      return newState
    })
  }, [setBoard])

  const makeAMove = useCallback((player: Player, index: number) => {
    if (!winner && isMovePossible(board, index)) {
      setBoardItem(
        player,
        index,
        board => {
          if (checkWinner(board)) {
            setWinner(activePlayer)
          } else if (!board.filter((item) => !item).length) {
            setWinner('draw')
          } else {
            togglePlayer(activePlayer)
          }
        }
      )
    }
  }, [setBoardItem, setWinner, activePlayer, winner])

  const startNewGame = useCallback(() => {
    setBoard(initialBoard)
    setActivePlayer(initialPlayer)
    setWinner(null)
  }, [setBoard, setActivePlayer])

  /* AI takes its move 😈 */
  useEffect(() => {
    if (isAIOn && activePlayer === 'o') {
      makeAMove('o', getWorstMove(board, 'o'))
    }
  }, [makeAMove, isAIOn, activePlayer, board])

  return {
    board, activePlayer, winner, makeAMove, startNewGame, isAIOn, toggleAI
  }
}

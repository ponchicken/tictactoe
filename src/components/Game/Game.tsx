import React from 'react'
import { useGame } from './useGame'
import styles from './styles.module.css'

export const Game = () => {
  const game = useGame()

  return (
    <div className={styles.wrapper}>
      <div className={styles.controls}>
        <button onClick={game.startNewGame}>
          start new game
        </button>

        <label className={styles.label}>
          <input
            type="checkbox"
            onChange={game.toggleAI}
            checked={game.isAIOn}
          />
          with AI 🤖
        </label>
      </div>

      { game.winner
        ? (
            <div>
              winner: { game.winner }
            </div>
          )
        : (
            <div>
              active player: { game.activePlayer }
            </div>
          )
      }

      <div className={styles.board}>
        { game.board.map((item, i) => (
          <button
            key={i}
            className={styles.item}
            onClick={() => game.makeAMove(game.activePlayer, i)}
          >
            { item }
          </button>
        ))}
      </div>
    </div>
  )
}

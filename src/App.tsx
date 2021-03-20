import React from 'react'
import styles from './App.module.css'
import { Game } from 'src/components'

export const App: React.FC = () => {
  return (
    <div className={styles.app}>
      <Game />
    </div>
  )
}

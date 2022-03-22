import { Link } from 'react-router-dom'

import GameField from '../components/GameField'

import('../styles/game-view.scss')

function GameView() {
  return (
    <div className="game-view">
      <Link className="game-view__link" to="/">
        Leave game
      </Link>
      <GameField />
    </div>
  )
}

export default GameView

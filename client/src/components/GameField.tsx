import GameSquare from './GameSquare'
import squares from '../data/squares'

export default function GameField() {
  return (
    <div className="game-field">
      {squares.map(({ id, value }) => (
        <GameSquare key={id} value={value} />
      ))}
    </div>
  )
}

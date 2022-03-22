type PropTypes = {
  value: string
}

export default function GameSquare({
  value,
}: PropTypes) {
  return (
    <div className="game-field__square game-square">
      <p className="game-square__value">
        {value}
      </p>
    </div>
  )
}

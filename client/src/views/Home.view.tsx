import { Link } from 'react-router-dom'

function HomeView() {
  return (
    <div>
      <nav>
        <Link to="/game">
          Play Game
        </Link>
        <Link to="/history">
          History
        </Link>
      </nav>
    </div>
  )
}

export default HomeView

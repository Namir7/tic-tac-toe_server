import { BrowserRouter, Route, Routes } from 'react-router-dom'

import HomeView from './views/Home.view'
import GameView from './views/Game.view'
import HistoryView from './views/History.view'

import LoginView from './views/Login.view'
import RegisterPage from './views/Register.view'

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/game" element={<GameView />} />
        <Route path="/history" element={<HistoryView />} />
        <Route path="/login" element={<LoginView />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  )
}

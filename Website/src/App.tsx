import './App.css'
import GameCard from './components/Shared/GameCard/GameCard';
import jeopardyPNG from './assets/jeopardy.png'

function App() {
  return (
    <>
      <div className="game-row">
        <GameCard title='Jeopardy' img={jeopardyPNG} link='/jeopardy'/>
        <GameCard title='Wheel Of Fortune' img='' link='/wheeloffortune'/>
      </div>
    </>
  )
}

export default App
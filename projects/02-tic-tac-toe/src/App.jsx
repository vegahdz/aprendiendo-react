import { useState } from "react"
import confetti from "canvas-confetti"

import { Square } from "./components/Square.jsx"
import { TURNS } from "./constants.js"
import { checkWinnerFrom, checkEndGame } from "./logic/board.js"
import { WinnerModal } from "./components/WinnerModal.jsx"

function App() {
  const [board, setBoard] = useState(
      Array(9).fill(null)
    )

  const [turn, setTurn] = useState(TURNS.x)
  // null es que no hay ganador, false es que hay un empate
  const [winner, setWinner] = useState(null)

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.x)
    setWinner(null)
  }


  const updateBoard = (index) => {

    //no actualizamos esta posición
    //si ya tiene algo
    if (board[index] || winner) return

    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    const newTurn = turn === TURNS.x ? TURNS.o : TURNS.x
    setTurn(newTurn)
    // revisar si hay un ganador
    const newWinner = checkWinnerFrom(newBoard)
    if (newWinner) {
      confetti()
      setWinner (newWinner)
    }else if(checkEndGame(newBoard)){
      setWinner (false) // empate
    }
  }


  return (
    <>
      <main className='board'>
        <h1>TIC TAC TOE</h1>
        <button onClick={resetGame}>Reset del juego</button>
        <section className='game'>
          {
            board.map((_, index) => {
              return (
                <Square
                  key={index}
                  index={index}
                  updateBoard={updateBoard}
                >
                  {board[index]}
                </Square>
                )
            })
          }
        </section>
        <section className="turn">
          <Square isSelected = {turn === TURNS.x}>{TURNS.x}</Square>
          <Square isSelected = {turn === TURNS.o}>{TURNS.o}</Square>
        </section>

        <WinnerModal resetGame={resetGame} winner={winner} />

      </main>
    </>
  )
}

export default App

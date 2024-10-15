import { WINNER_COMBOS } from "../constants.js"

export const checkWinnerFrom = (boardToCheck) => {
  //revisa todas las combinaciones ganadoras
  //para ver si X u O ganó
  for(const combo of WINNER_COMBOS){
    const [a, b, c] = combo
    if(
      boardToCheck[a] &&
      boardToCheck[a] == boardToCheck[b] &&
      boardToCheck[a] == boardToCheck[c] 
    )
    { return boardToCheck[a]}
  }
  //si no hay ganador
  return null 
}

export  const checkEndGame = (newBoard) => {
  //revisa si hay empate
  //si no hay mas espacios vacios
  //en eltablero 
  return newBoard.every((square) => square !== null) 
}
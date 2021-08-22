import { move } from "./move"
import { listFreeSquares } from "./lib"
import { won } from "./won"
import R from "ramda"

// find a winning move or return a random move
export function findBestMove(b: Board, p: Piece): SquareNumber {
    const possibleMoves: SquareNumber[] = listFreeSquares(b)
    
    // Loop over the possible moves. Find and return the first winning move
    // or return undefined if there is no winning move
    const winningSquare = R.find((square: SquareNumber) => {
        const [b1, ok] = move(b,p,square)
        return (ok && won(b1))
    }, possibleMoves)

    // If there is no winning move return a random move
    if (!winningSquare) return possibleMoves[Math.floor(Math.random() * possibleMoves.length)] as SquareNumber
    
    return winningSquare
}
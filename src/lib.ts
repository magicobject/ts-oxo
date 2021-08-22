/**
 * General functions that do not easilt fit in other modules
 */
import { _ } from "./pieces"

export function listFreeSquares(b: Board): SquareNumber[]
{
    const freeSquares: SquareNumber[] = []
    let i=0
    b.forEach(element => {
        if (element === _ ) freeSquares.push(i as SquareNumber) 
        i = i + 1
    });
    return freeSquares
}


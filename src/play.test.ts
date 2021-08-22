import { _, X, O } from "./pieces"
import { findBestMove } from "./play"

test('Find win in 1 move', () => {
    const b1: Board = [X,X,_,_,_,_,O,O,_]
    expect(findBestMove(b1, X)).toBe(2)
    expect(findBestMove(b1, O)).toBe(8)
})
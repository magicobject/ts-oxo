import { listFreeSquares } from "./lib"
import { _, X, O } from "./pieces"

test('can find free squares', () => {
    const b1: Board = [X,_,_,X,O,_,O,O,_]
    expect(listFreeSquares(b1)).toEqual([1,2,5,8])
})
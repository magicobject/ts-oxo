import { move } from "./move"
import { X, O, _ } from "./pieces"

test('ongoing position', () => {
    const b: Board = [X,_,_,X,O,_,O,O,_]
    const b1: Board = [X,_,_,X,O,_,O,O,_]
    const [b2, updated] = move(b, O, 1)

    expect(b).toEqual(b1)
    expect(b2).toEqual([X,O,_,X,O,_,O,O,_])
    expect(updated).toBeTruthy()
})

test('can not overwrite occupied square', () => {
    const b1: Board = [X,_,_,X,O,_,O,O,_]
    const [b2, updated] = move(b1, O, 7)

    expect(b1).toEqual(b2)
    expect(updated).toBeFalsy()
})
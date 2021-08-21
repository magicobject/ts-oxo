import { wonBy, won } from "./won"

const X:X = "X"
const O:O = "O"
const _:_ = "_"

test('position won by X', () => {
    const b: Board = [X,X,X,_,_,_,O,O,_]
    expect(wonBy(b)).toBe(X)
})

test('position won by O', () => {
    const b: Board = [X,X,O,X,O,_,O,O,_]
    expect(wonBy(b)).toBe(O)
})

test('not won by anyone', () => {
    const b: Board = [X,X,O,_,_,_,O,O,_]
    expect(wonBy(b)).toBe(_)
})

test('won position', () => {
    const b: Board = [X,X,O,X,O,_,O,O,_]
    expect(won(b)).toBeTruthy
})

test('ongoing position', () => {
    const b: Board = [X,_,_,X,O,_,O,O,_]
    expect(won(b)).toBeFalsy
})
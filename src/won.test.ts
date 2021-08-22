import { wonBy, won, isOccupied, drawn } from "./won"
import { X, O, _ } from "./pieces"

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
    expect(won(b)).toBeTruthy()
})

test('drawn position', () => {
    const b: Board = [O,X,O,X,O,X,X,O,X]
    expect(won(b)).toBeFalsy()
    expect(drawn(b)).toBeTruthy()
})

test('ongoing position', () => {
    const b: Board = [X,_,_,X,O,_,O,O,_]
    expect(won(b)).toBeFalsy()
})

test('is occupied by X', () => {
    expect(isOccupied(X)).toBeTruthy()
})

test('is occupied by O', () => {
    expect(isOccupied(O)).toBeTruthy()
})

test('is unoccupied by _', () => {
    expect(isOccupied(_)).toBeFalsy()
})
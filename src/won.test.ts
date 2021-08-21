import { wonBy } from "./won"

const X:X = "X"
const O:O = "O"
const _:_ = "_"

test('won position', () => {
    const b: Board = [X,X,X,_,_,_,O,O,_]
    expect(wonBy(b)).toBe(X)
})


import { _ } from "./pieces"

export function move(b: Board, p: Piece, n: SquareNumber): [Board, boolean] {
    // Prevent overwriting
    if (b[n] != _) return [b, false]

    const copy = [...b]
    copy[n] = p
    return [copy as Board, true]
}
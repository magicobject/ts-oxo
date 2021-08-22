import { X, O, _ } from "./pieces"

/**
 * Draw a row of the board as a service to the render function
 * @param s1 Square
 * @param s2 Square 
 * @param s3 Square 
 * @return void
 */
function renderRow(s1: Square, s2: Square, s3: Square): void {
    console.log(` ${s1} | ${s2} | ${s3} `)
}

/**
 * Draw the board
 * @param b Board
 * @return void
 */
export function render(b: Board): void {
    renderRow(b[0], b[1], b[2])
    renderRow(b[3], b[4], b[5])
    renderRow(b[6], b[7], b[8])
}

const b: Board = [X,O,X,O,O,X,_,_,O]
render(b)
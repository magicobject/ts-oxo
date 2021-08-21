type _ = "_"
type X = "X"
type O = "O"
type Piece = O | X 
type Square = Piece | _
type SquareNumber = 0|1|2|3|4|5|6|7|8

type Board = [ Square, Square, Square, Square, Square, Square, Square, Square, Square ]
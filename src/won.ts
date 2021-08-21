const _:_ = "_"

export function won(b: Board): boolean {
    return wonBy(b) != _
}

export function wonBy(b: Board): Square {
    let s
    if ( (s = _wonBy(0,1,2,b)) != _ ) return s
    if ( (s = _wonBy(3,4,5,b)) != _ ) return s
    if ( (s = _wonBy(6,7,8,b)) != _ ) return s
    if ( (s = _wonBy(0,3,6,b)) != _ ) return s
    if ( (s = _wonBy(1,4,7,b)) != _ ) return s
    if ( (s = _wonBy(2,5,8,b)) != _ ) return s
    if ( (s = _wonBy(0,4,8,b)) != _ ) return s
    if ( (s = _wonBy(2,4,6,b)) != _ ) return s
    return _
}

function _wonBy(s1: SquareNumber, s2: SquareNumber, s3: SquareNumber, b: Board): Square {
    if ((b[s1] == b[s2]) && (b[s2] == b[s3]) && (b[s1] !== _)) return b[s1]
    return _
}
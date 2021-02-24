interface TV {
//행위 기술 = 메서드를 기술합니다.
turnOn(): boolean; 
turnOff(): void;//아무것도 반환받지 않는다는 의미입니당
}

const myTV : TV = {
  turnOn() {
    return true;
  },
  turnOff() {

  }
}

function tryTurnOn(tv : TV) {
  tv.turnOn
}

tryTurnOn(myTV);

//속성만 정의된 인터페이스
interface Cell {
  row: number;
  col : number;
  piece? : Piece;
}
//행위가 정의된 인터페이스
interface Piece {
  move(from: Cell, to:Cell) : boolean;
}


function createBoard () {
  const cells: Cell[] = [];
  for(let row = 0; row < 4; row++) {
    for(let col = 0; col < 3; col++) {
      cells.push({
        row, col
      })
    }
  }

  return cells;
}

const board = createBoard();
board[0].piece = {
  move(from:Cell, to:Cell) {
    return true;
  }
}
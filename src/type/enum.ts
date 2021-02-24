//열거형 
//특정한 상수들의 집합에 이름을 붙임


enum StarBuksGrade {
  WELCOME,
  GREEN,
  GOLD
}

// enum StarBuksGrade {
//   WELCOME="WELCOME",
//   GREEN="GREEN",
//   GOLD="GOLD"
// }

// enum StarBuksGrade {
//   WELCOME = 0,
//   NEW = 3,
//   GREEN = 1,
//   GOLD = 2
// }

function getDicound (v: StarBuksGrade) : number {
  switch (v) {
    case StarBuksGrade.WELCOME:
      return 0;
    case StarBuksGrade.GREEN:
      return 5;
    case StarBuksGrade.GOLD:
      return 10;
    default :
      return 0;
  }
}

console.log(getDicound(StarBuksGrade.GREEN)); //5
console.log(StarBuksGrade.GREEN); //1
console.log(StarBuksGrade); 
/*
{
  '0': 'WELCOME',
  '1': 'GREEN',
  '2': 'GOLD',
  WELCOME: 0,
  GREEN: 1,
  GOLD: 2
}*/
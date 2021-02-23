var score1 = 0;
let score2 = 200;
const defaultScore = 0;

function outer () {
  //var = 함수 단위의 블록 스코프
  if(true) {
    var score = 0;
  }

  for(var i = 0; i < 3; i++) {
    setTimeout(function() {
      console.log(i);
    }, 100)
  }
  //var 는 함수단위라, 생각한것처럼 출력 안되고, 100초뒤엔 이미 다 완료된 값이 들어옴

  console.log(score);
}

// outer();

function outer2 () {
  //var = 함수 단위의 블록 스코프
  if(true) {
    let score : number = 0;
    score = 30;
    // score = '30'; //불가능
  }

  for(let i = 0; i < 3; i++) {
    setTimeout(function() {
      console.log(i); //let 으로 찍으면 012 나온다! // var은 333나옴
    }, 100)
  }

}
outer2();
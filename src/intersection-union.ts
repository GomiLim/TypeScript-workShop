interface User {
  name : string;
}

interface Action {
  do() : void;
}

function createUserAction (u : User , a: Action) : User & Action{ //2가지 타입을 가져온다는 의미입니당
  return {...u, ...a}
}

const u = createUserAction({name : 'ej'}, {do() {console.log(this.name + ': 야호' )}})

console.log(u.name) //ej
console.log(u.do()) //ej : 야호
console.log(u) //{ name: 'ej', do: [Function: do] }

//======union type

function add1(a: string, b: string): string; // 함수 선언
function add1(a: number, b: number): number; // 함수 선언
function add1(a: any, b: any): any { // 함수 구현
  return a + b;
}

console.log(add1(1,2))
/*
타입스크립트의 ‘함수 오버로드(Overloads)’는 이름은 같지만 매개변수 타입과 반환 타입이 다른 여러 함수를 가질 수 있는 것을 말한다.
함수 오버로드를 통해 다양한 구조의 함수를 생성하고 관리할 수 있다.

아래 예제에서 add 함수는 2개의 선언부와 1개의 구현부를 가지고 있다.
주의할 점은 함수 선언부와 구현부의 매개변수 개수가 같아야 한다.

함수 구현부에 any가 자주 사용된다.
*/
function compare1(x: string, y: string): string; 
function compare1(x: number, y: number): number;

function compare1(x: string | number, y: string | number)  {
  if (typeof x === 'string' && typeof y === 'string') {
    return x.localeCompare(y);
  }
  if (typeof x === 'number' && typeof y === 'number') {
    return x === y ? 0 : x > y ? 1 : -1;
  }

  throw Error('not supported type');
}

const v = compare1(1,2);
console.log([3,2,1].sort(compare1));
console.log(['c','b','a'].sort(compare1));
console.log(['c','b',1].sort(compare1));
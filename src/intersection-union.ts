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
function add1(a: string | number, b: string | number): string | number { // 함수 구현
  if(typeof a === 'number' && typeof b === "number") {
    return Number(a + b);
  }
}

console.log(add1(1,2))
/*
타입스크립트의 ‘함수 오버로드(Overloads)’는 이름은 같지만 매개변수 타입과 반환 타입이 다른 여러 함수를 가질 수 있는 것을 말한다.
함수 오버로드를 통해 다양한 구조의 함수를 생성하고 관리할 수 있다.

아래 예제에서 add 함수는 2개의 선언부와 1개의 구현부를 가지고 있다.
주의할 점은 함수 선언부와 구현부의 매개변수 개수가 같아야 한다.

함수 구현부에 any가 자주 사용된다.
*/
function compare1(x: string, y: string): number; 
function compare1(x: number, y: number): number;

function compare1(x: string | number, y: string | number) {
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

/*
function compare1(x: string, y: string): string;  // 이거가 왜 안되는지 모르게또오..
function compare1(x: number, y: number): number;

function compare1(x: string | number, y: string | number) : string | number {
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
*/

function process(v : User | Action) {
  // if(typeof v === "") //<- interface인 User 과 Action은 컴파일 과정에서 사라지기때문에 (typeof es5 문법이기때문) typeof로 구분하는건 좋지 않음
                      // object 뭐시기라고 하긴했는데 모르겠음
                      // instanceof(?)를 사용하지 못하는 이유는, 저 타입들이 class 로 생성된 애들이 아니기때문입
                      //따라서, User나 Action에 들어있는 메소드나 프로퍼티의 유무를 가지고 구분해야함

  // if(v.do)   // <- 이렇게 적고싶은데 안됨, 왜냐면 union type 이기 때문에 do는 User에 포함되지 않으므로 사용할 수 없음
                // ㄸㅣ라서 확신을 갖고 타입을 박아버려야함 (타입 어썰션,,,?)
  if((<Action>v).do) {} // 된다 ~ 따라~
  if((<Action>v).do) { 
    // v.do             // 근데 막상 통과했는데, 안에서 마음대로 사용 못함. 왜? 저건 조건일뿐 타입가드가 아니기떄문...! 
  } 
}

//타입가드 생성해보기
function isAction(v: User | Action): v is Action { //타입을 박아버림!!
  return (<Action>v).do !== undefined; // true false 로 반환해서 조건문을 만들어줘용
}

function process1 (v: User | Action) {
  if(isAction(v)) {
    v.do(); // 잘된다~
  } else {
    v.name // action 이 아니니까 자연스레 User로 들어온 모습!
  }
}
//원시타입
let stringValue : string;
let numberValue : number;
let booleanValue : boolean;
let undefinedValue : undefined;
let nullValue : null;
//객체타입
let objectValue : object;
let symbolValue : symbol;
//any
let anyValue : any;

//숫자타입
//소수점도 할당 가능
numberValue =3.3;

//문자타입
//"", '', `` (템플릿형) 문자 할당 가능
stringValue = "hello"
stringValue = 'hello'
stringValue = `hello` // 멀티라인 가능 ${} <- 사용 가능

//참거짓타입
booleanValue = true;

//undefined, null 타입 = 최하위 타입으로 상위타입(number, string, object 등등에 다 할당 가능함)
stringValue = undefined;
stringValue = null;
objectValue = undefined;
objectValue = null;

//any타입 = 최상위 타입으로, any타입이 선언되면 어느 타입이들 할당 가능
anyValue= 1;
anyValue= '1';
anyValue= {};

//객체타입 = 원시타입은 할당 안됨
objectValue = {};
objectValue = { name : 'ej'};
objectValue = new String('hello'); // 생성자 함수는 반환값이 객체이므로 가능 String('hello')는 반환값이 문자열이므로 안됨

//symbole타입은 심볼 생성 함수로만 생성 가능. 보통 객체의 키값으로 이용
symbolValue = Symbol();

//배열타입
let nameList: string[];
nameList=["1","3"];

// ============================================================= 타입스크립트로 타입 선언

//인라인으로 타입 선언
let user : {name : string, score : number};

user = { // 위에 인라인으로 선언해준대로 값 다안넣어주면 에러남
  name : 'ej',
  score : 30
}

//투플타입 : 갯수와 타입을 딱 고정해서 정해줌
let tuple2 : [number, string]; 
let tuple3 : [number, string, number]; 
tuple2 = [1, 'ㅇ']; // [1,1] <- 오류남
tuple3 = [1, 'ㅇ', 3]; // [1,1] <- 오류남

/*
2월 23일 노트
const 는 재할당이 불가능한 상수이므로, 
최초에 선언할때 값을 선언해주면 타입이 알아서 읽히기 때문에
const로 선언시에는 타입을 별도로 선언해주지 않아도 된다!

아무런 값도 할당 안해주면 any타입이 할당됨
따라서 그럴때, 타입 어노테이션으로 타입을 지정해 주면됨

`ㅇㅇㅇㅇ` = 템플릿형 문자형
멀티라인 가능

any: 최상위 타입 
원시타입 : 상위타입
undefined , null : 하위 타입

객체타입 = 원시타입빼고 다 할당 가능.
팁 : new String(hello) 는 할당가능. 왜냐면,  new 가 붙으면 반환값이 객체기 떄문임

symbolValue = Symbol(); <- 심볼 함수로만 생성 할 수 있다.
*/